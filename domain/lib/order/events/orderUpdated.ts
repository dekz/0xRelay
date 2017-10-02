export const orderUpdated = {
  config: {
    name: 'orderUpdated',
    aggregateId: 'aggregate.id'
  },
  applicator: (data, aggregate) => { aggregate.set(data) }
};