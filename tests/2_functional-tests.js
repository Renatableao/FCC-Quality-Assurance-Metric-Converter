const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  suite('Test GET /api/convert', function () {

    // #1
    test('Convert 10L valid input', function (done) {
      chai
        .request(server)
        .get('/api/convert')
        .query({input: '10L'})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 10);
          assert.equal(res.body.initUnit, 'L');
          assert.approximately(res.body.returnNum, 2.64172, 0.1);
          assert.equal(res.body.returnUnit, 'gal');
          done();
        });
    });

    // #2
    test('Convert 32g invalid input', function (done) {
      chai
        .request(server)
        .get('/api/convert')
        .query({input: '32g'})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initUnit, undefined);
          done();
        });
    });

    // #3
    test('Convert 3/7.2/4kg invalid input', function (done) {
      chai
        .request(server)
        .get('/api/convert')
        .query({input: '3/7.2/4kg'})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, undefined);
          done();
        });
    });

     // #4
    test('Convert 3/7.2/4kilomegagram invalid input', function (done) {
      chai
        .request(server)
        .get('/api/convert')
        .query({input: '3/7.2/4kilomegagram'})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, undefined);
          assert.equal(res.body.initUnit, undefined);
          done();
        });
    });

    // #5
    test('Convert kg (no number) invalid input', function (done) {
      chai
        .request(server)
        .get('/api/convert')
        .query({input: 'kg'})
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.initNum, 1);
          assert.equal(res.body.initUnit, 'kg');
          assert.approximately(res.body.returnNum, 2.20462, 0.1);
          assert.equal(res.body.returnUnit, 'lbs');
          done();
        });
    });
    
  })
});
