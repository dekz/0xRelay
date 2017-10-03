import { ZeroEx, SignedOrder } from '0x.js';
import { SchemaValidator, ValidatorResult, schemas } from '0x-json-schemas';

const { orderSchema } = schemas;
const validator = new SchemaValidator();

export const validOrder = {
  config: { name: ['createOrder'] },
  predicate: (data, cb) => {
    let result = validator.validate(data.payload, orderSchema);
    if (!result.valid) {
      return cb('Invalid Order', result.errors);
    }

    let order: SignedOrder = data.payload;
    let orderHex = ZeroEx.getOrderHashHex(order);
    let validSignature = ZeroEx.isValidSignature(orderHex, order.ecSignature, order.maker)
    if (!validSignature) {
      return cb('Invalid Order Signature', order.ecSignature);
    }

    // TODO validateOrderFillableOrThrowAsync with an Infura/Local Provider
    cb(null, data);
  }
};