"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _passport = _interopRequireDefault(require("passport"));

var _passportJwt = require("passport-jwt");

var _settings = _interopRequireDefault(require("../config/settings"));

var jwtStrategy = function jwtStrategy() {
  _passport["default"].use(new _passportJwt.Strategy({
    secretOrKey: _settings["default"].JWT_SECRET,
    jwtFromRequest: _passportJwt.ExtractJwt.fromExtractors([_passportJwt.ExtractJwt.fromUrlQueryParameter("secret_token"), _passportJwt.ExtractJwt.fromHeader("secret_token"), _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken()])
  }, /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(token, done) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (token) {
                _context.next = 3;
                break;
              }

              throw new Error('Token does no exists');

            case 3:
              if (token.user) {
                _context.next = 5;
                break;
              }

              throw new Error('User is not present in the token');

            case 5:
              done(null, token.user);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              done(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()));
};

var _default = jwtStrategy;
exports["default"] = _default;
//# sourceMappingURL=jwt.strategy.js.map