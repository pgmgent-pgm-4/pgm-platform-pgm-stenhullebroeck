"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _express = require("express");

var _routes = _interopRequireDefault(require("../api/routes"));

/*
Express Router

Initialize a new router
*/
var globalRouter = (0, _express.Router)();
globalRouter.get('/', function (req, res) {
  res.sendFile(_path["default"].join(process.cwd(), '..', 'client', 'build', 'index.html'));
});
/*
API Router
*/

globalRouter.use('/api', _routes["default"]); // Returns the global Express router

var _default = globalRouter;
exports["default"] = _default;
//# sourceMappingURL=index.js.map