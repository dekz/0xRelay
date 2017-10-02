import { CreateOrderSuccessResult, ValidationErrorResult, ServiceResult } from '../../types';
import { ZeroEx } from '0x.js';
import { SchemaValidator, ValidatorResult, schemas } from '0x-json-schemas';
const { orderSchema } = schemas;
const validator = new SchemaValidator();

import * as uuid from 'node-uuid';
var msgbus = require('../../../domain/msgbus');

export function createOrderServiceSuccess(data): CreateOrderSuccessResult {
  let correlationId: string = uuid.v4();
  let orderHash = ZeroEx.getOrderHashHex(data);

  let command = {
    "command": "createOrder",
    "aggregateId": orderHash,
    "id": correlationId,
    "payload": data
  }

  msgbus.emitCommand(command);
  return { id: correlationId };
}

export function createOrderValidationFailure(data, result: ValidatorResult): ValidationErrorResult {
  return {
    code: 1001,
    reason: "Validation Failed",
    validationErrors: [ { field: result.errors[0].property, reason: result.errors[0].message }]
  }
}
export function createOrderService(data): ServiceResult {
  let result = validator.validate(data, orderSchema);
  if (result.valid) {
    return  { success: true, result: createOrderServiceSuccess(data) };
  } else {
    return { success: false, result: createOrderValidationFailure(data, result) };
  }
}