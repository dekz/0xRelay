import { updateOrder } from '../../../../../domain/lib/order/commands/updateOrder';

describe('updateOrder Command', () => {
  it('specifies the correct command name', () => {
    expect(updateOrder.config.name).toBe('updateOrder');
  })

  it('emits a orderUpdated event', () => {
    const apply = jest.fn();
    const data  = {}

    updateOrder.handler(data, { apply: apply });
    expect(apply.mock.calls[0][0]).toBe('orderUpdated');
    expect(apply.mock.calls[0][1]).toBe(data);
  })
})