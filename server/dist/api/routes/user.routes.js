"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("../controllers/user.controller"));

/*
Express Router

Initialize a new router
*/
var userRouter = (0, _express.Router)();
/*
Routes
*/

userRouter.post('/', _user["default"].index); // Returns the API router

var _default = userRouter;
exports["default"] = _default;
//# sourceMappingURL=user.routes.js.map