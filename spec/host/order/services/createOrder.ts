import { ValidatorResult } from '0x-json-schemas';
import { CreateOrderService } from '../../../../host/order/services/createOrder';
const validOrderData = require('../../../fixtures/validOrder.json')

describe('CreateOrderService', () => {
  it('returns the validation failure result code', () => {
    const Mock = jest.fn<ValidatorResult>(() => ({
      errors: [],
    }));

    const validationResult = new Mock();
    let result = new CreateOrderService({}).validationFailure({}, validationResult);
    expect(result.code).toBe(100);
    expect(result.reason).toBe('Validation Failed');
  })

  describe('success', () => {
    it('emits a command', (done) => {
      let orderData = validOrderData;
      let msgbus = {
        emitCommand: function(data) {
          expect(data.command).toBe('createOrder')
          expect(data.aggregateId).toBe('62d259e0d7e0ba17801f69c82e55e071fdabb910a3091445e14a6a6c0319c791')
          expect(data.payload).toBe(orderData)
          done();
        }
      };

      let result = new CreateOrderService(msgbus).success(orderData);
    })
  })

  describe('createOrder', () => {
    it('returns a service result with true on success', () => {
      let result = new CreateOrderService({ emitCommand: jest.fn()}).createOrder(validOrderData);
      expect(result.success).toBe(true);
    })

    it('returns a service result with false on failure', () => {
      let result = new CreateOrderService({ emitCommand: jest.fn()}).createOrder({});
      expect(result.success).toBe(false);
    })
  })
})