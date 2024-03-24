const express = require("express");
const router = express.Router();
const {
  getLogIn,
  postLogOut,
  getHome,
  postSignUp,
  postLogIn,
  getLogOut,
  getsignup,
} = require("../controller/loginController");

router.get("/", getLogIn);
router.post("/logout", postLogOut);
router.get("/home", getHome);
router.post("/signup", postSignUp);
router.post("/login", postLogIn);
router.get("/logout", getLogOut);
router.get("/signup", getsignup);

module.exports = router;
