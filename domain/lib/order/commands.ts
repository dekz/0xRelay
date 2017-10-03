const cqrsDomain = require("cqrs-domain")
import { createOrder } from './commands/createOrder';
import { updateOrder } from './commands/updateOrder';
import { cancelOrder } from './commands/cancelOrder';


module.exports = [
  cqrsDomain.defineCommand(createOrder.config, createOrder.handler),
  cqrsDomain.defineCommand(updateOrder.config, updateOrder.handler),
  cqrsDomain.defineCommand(cancelOrder.config, cancelOrder.handler)
]