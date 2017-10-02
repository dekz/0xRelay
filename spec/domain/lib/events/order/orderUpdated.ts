import { orderUpdated } from '../../../../../domain/lib/order/events/orderUpdated';

describe('orderUpdated Event', () => {
  it('specifies the correct name', () => {
    expect(orderUpdated.config.name).toBe('orderUpdated');
  })

  it('sets data from the event', () => {
    const setter = jest.fn();
    const data  = { test: 'true' }

    orderUpdated.applicator(data, { set: setter });
    expect(setter.mock.calls[0][0]).toBe(data);
  })
})