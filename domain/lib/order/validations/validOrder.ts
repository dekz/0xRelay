import { ZeroEx } from '0x.js';
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
    cb(null, data);
  }
};