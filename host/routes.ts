import * as express from 'express';
import {Request, Response, NextFunction} from 'express';
import * as uuid from 'node-uuid';
import { createOrderService } from './order/services/createOrder';

export function actions(app: express.Application, options, repository) {
  const orderRepo = repository.extend({ collectionName: 'order' });

  // Create an Order
  app.post('/orders', (req: Request, res: Response, next: NextFunction) => {
    let serviceResult = createOrderService(req.body);
    if (serviceResult.success) {
      res.status(201).json(serviceResult.result);
    } else {
      res.status(400).json(serviceResult.result);
    }
  })

  // List all Orders
  app.get('/', (req: Request, res: Response, next: NextFunction) => {
    orderRepo.find((err, items) => {
      if (err) {
        res.json([]);
      } else {
        res.json(items);
      } 
    });
  })
}