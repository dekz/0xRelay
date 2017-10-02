const cqrsDomain = require("cqrs-domain")
import { createOrder } from './createOrder';

module.exports = cqrsDomain.defineCommand(createOrder.config, createOrder.handler);