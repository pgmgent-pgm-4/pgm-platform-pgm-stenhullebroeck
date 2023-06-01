"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _passport = _interopRequireDefault(require("passport"));

var _passportLocal = require("passport-local");

var _awesomeGraphqlClient = require("awesome-graphql-client");

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _settings = _interopRequireDefault(require("../config/settings"));

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var localStrategy = function localStrategy() {
  var queryGetUserByUsername = "\n    query getUserByUsername($username: String!) {\n      authUser(where: { username: $username }) {\n        id,\n        username,\n        email,\n        password\n      }\n    }\n  ";
  var mutationCreateUser = "\n  mutation CreateAuthUser($username: String = \"\", $password: String = \"\", $email: String = \"\") {\n      createAuthUser(data: {username: $username, password: $password, email: $email}) {\n        id\n        password\n        username\n        email\n      }\n    }\n  ";
  var client = new _awesomeGraphqlClient.AwesomeGraphQLClient({
    endpoint: "".concat(_settings["default"].HYGRAPH_CONTENT_API),
    fetch: _nodeFetch["default"],
    fetchOptions: {
      headers: {
        Authorization: "Bearer ".concat(_settings["default"].HYGRAPH_ACCESS_TOKEN)
      }
    }
  });

  _passport["default"].use('login', new _passportLocal.Strategy({
    usernameField: 'username',
    passwordField: 'password'
  }, /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username, password, done) {
      var _yield$client$request, authUser, userPayload, token, authenticated;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return client.request(queryGetUserByUsername, {
                username: username
              });

            case 3:
              _yield$client$request = _context.sent;
              authUser = _yield$client$request.authUser;

              if (authUser) {
                _context.next = 7;
                break;
              }

              throw new _utils.HTTPError('User does no exists', 404);

            case 7:
              if (!(password !== authUser.password)) {
                _context.next = 9;
                break;
              }

              throw new _utils.HTTPError('Incorrect Credentials', 404);

            case 9:
              userPayload = {
                id: authUser.id,
                username: authUser.username,
                email: authUser.email
              };
              token = _jsonwebtoken["default"].sign({
                user: userPayload
              }, _settings["default"].JWT_SECRET, {
                expiresIn: _settings["default"].JWT_EXPIRE
              });
              authenticated = _objectSpread(_objectSpread({}, userPayload), {}, {
                token: token
              });
              done(null, authenticated);
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              done(_context.t0);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }()));

  _passport["default"].use('signup', new _passportLocal.Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, username, password, done) {
      var email, _yield$client$request2, createAuthUser, userPayload, token, authenticated;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              // Get all the signup fields
              email = req.body.email; // Create the AuthUser in Hygraph

              _context2.next = 4;
              return client.request(mutationCreateUser, {
                username: username,
                password: password,
                email: email
              });

            case 4:
              _yield$client$request2 = _context2.sent;
              createAuthUser = _yield$client$request2.createAuthUser;

              if (createAuthUser) {
                _context2.next = 8;
                break;
              }

              throw new _utils.HTTPError("Can't create the user with username: ".concat(username), 404);

            case 8:
              userPayload = {
                id: createAuthUser.id,
                username: createAuthUser.username,
                email: createAuthUser.email
              };
              token = _jsonwebtoken["default"].sign({
                user: userPayload
              }, _settings["default"].JWT_SECRET, {
                expiresIn: _settings["default"].JWT_EXPIRE
              });
              authenticated = _objectSpread(_objectSpread({}, userPayload), {}, {
                token: token
              });
              done(null, authenticated);
              _context2.next = 17;
              break;

            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](0);
              done(_context2.t0);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 14]]);
    }));

    return function (_x4, _x5, _x6, _x7) {
      return _ref2.apply(this, arguments);
    };
  }()));
};

var _default = localStrategy;
exports["default"] = _default;
//# sourceMappingURL=local.strategy.js.map