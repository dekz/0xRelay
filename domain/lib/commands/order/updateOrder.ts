export const updateOrder = {
  config: { name: 'updateOrder' },
  handler: (data, aggregate) => { aggregate.apply('orderUpdated', data); }
};