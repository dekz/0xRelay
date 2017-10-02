import * as express from 'express';
import {Request, Response, NextFunction} from 'express';

var msgbus = require('../domain/msgbus');

export function actions(app: express.Application, options, repository) {
  const orderRepo = repository.extend({ collectionName: 'order' });

  app.post('/orders', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    msgbus.emitCommand(req.body);
    res.json({});
  })

  app.get('/', (req: Request, res: Response, next: NextFunction) => {
    orderRepo.find((err, items) => {
      if (err) {
        res.json({});
      } else {
        res.json(items);
      } 
    });
  })
}