'use strict';

const { default: expect } = require('expect');
const { it } = require('node:test');
const { describe } = require('yargs');
const validator = require('../src/middleware/validator');

describe('validator middleware', () => {
  let req = {query: {name: 'Camilla'}};
  let res = {};
  let next = jest.fn(); //mocking the next method

  it('validates query string for a name property', () => {
    validator(req, res, next);

    expect(req.query.name).toBe('Camilla');
    expect(next).toHaveBeenCalledWith();

  });
});
