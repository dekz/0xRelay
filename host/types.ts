export interface ErrorResult {
  code: number,
  reason: string,
}

export interface ValidationErrors {
  field: string,
  code?: number,
  reason?: string
}

export interface ValidationErrorResult extends ErrorResult {
  validationErrors: [ValidationErrors]
}

export interface SuccessResult { }

export interface CreateOrderSuccessResult extends SuccessResult {
  id: string
}

export interface ServiceResult {
  success: boolean,
  result: ErrorResult | SuccessResult
}