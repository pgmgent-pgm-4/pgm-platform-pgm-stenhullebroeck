"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _nunjucks = _interopRequireDefault(require("nunjucks"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _passport = _interopRequireDefault(require("./config/passport"));

var _routes = _interopRequireDefault(require("./routes"));

require("core-js/stable");

require("regenerator-runtime/runtime");

// Read .env settings
_dotenv["default"].config();
/*
Fast, unopinionated, minimalist web framework for node.
https://www.npmjs.com/package/express

Initalize the express application
*/


var app = (0, _express["default"])();
/*
Node.js body parsing middleware

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
https://www.npmjs.com/package/body-parser
*/
// Parse application/x-www-form-urlencoded

app.use(_bodyParser["default"].urlencoded({
  extended: false // eslint-disable-next-line comma-dangle

})); // Parse application/json

app.use(_bodyParser["default"].json()); // Set default view engine

_nunjucks["default"].configure('views', {
  autoescape: true,
  express: app
});

app.set('view engine', 'html'); // Serve static content

app.use(_express["default"]["static"](_path["default"].join(process.cwd(), '..', 'client', 'build')));
/*
Passport
*/

(0, _passport["default"])(app);
/*
Cors parsing middleware

cors is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
https://www.npmjs.com/package/cors
*/

var corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};
app.use((0, _cors["default"])(corsOptions));
/*
Add all routers to Express app

All routes (paths) are registered
*/

app.use('/', _routes["default"]);
/*
Not Found routes
*/

app.get('*', function (req, res, next) {
  var err = new Error("".concat(req.ip, " tried to access ").concat(req.originalUrl));
  err.statusCode = 301;
  next(err);
});
/*
Error Handler
*/

app.use(function (err, req, res, next) {
  var error = err;
  error.statusCode = error.statusCode || 500;
  res.status(error.statusCode);
  var body = {
    url: req.url,
    error: {
      message: error.message,
      statusCode: error.statusCode
    }
  };
  res.format({
    'application/json': function applicationJson() {
      res.json(body);
    },
    'text/html': function textHtml() {
      res.render('error', body);
    },
    "default": function _default() {
      res.type('text/plain').send('You have to accept application/json or text/html!');
    }
  });
  next();
}); // Set the port used by the server

var PORT = process.env.PORT || 8080; // Set the Node environment

var NODE_ENV = process.env.NODE_ENV || 'development'; // Express js listen method to run project on http://localhost:3000

app.listen(PORT, function () {
  console.log("Application is running in ".concat(NODE_ENV, " mode on port ").concat(PORT));
});
//# sourceMappingURL=app.js.map