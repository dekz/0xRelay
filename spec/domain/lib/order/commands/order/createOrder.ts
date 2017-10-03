import { createOrder } from '../../../../../../domain/lib/order/commands/createOrder';

describe('createOrder Command', () => {
  it('specifies the correct command name', () => {
    expect(createOrder.config.name).toBe('createOrder');
  })

  it('emits a orderCreated event', () => {
    const apply = jest.fn();
    const data  = {}

    createOrder.handler(data, { apply: apply });
    expect(apply.mock.calls[0][0]).toBe('orderCreated');
    expect(apply.mock.calls[0][1]).toBe(data);
  })
})