const cqrsDomain = require("cqrs-domain")
import { orderUpdated } from './orderUpdated';

cqrsDomain.defineEvent(orderUpdated.config, orderUpdated.applicator);