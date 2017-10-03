import { validOrder } from '../../../../../domain/lib/order/validations/validOrder';
const validOrderData = require('../../../../fixtures/validOrder.json')
const invalidSignatureOrder = require('../../../../fixtures/invalidSignatureOrder.json')

describe('validOrder Validations', () => {

  it('applies on createOrder', () => {
    expect(validOrder.config.name).toContain('createOrder')
  })

  describe('invalid orders', () => {
    it('validates the order is JSON schema', (done) => {
      let data = { payload: {} };
      function cb(err, data) {
        expect(err).toBe('Invalid Order')
        done();
      }
      validOrder.predicate(data, cb)
    })

    it('validates the signature', (done) => {
        let data = { payload: invalidSignatureOrder };
        function cb(err, data) {
          expect(err).toBe('Invalid Order Signature')
          done();
        }
        validOrder.predicate(data, cb)
    })
  })

  it('validates a valid order', (done) => {
      let data = { payload: validOrderData };
      function cb(err, data) {
        expect(err).toBe(null)
        done();
      }
      validOrder.predicate(data, cb)
  })
})