const { app } = require('../server');
const supertest = require('supertest');
const { describe } = require('yargs');
const { it } = require('node:test');
const { default: expect } = require('expect');
const request = supertest(app);

describe('APIServer', () => {
  it('handles root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).teBeTruthy();
    expect(response.text).toEqual('Hello World');
  });

  it('handes invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  });

  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
  });

  it('works with query params and the /person route', async () => {
    const response = await request.get('/person?name=Camilla');
    expect(response.text).toEqual('Hello Camilla');
  });

  it('works with query params and the /person route', async () => {
    const response = await request.get('/helloPath/Bowie');
    expect(response.text).toEqual('Hello Bowie');
  });

});

