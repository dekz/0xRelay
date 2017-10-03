export const validCancel = {
  config: { name: ['cancelOrder'] },
  predicate: (data, cb) => {
    // There is no signed cancel operation so there is no validation 
    // that can take place yet
    cb(null, data);
  }
};