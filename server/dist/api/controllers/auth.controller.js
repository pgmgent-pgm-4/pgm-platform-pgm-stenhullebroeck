"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _passport = _interopRequireDefault(require("passport"));

var _utils = require("../../utils");

// Import external modules
// Import custom modules
var login = function login(req, res, next) {
  _passport["default"].authenticate('login', /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, authenticated, info) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!(err || !authenticated)) {
                _context.next = 3;
                break;
              }

              throw err;

            case 3:
              return _context.abrupt("return", res.status(200).json(authenticated));

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", (0, _utils.handleHTTPError)(_context.t0, next));

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }())(req, res, next);
};

var signup = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _passport["default"].authenticate('signup', /*#__PURE__*/function () {
              var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(err, authenticated, info) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.prev = 0;

                        if (!(err || !authenticated)) {
                          _context2.next = 3;
                          break;
                        }

                        throw err;

                      case 3:
                        return _context2.abrupt("return", res.status(200).json(authenticated));

                      case 6:
                        _context2.prev = 6;
                        _context2.t0 = _context2["catch"](0);
                        return _context2.abrupt("return", (0, _utils.handleHTTPError)(_context2.t0, next));

                      case 9:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[0, 6]]);
              }));

              return function (_x7, _x8, _x9) {
                return _ref3.apply(this, arguments);
              };
            }())(req, res, next);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function signup(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var logout = function logout(req, res, next) {
  try {
    if (typeof req.logout === 'function') {
      req.logout(function (logoutError) {
        if (logoutError) {
          throw logoutError;
        }

        req.session.destroy(function (sessionError) {
          if (sessionError) {
            throw sessionError;
          }

          req.session = null;
        });
      });
    }

    return res.status(200).json(req.body);
  } catch (error) {
    return (0, _utils.handleHTTPError)(error, next);
  }
};

var _default = {
  login: login,
  logout: logout,
  signup: signup
};
exports["default"] = _default;
//# sourceMappingURL=auth.controller.js.map