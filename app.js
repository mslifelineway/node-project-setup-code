var express = require("express"); //including express
var path = require("path");
var bodyParser = require("body-parser");
var app = new express();
const fs = require("fs");
var router = express.Router();
var session = require("express-session");
require("dotenv").config();
const port = process.env.PORT;
//Following function is starts sockets and start listen from particular port.
//In following code I have given call back which contains err. So when port willbe start and listen function will be fire then this function will be execute.
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
app.use(bodyParser.json());

var sess = {
  secret: "Vedik",
  cookie: {},
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use(session(sess));
app.use(express.static(path.join(__dirname, "/public"))); //making public directory as static diectory

const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/assets/uploads/",
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.set("views", "./src/views"); //we will tell express that where we will store our views
app.set("view engine", "ejs"); //we have to tell express; which template engine you are going to use?

fs.readdirSync(__dirname + "/src/routes").forEach(function (file) {
  if (file === "index.js" || file.substr(file.lastIndexOf(".") + 1) !== "js")
    return;
  var name = file.substr(0, file.indexOf("."));
  require("./src/routes/" + name)(app, router, upload);
});
app.listen(port, function (err) {
  if (typeof err == "undefined") {
    console.log(process.env.DB_HOST);
    console.log("Your application is running on : " + port + " port");
  } else {
    console.log("Your application is not running Try with another port!!!!");
  }
});
