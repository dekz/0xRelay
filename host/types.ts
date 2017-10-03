export interface ErrorResult {
  code: number,
  reason: string,
}

export interface ValidationErrors {
  field: string,
  code?: number,
  reason?: string
}

export enum ValidationErrorCodes {
  REQUIRED_FIELD = 1000,
  INCORRECT_FORMAT = 1001,
  INVALID_ADDRESS = 1002,
  ADDRESS_NOT_SUPPORTED = 1003,
  VALUE_OUT_OF_RANGE = 1004,
  INVALID_SIGNATURE = 1005,
  UNSUPPORTED_OPTIONS = 1006,
}

export enum GeneralErrorCodes {
  VALIDATION_FAILED = 100,
  MALFORMED_JSON = 101,
  ORDER_SUBMISSION_DISABLED = 102,
  THROTTLED = 103
}

export interface ValidationErrorResult extends ErrorResult {
  code: GeneralErrorCodes.VALIDATION_FAILED,
  validationErrors: ValidationErrors[]
}

export interface SuccessResult { }

export interface CreateOrderSuccessResult extends SuccessResult {
  id: string
}

export interface ServiceResult {
  success: boolean,
  result: ErrorResult | SuccessResult
}

export interface Command {
  command: string,
  id: string
  aggregateId?: string,
  payload: any
}