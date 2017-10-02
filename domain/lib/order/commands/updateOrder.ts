export const updateOrder = {
  config: {
    name: 'updateOrder',
    aggregateId: 'aggregate.id'
  },
  handler: (data, aggregate) => { aggregate.apply('orderUpdated', data); }
};