module.exports = require("cqrs-domain").defineAggregate({
  name: 'order',
  defaultCommandPayload: 'payload',
  defaultEventPayload: 'payload'
})