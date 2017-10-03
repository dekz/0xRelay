export const createOrder = {
  config: {
    name: 'createOrder',
  },
  handler: (data, aggregate) => {
    aggregate.apply('orderCreated', data);
  }
};