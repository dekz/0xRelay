var denormal = require("cqrs-eventdenormalizer")

module.exports = [
  denormal.defineViewBuilder({ name: 'orderCreated',  id: 'payload.id' }, 'create'),
  denormal.defineViewBuilder({ name: 'orderUpdated',  id: 'payload.id' }, 'update'),
  denormal.defineViewBuilder({ name: 'orderDeleted',  id: 'payload.id' }, 'delete'),
]