/** Results */
export type Result<T> = Success<T> | Failure;

export interface Success<T> {
  ok: true;
  data: T;
}

export interface Failure {
  ok: false;
  message: string;
}

export function success<T>(data: T): Success<T> {
  return {
    ok: true,
    data,
  };
}

export function failure(message: string): Failure {
  return {
    ok: false,
    message,
  };
}
