"use strict";
exports.__esModule = true;
var Motion_1 = require("./Motion");
var Processing_1 = require("./Processing");
var Main = function () {
    var testProcessing = new Processing_1.Processing(new Motion_1.Motion(64, 64));
    testProcessing.scan();
};
Main();
