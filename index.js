"use strict";
var thenify = require('thenify');

module.exports = function(client) {
    var wrap = {};

    Object.keys(client).forEach(function (key) {
        wrap[key] = client[key];
    });

    Object.keys(Object.getPrototypeOf(client)).forEach(function (key) {
        wrap[key] = thenify(client[key].bind(client));
    });

    return wrap;
};
