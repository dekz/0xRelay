const cqrsDomain = require("cqrs-domain")
import { orderCreated } from './order/orderCreated';

cqrsDomain.defineEvent(orderCreated.config, orderCreated.applicator);