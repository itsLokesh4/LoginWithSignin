const express = require("express");
const app = express();
// const path = require("path");
// const collection = require("./model/mongodb");
// const adminCollection = require("./model/adm-mongo")
const session = require("express-session");
const nocache = require("nocache");
const path = require("node:path");
const router = require("./routes/loginroutes");
const admrouter = require("./routes/admlogroute");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(nocache());
app.use(router);
app.use(admrouter);

app.listen(5050, function () {
  console.log("server is running...");
});
