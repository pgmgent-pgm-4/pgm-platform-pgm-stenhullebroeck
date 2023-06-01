"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _jwt = _interopRequireDefault(require("../strategies/jwt.strategy"));

var _local = _interopRequireDefault(require("../strategies/local.strategy"));

// Activate localStragey
(0, _local["default"])(); // Activate jwtStrategy

(0, _jwt["default"])();

var passportConfig = function passportConfig(app) {
  app.use(_passport["default"].initialize());

  _passport["default"].serializeUser(function (user, done) {
    done(null, user);
  });

  _passport["default"].deserializeUser(function (user, done) {
    done(null, user);
  });
};

var _default = passportConfig;
exports["default"] = _default;
//# sourceMappingURL=passport.js.map