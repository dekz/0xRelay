import { orderCreated } from '../../../../../../domain/lib/order/events/orderCreated';

describe('orderCreated Event', () => {
  it('specifies the correct name', () => {
    expect(orderCreated.config.name).toBe('orderCreated');
  })

  it('sets data from the event', () => {
    const setter = jest.fn();
    const data  = { test: 'true' }

    orderCreated.applicator(data, { set: setter });
    expect(setter.mock.calls[0][0]).toBe(data);
  })
})