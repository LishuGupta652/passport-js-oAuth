require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./passport");
const PORT = process.env.PORT || 5000;

const authRoute = require("./routes/auth");

app.use(
  cookieSession({
    name: "session",
    keys: ["lishu"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// app.use(
//   cors({
//     origin: ["http://localhost/5000", "http://localhost:/3000"],
//     method: "GET,POST,PPUT,DELETE",
//     Credential: true,
//   })
// );

var whitelist = ["http://localhost/5000", "http://localhost:/3000"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use("/auth", authRoute);

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
