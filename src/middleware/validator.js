'use strict';

const errorHandler = require('../handlers/500');
const { response } = require('express');


module.exports = (req, res, next) => {
  if(req.query.name) {
    next();
  } else {
    next(errorHandler);
  }
};

