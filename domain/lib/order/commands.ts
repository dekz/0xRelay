const cqrsDomain = require("cqrs-domain")
import { createOrder } from './commands/createOrder';
import { updateOrder } from './commands/updateOrder';


module.exports = [
  cqrsDomain.defineCommand(createOrder.config, createOrder.handler),
  cqrsDomain.defineCommand(updateOrder.config, updateOrder.handler)
]