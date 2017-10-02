const domain = require('cqrs-domain')({
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
