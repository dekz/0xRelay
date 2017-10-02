export const orderCreated = {
  config: { name: 'orderCreated' },
  applicator: (data, aggregate) => { aggregate.set(data) }
};