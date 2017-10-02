const cqrsDomain = require("cqrs-domain")
import { orderUpdated } from './orderUpdated';

module.exports = cqrsDomain.defineEvent(orderUpdated.config, orderUpdated.applicator);