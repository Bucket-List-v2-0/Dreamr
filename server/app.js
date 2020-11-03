require("dotenv").config();
const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

/**
 * import routers
 */
const apiRouter = require("./routes/index");

/**
 * req parsers
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * static
 */
app.use("/dist", express.static(path.resolve(__dirname, "../dist")));

/**
 * routers
 */
app.use("/api", apiRouter);

if (process.env.NODE_ENV === "production") {
  app.get("/", (req, res) =>
    res.status(200).sendFile(path.resolve(__dirname, "../index.html")),
  );
}

// app.get("/user", (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "../index.html"))
// })

module.exports = app;
