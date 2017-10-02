export const createOrder = {
  config: {
    name: 'createOrder',
    aggregateId: 'aggregate.id'
  },
  handler: (data, aggregate) => {
    console.log("handling command")
    console.log(data);
    aggregate.apply('orderCreated', data);
  }
};