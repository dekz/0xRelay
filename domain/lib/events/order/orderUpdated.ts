export const orderUpdated = {
  config: { name: 'orderUpdated' },
  applicator: (data, aggregate) => { aggregate.set(data) }
};