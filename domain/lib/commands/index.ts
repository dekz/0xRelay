import * as cqrsDomain from '../../../types/cqrs-domain';
import { createOrder } from './order/createOrder';

cqrsDomain.defineCommand(createOrder.config, createOrder.handler);