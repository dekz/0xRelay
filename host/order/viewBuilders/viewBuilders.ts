var denormal = require('cqrs-eventdenormalizer')

module.exports = [
  denormal.defineViewBuilder({ name: 'orderCreated',    id: 'aggregateId' }, 'create'),
  denormal.defineViewBuilder({ name: 'orderUpdated',    id: 'aggregateId' }, 'update'),
  denormal.defineViewBuilder({ name: 'orderCancelled',  id: 'aggregateId' }, 'delete'),
]