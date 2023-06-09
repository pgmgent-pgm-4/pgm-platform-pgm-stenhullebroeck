"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _passport = _interopRequireDefault(require("passport"));

var _auth = _interopRequireDefault(require("../controllers/auth.controller"));

var _user = _interopRequireDefault(require("./user.routes"));

/*
Express Router

Initialize a new router
*/
var apiRouter = (0, _express.Router)();
/*
Routes
*/

apiRouter.get('/', function (req, res) {
  res.status(200).send('API Home Route');
});
apiRouter.post('/login', _auth["default"].login);
apiRouter.post('/logout', _auth["default"].logout);
apiRouter.post('/signup', _auth["default"].signup);
apiRouter.use('/user', _passport["default"].authenticate('jwt', {
  session: false
}), _user["default"]); // Returns the API router

var _default = apiRouter;
exports["default"] = _default;
//# sourceMappingURL=index.js.map