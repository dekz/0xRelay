import { Order } from '0x.js';

export class OrderRepository {
  private _repository;

  constructor(repository) {
    this._repository = repository.extend({ collectionName: 'order' });
  }

  public findAll(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this._repository.find((err, items: any[]) => {
        if (err) { return reject(err); }
        return resolve(items);
      });

    })
  }

  public find(orderHash: string): Promise<Order> {
    return this.findAll().then((results: any[]) => {
      let orders = results.filter((item) => { return item.id == orderHash });
      if (orders.length == 0) {
        return Promise.reject(orderHash);
      }
      return Promise.resolve(orders[0]);
    })
  }
}