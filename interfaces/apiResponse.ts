export interface ApiResponse<T = unknown> {
  ok: boolean;
  msg?: string;
  error?: string;
  data?: T;
}
