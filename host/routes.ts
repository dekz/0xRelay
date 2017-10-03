import * as express from 'express';
import {Request, Response, NextFunction} from 'express';
import * as uuid from 'node-uuid';
import { CreateOrderService } from './order/services/createOrder';
import { CancelOrderService } from './order/services/cancelOrder';
import { OrderRepository } from './order/repositories/orderRepository';

export function actions(app: express.Application, options, orderRepository, msgbus) {

  const createOrderService = new CreateOrderService(msgbus);

  // Create an Order
  app.post('/v0/orders', (req: Request, res: Response, next: NextFunction) => {
    let serviceResult = createOrderService.createOrder(req.body);
    if (!serviceResult.success) {
      return res.status(400).json(serviceResult.result);
    }

    return res.status(201).json(serviceResult.result);
  })

  // List all Orders
  app.get('/v0/orders', (req: Request, res: Response, next: NextFunction) => {
    orderRepository.findAll()
      .then((result: any[]) => {
        res.status(200).json(result);
      }).catch(() => { res.status(200).json([])} )
  })

  // Find order by orderHash
  app.get('/v0/orders/:orderHash', (req: Request, res: Response, next: NextFunction) => {
    orderRepository.find(req.params.orderHash)
      .then((result: any) => {
        res.status(200).json(result);
      }).catch(() => { res.status(404).json({})} )
  })

  // Cancel order by orderHash
  app.delete('/v0/orders/:orderHash', (req: Request, res: Response, next: NextFunction) => {
   let serviceResult = CancelOrderService.cancelOrder(req.params.orderHash);
   res.status(200).json({});
  })
}