"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

// Read all key / value pairs from .env file
_dotenv["default"].config({
  path: _path["default"].join(process.cwd(), "".concat(process.env.NODE_ENV || 'development', ".env"))
});

var settings = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 8080,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRE: process.env.JWT_EXPIRE || '24h',
  HYGRAPH_CONTENT_API: process.env.HYGRAPH_CONTENT_API,
  HYGRAPH_ACCESS_TOKEN: process.env.HYGRAPH_ACCESS_TOKEN
};
var _default = settings;
exports["default"] = _default;
//# sourceMappingURL=settings.js.map