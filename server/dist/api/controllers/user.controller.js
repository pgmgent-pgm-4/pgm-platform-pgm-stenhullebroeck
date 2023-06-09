"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _settings = _interopRequireDefault(require("../../config/settings"));

var _utils = require("../../utils");

var index = function index(req, res, next) {
  res.status(200).json(req.user);
};

var _default = {
  index: index
};
exports["default"] = _default;
//# sourceMappingURL=user.controller.js.map