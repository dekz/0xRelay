const cqrsDomain = require("cqrs-domain")
import { order } from './order';

cqrsDomain.defineAggregate(order)