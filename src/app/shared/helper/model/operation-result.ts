export class OperationResult<T> {
  success: boolean;
  message: string;
  payload: T;
}
