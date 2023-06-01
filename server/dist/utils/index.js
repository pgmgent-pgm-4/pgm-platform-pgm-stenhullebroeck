"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTTPError = HTTPError;
exports.handleHTTPError = void 0;

var handleHTTPError = function handleHTTPError(error, next) {
  return next(error);
};

exports.handleHTTPError = handleHTTPError;

function HTTPError(message, statusCode) {
  var instance = new Error(message);
  instance.statusCode = statusCode;
  return instance;
}
//# sourceMappingURL=index.js.map