const cqrsDomain = require("cqrs-domain")
import { orderCreated } from './orderCreated';

cqrsDomain.defineEvent(orderCreated.config, orderCreated.applicator);