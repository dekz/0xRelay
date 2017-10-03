export const cancelOrder = {
  config: {
    name: 'cancelOrder',
  },
  handler: (data, aggregate) => { aggregate.apply('orderCancelled', data); }
};