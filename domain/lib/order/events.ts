const cqrsDomain = require("cqrs-domain")
import { orderCreated } from './events/orderCreated';
import { orderUpdated } from './events/orderUpdated';
import { orderCancelled } from './events/orderCancelled';

module.exports = [
  cqrsDomain.defineEvent(orderCreated.config, orderCreated.applicator),
  cqrsDomain.defineEvent(orderUpdated.config, orderUpdated.applicator),
  cqrsDomain.defineEvent(orderCancelled.config, orderCancelled.applicator)
]
