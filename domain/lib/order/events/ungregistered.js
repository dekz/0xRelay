module.exports = require('cqrs-domain').defineEvent({
  name: 'unregisteredEMailAddress', // optional, default is file name without extension
  payload: 'payload' // if not defined it will pass the whole event...
}, function (data, aggregate) {
  aggregate.set('emails', data.email);
});