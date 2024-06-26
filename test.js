const request = require('supertest');
const app = require('./app');
const chai = require('chai');
const expect = chai.expect;

describe('GET /', () => {
  it('should return Hello World!', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.equal('Hello World!');
        done();
      });
  });
});

