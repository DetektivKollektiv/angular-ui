export interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
  id: string | null;
  email: string | null;
  idToken: string | null;
}
