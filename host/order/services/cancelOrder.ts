import { Command, CreateOrderSuccessResult, ServiceResult } from '../../types';

import * as uuid from 'node-uuid';
var msgbus = require('../../../domain/msgbus');

export class CancelOrderService {
  public static success(orderHash: string): CreateOrderSuccessResult {
    let correlationId: string = uuid.v4();
    let command: Command = {
      'command': 'cancelOrder',
      'aggregateId': orderHash,
      'id': correlationId,
      'payload': orderHash
    }

    msgbus.emitCommand(command);
    return { id: correlationId };
  }

  public static cancelOrder(orderHash: string): ServiceResult {
    return  { success: true, result: CancelOrderService.success(orderHash) };
  }
}