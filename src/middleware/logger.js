'use strict';


module.exports = (req, res, next) => {
  req.timestamp = new Date();
  console.log('logged at', req.timestamp);
  next();
};

//jsdoc example

/**
 * @param {Integer} a
 * @param {Integer} b
 * @param {Function} callback
 */

let adder = (a, b, callback) => {
  let sum = a + b;
  callback(sum);
};

// adder(2, 3, console.log)
