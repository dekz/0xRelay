const cqrsDomain = require("cqrs-domain")

console.log(__dirname)
const domain = cqrsDomain({
  domainPath: __dirname + '/lib',
  eventStore: {
    type: 'inMemory',
    dbName: '0xrelay'
  }
});

domain.defineCommand({
  id: 'id',
  name: 'command',
  aggregateId: 'payload.id',
  payload: 'payload',
  revision: 'head.revision'
});

domain.defineEvent({
  correlationId: 'commandId',
  id: 'id',
  name: 'event',
  aggregateId: 'payload.id',
  payload: 'payload',
  revision: 'head.revision'
});

import * as aggregates from './lib/aggregates';
import * as commands from './lib/commands';
import * as events from './lib/events'

domain.init((err) => {
})