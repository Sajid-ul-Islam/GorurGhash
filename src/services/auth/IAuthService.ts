import { User, Address } from '../../types';

export interface OtpResponse {
  success: boolean;
  message: string;
  expiresInSeconds?: number;
}

export interface AuthSession {
  user: User;
  token: string;
}

export interface IAuthService {
  requestOtp(phone: string): Promise<OtpResponse>;
  verifyOtp(phone: string, code: string): Promise<AuthSession>;
  loginWithGoogle(): Promise<AuthSession>;
  loginWithFacebook(): Promise<AuthSession>;
  loginAsAdmin(pinOrPassword?: string): Promise<AuthSession>;
  logout(): Promise<void>;
  getCurrentUser(): Promise<User | null>;
  updateProfile(updates: Partial<User>): Promise<User>;
  addAddress(address: Omit<Address, 'id'>): Promise<Address>;
  updateAddress(address: Address): Promise<Address>;
  deleteAddress(addressId: string): Promise<void>;
}
