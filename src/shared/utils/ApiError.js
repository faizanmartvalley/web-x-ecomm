export class ApiError extends Error {
  constructor(
    statusCode,
    code,
    message,
    details = null,
    isOperational = true
  ) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
    this.isOperational = isOperational;
  }
}
