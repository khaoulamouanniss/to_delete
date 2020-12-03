const { fetchMyIp } = require('../fetchMyIp');
const { assert } = require('chai');

describe('fetchMyIp', () => {
  it('returns a string adresse for IP, via callback', (done) => {
    fetchMyIp((err, ip) => {
      // we expect no error for this scenario
      assert.equal(typeof(ip), String);
      assert.equal(err, null);
      done();
    });
  });
  it('returns an error for a non existent ip, via callback', (done) => {
    fetchMyIp((err, ip) => {
      // we expect no error for this scenario
      assert.equal(ip, null);

      // compare returned description
      assert.equal("IP not found!", err);

      done();
    });
  });
});
