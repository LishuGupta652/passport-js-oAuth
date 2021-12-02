require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");

const PORT = process.env.PORT || 5000;

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
    origin: "http://localhost/3000",
    method: "GET,POST,PPUT,DELETE",
    Credential: true,
  })
);

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
