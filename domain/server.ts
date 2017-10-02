const cqrsDomain = require('cqrs-domain')
const msgbus     = require('./msgbus')

const domain = cqrsDomain({
  domainPath: __dirname + '/lib',
  eventStore: {
    type: 'redis'
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

domain.init((err) => {
  msgbus.onCommand((cmd) => {
    console.log('\ndomain -- received command ' + cmd.command + ' from redis:');
    console.log(cmd);

    console.log('\n-> handle command ' + cmd.command);
    
    domain.handle(cmd);
  });
  domain.onEvent((evt) => {
    console.log('domain: ' + evt.event);
    msgbus.emitEvent(evt);
  });
})