import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Address, UserRole } from '../types';
import { authService } from '../services';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  requestOtp: (phone: string) => Promise<{ success: boolean; message: string }>;
  verifyOtp: (phone: string, code: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithFacebook: () => Promise<void>;
  loginAsAdmin: (pin?: string) => Promise<void>;
  toggleAdminRole: () => void;
  logout: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  addAddress: (address: Omit<Address, 'id'>) => Promise<void>;
  updateAddress: (address: Address) => Promise<void>;
  deleteAddress: (addressId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const current = await authService.getCurrentUser();
        setUser(current);
      } catch {
        // Handled
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  }, []);

  const requestOtp = async (phone: string) => {
    return authService.requestOtp(phone);
  };

  const verifyOtp = async (phone: string, code: string) => {
    setIsLoading(true);
    try {
      const session = await authService.verifyOtp(phone, code);
      setUser(session.user);
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const session = await authService.loginWithGoogle();
      setUser(session.user);
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithFacebook = async () => {
    setIsLoading(true);
    try {
      const session = await authService.loginWithFacebook();
      setUser(session.user);
    } finally {
      setIsLoading(false);
    }
  };

  const loginAsAdmin = async (pin?: string) => {
    setIsLoading(true);
    try {
      const session = await authService.loginAsAdmin(pin);
      setUser(session.user);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAdminRole = () => {
    if (!user) {
      // Create guest demo admin
      loginAsAdmin('0000');
      return;
    }
    const newRole: UserRole = user.role === 'admin' ? 'customer' : 'admin';
    const updated = { ...user, role: newRole };
    setUser(updated);
    authService.updateProfile({ role: newRole });
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await authService.logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<User>) => {
    const updated = await authService.updateProfile(updates);
    setUser(updated);
  };

  const addAddress = async (addressData: Omit<Address, 'id'>) => {
    const newAddr = await authService.addAddress(addressData);
    if (user) {
      setUser({
        ...user,
        addresses: [...(user.addresses || []), newAddr],
      });
    }
  };

  const updateAddress = async (address: Address) => {
    const updated = await authService.updateAddress(address);
    if (user) {
      const addrs = (user.addresses || []).map((a) => (a.id === updated.id ? updated : a));
      setUser({ ...user, addresses: addrs });
    }
  };

  const deleteAddress = async (addressId: string) => {
    await authService.deleteAddress(addressId);
    if (user) {
      setUser({
        ...user,
        addresses: (user.addresses || []).filter((a) => a.id !== addressId),
      });
    }
  };

  const isAuthenticated = user !== null;
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin,
        isLoading,
        requestOtp,
        verifyOtp,
        loginWithGoogle,
        loginWithFacebook,
        loginAsAdmin,
        toggleAdminRole,
        logout,
        updateProfile,
        addAddress,
        updateAddress,
        deleteAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
