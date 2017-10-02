const cqrsDomain = require("cqrs-domain")
import { order } from './order';

module.exports = cqrsDomain.defineAggregate(order)