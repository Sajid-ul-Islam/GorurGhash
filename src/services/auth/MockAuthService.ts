import AsyncStorage from '@react-native-async-storage/async-storage';
import { IAuthService, OtpResponse, AuthSession } from './IAuthService';
import { User, Address } from '../../types';

const STORAGE_USER_KEY = '@gorurghash_user_session';
const STORAGE_TOKEN_KEY = '@gorurghash_auth_token';

export class MockAuthService implements IAuthService {
  private currentUser: User | null = null;
  private currentToken: string | null = null;
  private pendingOtps: Map<string, { code: string; expiresAt: number }> = new Map();

  private delay<T>(data: T, ms: number = 100): Promise<T> {
    return new Promise((resolve) => setTimeout(() => resolve(data), ms));
  }

  async init(): Promise<User | null> {
    try {
      const storedUser = await AsyncStorage.getItem(STORAGE_USER_KEY);
      const storedToken = await AsyncStorage.getItem(STORAGE_TOKEN_KEY);
      if (storedUser && storedToken) {
        this.currentUser = JSON.parse(storedUser);
        this.currentToken = storedToken;
        return this.currentUser;
      }
    } catch {
      // Storage access failure fallback
    }
    return null;
  }

  async requestOtp(phone: string): Promise<OtpResponse> {
    const code = '1234'; // Default demo OTP code
    const expiresAt = Date.now() + 60 * 1000;
    this.pendingOtps.set(phone, { code, expiresAt });

    return this.delay({
      success: true,
      message: `OTP sent to ${phone}. For prototype demo, use code: 1234`,
      expiresInSeconds: 60,
    }, 150);
  }

  async verifyOtp(phone: string, code: string): Promise<AuthSession> {
    const pending = this.pendingOtps.get(phone);
    
    // Accept 1234 or the generated code
    if (code !== '1234' && (!pending || pending.code !== code)) {
      throw new Error('Invalid OTP code. Please enter 1234.');
    }

    if (pending && Date.now() > pending.expiresAt && code !== '1234') {
      throw new Error('OTP has expired. Please tap Resend Code.');
    }

    const user: User = {
      id: `usr_${Date.now()}`,
      name: 'Ghash Shopper',
      phone,
      email: `${phone.replace(/\D/g, '')}@customer.gorurghash.com`,
      role: 'customer',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
      createdAt: new Date().toISOString(),
      addresses: [
        {
          id: 'addr_1',
          title: 'Home',
          recipientName: 'Ghash Shopper',
          phone,
          division: 'Dhaka',
          district: 'Dhaka City',
          thana: 'Uttara',
          streetAddress: 'House 12, Road 4, Sector 3',
          isDefault: true,
        },
      ],
    };

    const token = `jwt_mock_${Date.now()}`;
    await this.persistSession(user, token);
    return this.delay({ user, token }, 150);
  }

  async loginWithGoogle(): Promise<AuthSession> {
    const user: User = {
      id: 'usr_google_1',
      name: 'Shaon Ahmed',
      email: 'shaon.ahmed@gmail.com',
      phone: '+880 1713-222653',
      role: 'customer',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      createdAt: new Date().toISOString(),
      addresses: [
        {
          id: 'addr_google_1',
          title: 'Home',
          recipientName: 'Shaon Ahmed',
          phone: '+880 1713-222653',
          division: 'Dhaka',
          district: 'Dhaka City',
          thana: 'Dhanmondi',
          streetAddress: 'House 24, Road 8A',
          isDefault: true,
        },
      ],
    };

    const token = `jwt_google_${Date.now()}`;
    await this.persistSession(user, token);
    return this.delay({ user, token }, 200);
  }

  async loginWithFacebook(): Promise<AuthSession> {
    const user: User = {
      id: 'usr_fb_1',
      name: 'Nusrat Jahan',
      email: 'nusrat.jahan@fb.com',
      phone: '+880 1819-876543',
      role: 'customer',
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
      createdAt: new Date().toISOString(),
      addresses: [
        {
          id: 'addr_fb_1',
          title: 'Office',
          recipientName: 'Nusrat Jahan',
          phone: '+880 1819-876543',
          division: 'Dhaka',
          district: 'Dhaka City',
          thana: 'Banani',
          streetAddress: 'Plot 45, Road 11, Block D',
          isDefault: true,
        },
      ],
    };

    const token = `jwt_fb_${Date.now()}`;
    await this.persistSession(user, token);
    return this.delay({ user, token }, 200);
  }

  async loginAsAdmin(pinOrPassword?: string): Promise<AuthSession> {
    // Demo admin pin is 0000 or empty for easy switching
    if (pinOrPassword && pinOrPassword !== '0000' && pinOrPassword !== 'admin123') {
      throw new Error('Invalid Admin PIN. Demo PIN is 0000.');
    }

    const user: User = {
      id: 'usr_admin_master',
      name: 'Gorur Ghash Store Admin',
      email: 'admin@gorurghash.com',
      phone: '+880 1339913140',
      role: 'admin',
      avatarUrl: 'https://gorurghash.com/wp-content/uploads/2025/08/cropped-png-logo-only-143x78.png',
      createdAt: '2024-01-01T00:00:00Z',
    };

    const token = `jwt_admin_${Date.now()}`;
    await this.persistSession(user, token);
    return this.delay({ user, token }, 150);
  }

  async logout(): Promise<void> {
    this.currentUser = null;
    this.currentToken = null;
    try {
      await AsyncStorage.removeItem(STORAGE_USER_KEY);
      await AsyncStorage.removeItem(STORAGE_TOKEN_KEY);
    } catch {
      // Ignored
    }
  }

  async getCurrentUser(): Promise<User | null> {
    if (!this.currentUser) {
      await this.init();
    }
    return this.currentUser;
  }

  async updateProfile(updates: Partial<User>): Promise<User> {
    if (!this.currentUser) throw new Error('Not authenticated');
    this.currentUser = { ...this.currentUser, ...updates };
    if (this.currentToken) {
      await this.persistSession(this.currentUser, this.currentToken);
    }
    return this.delay(this.currentUser);
  }

  async addAddress(addressData: Omit<Address, 'id'>): Promise<Address> {
    if (!this.currentUser) throw new Error('Not authenticated');
    const newAddr: Address = {
      ...addressData,
      id: `addr_${Date.now()}`,
    };
    const currentAddresses = this.currentUser.addresses || [];
    if (newAddr.isDefault) {
      currentAddresses.forEach((a) => (a.isDefault = false));
    }
    this.currentUser.addresses = [...currentAddresses, newAddr];
    if (this.currentToken) {
      await this.persistSession(this.currentUser, this.currentToken);
    }
    return this.delay(newAddr);
  }

  async updateAddress(address: Address): Promise<Address> {
    if (!this.currentUser) throw new Error('Not authenticated');
    let addrs = this.currentUser.addresses || [];
    if (address.isDefault) {
      addrs = addrs.map((a) => ({ ...a, isDefault: false }));
    }
    const idx = addrs.findIndex((a) => a.id === address.id);
    if (idx !== -1) {
      addrs[idx] = address;
    } else {
      addrs.push(address);
    }
    this.currentUser.addresses = addrs;
    if (this.currentToken) {
      await this.persistSession(this.currentUser, this.currentToken);
    }
    return this.delay(address);
  }

  async deleteAddress(addressId: string): Promise<void> {
    if (!this.currentUser) throw new Error('Not authenticated');
    this.currentUser.addresses = (this.currentUser.addresses || []).filter((a) => a.id !== addressId);
    if (this.currentToken) {
      await this.persistSession(this.currentUser, this.currentToken);
    }
  }

  private async persistSession(user: User, token: string): Promise<void> {
    this.currentUser = user;
    this.currentToken = token;
    try {
      await AsyncStorage.setItem(STORAGE_USER_KEY, JSON.stringify(user));
      await AsyncStorage.setItem(STORAGE_TOKEN_KEY, token);
    } catch {
      // Storage failure handled gracefully
    }
  }
}
