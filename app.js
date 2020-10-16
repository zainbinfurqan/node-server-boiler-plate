const path = require("path"),
  logger = require("morgan"),
  express = require("express"),
  globalHelpers = require("./utils/globalHelpers"),
  router = express.Router(),
  swaggerUi = require('swagger-ui-express'),
  //------import models
  //------import models
  swaggerDocument = require('./swagger.json'),
  // app = require("express")(),
  fileUpload = require('express-fileupload'),
  socket = require("socket.io"),
  app = express();
app.use(fileUpload({
  useTempFiles: true,
}));
const cors = require("cors") // install this
// const { getAllQueueAndAppointments, } = require("./controllers/waitingArea");

app.use(cors())
// Include Packages
require("module-alias/register");

// Load environment variables
require("dotenv").config();

// Mongoose Connection
require("./config/database");

const keys = require("./config/keys");
// const { connection } = require("mongoose");

//To prevent attackers from reading this header (which is enabled by default) to detect apps running express
app.disable("x-powered-by");

// view engine setup
global.base = path.join(__dirname + "/");

// General Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set few important headers
app.use(require("./middleware/setHeaders"));

app.get("/", function (_, res) {
  res.json({ message: "server is up and running" });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);



// Load routes
require("./routes")(app);

let connectedUsers = [];
let userIds = [];
// let userIds = []

// Global error handler
app.use((err, _, res, next) => {
  const error = globalHelpers.handleMongooseError(err.message);

  res.status(err.status || 400).json({ ...error, success: false });
});

const server = app.listen(keys.PORT, () =>
  console.log("server is running on port", keys.PORT)
);
// const connection = socket(server);

global.connection = socket(server);

global.nsp = connection.of("/socketio");

//chat function  currently working 
nsp.on("connection", function (s) {



});



module.exports = app;
