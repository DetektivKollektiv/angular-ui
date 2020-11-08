export interface LoginResult {
  success: boolean;
  reason: LoginResultReason;
  username: string;
}

export enum LoginResultReason {
  LoginSuccessful,
  ConfirmationMissing,
  Cancelled
}
