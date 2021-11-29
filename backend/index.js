const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const app = express();
const PORT = 5000 || process.env.PORT;

app.use(
  cookieSession({
    name: "session",
    keys: ["lishu"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => console.log(`Serving running on locahost:${PORT}`));
