// أنشأنا كلاس اسمه ApiError يجمع معلومات الخطأ بمكان واحد.

export class ApiError extends Error {
  status: number | null;
  code: string;
  fieldErrors: Record<string, string[]>;
  isNetworkError: boolean;
  requestId?: string;

  constructor({
    status = null,
    code = 'UNKNOWN_ERROR',
    message = 'Something went wrong',
    fieldErrors = {},
    isNetworkError = false,
    requestId,
  }: {
    status?: number | null;
    code?: string;
    message?: string;
    fieldErrors?: Record<string, string[]>;
    isNetworkError?: boolean;
    requestId?: string;
  }) {
    super(message);

    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.fieldErrors = fieldErrors;
    this.isNetworkError = isNetworkError;
    this.requestId = requestId;

    Object.setPrototypeOf(this, ApiError.prototype);
  }
}