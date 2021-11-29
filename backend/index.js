const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
require("./passport.js");
const app = express();
const PORT = 5000 || process.env.PORT;
const cors = require("cors");
const dotenv = require("dotenv").config();
app.use(
  cookieSession({
    name: "session",
    keys: ["lishu"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    Credentials: true,
  })
);

app.listen(PORT, () => console.log(`Serving running on locahost:${PORT}`));
