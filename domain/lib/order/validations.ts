const cqrsDomain = require("cqrs-domain")
import { validOrder } from './validations/validOrder';

module.exports = [
  cqrsDomain.definePreLoadCondition(validOrder.config, validOrder.predicate)
]