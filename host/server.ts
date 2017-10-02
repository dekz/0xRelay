import * as express from 'express';
import * as http from 'http'
import * as viewmodel from 'viewmodel';
import * as bodyParser from 'body-parser';
import { actions } from './routes';

const denormalizer = require('cqrs-eventdenormalizer');

const port = 3001
const app: express.Application = express();
const server: http.Server = http.createServer(app);

const options = {
  denormalizerPath: __dirname + '/order/viewBuilders',
  repository: {
    type: 'redis',
    prefix: 'viewmodel'
  },
  revisionGuardStore: {
    type: 'redis',
    prefix: 'guard',
  }
};

viewmodel.read(options.repository, (err, repository) => {
  let eventDenormalizer = denormalizer(options);
  eventDenormalizer.defineEvent({
    correlationId: 'commandId',
    id: 'id',
    name: 'event',
    aggregateId: 'payload.id',
    payload: 'payload',
    revision: 'head.revision'
  });

  let msgbus = require('../domain/msgbus');
  eventDenormalizer.init((err) => {
    if(err) { console.log(err) }
    console.log(eventDenormalizer.getInfo());

    msgbus.onEvent((data) => {
      console.log('eventDenormalizer -- denormalize event ' + data.event);
      eventDenormalizer.handle(data);
    });

    eventDenormalizer.onEvent((evt) => {
      console.log('\ndenormal -- publish event ' + evt.event);
    });

    app.use(bodyParser.json());
    actions(app, options, repository);
    server.listen(port);
  })
});