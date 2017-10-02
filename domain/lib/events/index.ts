//import cqrsDomain from 'cqrs-domain';
import * as cqrsDomain from '../../../types/cqrs-domain';
import { orderCreated } from './order/orderCreated';

cqrsDomain.defineEvent(orderCreated.config, orderCreated.applicator);