export const orderCancelled = {
  config: {
    name: 'orderCancelled',
  },
  applicator: (data, aggregate) => { aggregate.set({}) }
};