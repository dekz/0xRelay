const cqrsDomain = require("cqrs-domain")
import { updateOrder } from './updateOrder';

module.exports = cqrsDomain.defineCommand(updateOrder.config, updateOrder.handler);