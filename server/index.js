const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const passport = require("passport");

var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const userRouter = require("../routers/userRouter");
const listRouter = require("../routers/listRouter");
const authRouter = require("../routers/authRouter");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/dist", express.static(path.resolve(__dirname, "../dist")));

// set up routers
app.use("/user", userRouter);
app.use("/list", listRouter);
app.use("/auth", authRouter);

if (process.env.NODE_ENV === "production") {
  app.get("/", (req, res) =>
    res.status(200).sendFile(path.resolve(__dirname, "../index.html"))
  );
}

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "304160165997-stam6gkhimrgbs4m56u7bg5h7t85dd6e.apps.googleusercontent.com",
      clientSecret: "Fv17bH2U_2jsthMKqieK-0us",
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // console.log(profile)
      console.log("inside express");
      // should have the part where we add users in db somewhere here
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        console.log("this is wehre we get stuck");
        return done(err, user);
      });
      console.log("this is the outsdie");
    }
  )
);

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve redirecting
//   the user to google.com.  After authorization, Google will redirect the user
//   back to this application at /auth/google/callback
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login"],
    prompt: "select_account",
  })
);

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

// global middleware error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("Server running and listening on 3000");
});
