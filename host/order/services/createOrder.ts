import { Command,
         CreateOrderSuccessResult, 
         ValidationErrorResult,
         ValidationErrorCodes,
         GeneralErrorCodes,
         ValidationErrors,
         ServiceResult } from '../../types';
import { ZeroEx } from '0x.js';
import { SchemaValidator, ValidatorResult, schemas } from '0x-json-schemas';
const { orderSchema } = schemas;
const validator = new SchemaValidator();

import * as uuid from 'node-uuid';

export class CreateOrderService {
  private _msgbus;
  constructor(msgbus) {
    this._msgbus = msgbus;
  }

  public validationFailure(data, result: ValidatorResult): ValidationErrorResult {
    return {
      code: GeneralErrorCodes.VALIDATION_FAILED.valueOf(),
      reason: 'Validation Failed',
      validationErrors: result.errors.map((error) => { return { field: error.property, reason: error.message } })
    }
  }

  public success(data): CreateOrderSuccessResult {
    let correlationId: string = uuid.v4();
    let orderHashHex = ZeroEx.getOrderHashHex(data);
    let orderHash = orderHashHex.split('0x')[1];
    data.id = orderHash;
    let command: Command = {
      'command': 'createOrder',
      'aggregateId': orderHash,
      'id': correlationId,
      'payload': data
    }

    this._msgbus.emitCommand(command);
    return { id: correlationId };
  }

  public createOrder(data): ServiceResult {
    let result = validator.validate(data, orderSchema);
    if (result.valid) {
      return  { success: true, result: this.success(data) };
    } else {
      return { success: false, result: this.validationFailure(data, result) };
    }
  }
}