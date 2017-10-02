const cqrsDomain = require("cqrs-domain")
import { orderCreated } from './orderCreated';

module.exports = cqrsDomain.defineEvent(orderCreated.config, orderCreated.applicator);