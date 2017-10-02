const denormalizer = require("cqrs-eventdenormalizer")

module.exports = [
  denormalizer.defineViewBuilder({ name: 'orderCreated', id: 'payload.id' }, 'create'),
  denormalizer.defineViewBuilder({ name: 'orderUpdated',  id: 'payload.id' }, 'update'),
  denormalizer.defineViewBuilder({ name: 'orderDeleted',  id: 'payload.id' }, 'delete'),
]