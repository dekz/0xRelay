const cqrsDomain = require("cqrs-domain")
import { orderCreated } from './events/orderCreated';
import { orderUpdated } from './events/orderUpdated';

module.exports = [
  cqrsDomain.defineEvent(orderUpdated.config, orderUpdated.applicator),
  cqrsDomain.defineEvent(orderCreated.config, orderCreated.applicator)
]
