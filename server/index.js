const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')

const userRouter = require('../routers/userRouter')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/dist", express.static(path.resolve(__dirname, "../dist")));


app.use('/user', userRouter)





if (process.env.NODE_ENV === "production") {
  app.get("/", (req, res) =>
    res.status(200).sendFile(path.resolve(__dirname, "../index.html")),
  );
}


app.listen(3000)

// global middleware error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
