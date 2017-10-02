export const orderCancelled = {
  config: {
    name: 'orderCancelled',
    aggregateId: 'aggregate.id'
  },
  applicator: (data, aggregate) => { aggregate.set(data) }
};