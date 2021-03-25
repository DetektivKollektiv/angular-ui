import { LoginResultReason } from './LoginResultReason';

export interface LoginResult {
  success: boolean;
  reason: LoginResultReason;
  username: string;
}
