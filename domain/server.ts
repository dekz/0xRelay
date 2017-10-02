import * as uuid from 'node-uuid';

const cqrsDomain = require('cqrs-domain')
const msgbus     = require('./msgbus')

const domain = cqrsDomain({
  domainPath: __dirname + '/lib',
  eventStore: {
    type: 'redis',
    prefix: 'eventstore'
  }
});

domain.defineCommand({
  id: 'id',
  name: 'command',
  aggregateId: 'aggregateId',
  payload: 'payload',
  revision: 'head.revision',
});

domain.defineEvent({
  correlationId: 'commandId',
  id: 'id',
  name: 'event',
  aggregateId: 'aggregateId',
  payload: 'payload',
  revision: 'head.revision'
});

domain.aggregateIdGenerator(() => {
  return uuid.v4().toString();
});

domain.init((err) => {
  msgbus.onCommand((cmd) => {
    console.log('\ndomain -- received command ' + cmd.command);
    
    domain.handle(cmd);
  });

  domain.onEvent((evt) => {
    console.log('domain: ' + evt.event);
    msgbus.emitEvent(evt);
  });
})