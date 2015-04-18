"use strict";
var thenify = require('thenify');
var EventEmitter = require('events').EventEmitter;

module.exports = function (client) {
  var wrap = {};

  Object.keys(client).forEach(function (key) {
    wrap[key] = client[key];
  });

  Object.keys(EventEmitter.prototype).forEach(function (key) {
    if (typeof client[key] == 'function') {
      wrap[key] = client[key].bind(client);
    }
  });

  Object.keys(Object.getPrototypeOf(client)).forEach(function (key) {
    wrap[key] = thenify(client[key].bind(client));
  });

  return wrap;
};
