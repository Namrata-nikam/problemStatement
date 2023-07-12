const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config();
const app = express()
const router = require("./routes/index");
const errorHandler = require("./middleware/errorHandler");
const { cors } = require("./middleware/cors")
const bodyParser = require('body-parser');
const HttpError = require("./models/http-error");
const jsonParser = bodyParser.json();

app.options('*', cors);
app.use(cors)

mongoose.connect(
      'mongodb://127.0.0.1:27017/psDB',
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
    )
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err,'not connected'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", router);

app.use((req, res, next) => {
  const error = new HttpError('could not find this route.', 404);
  throw error
})

app.use((error, req, res, next) => {
  if(res.headersent) {
    return next(error);
  } 
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred|'})
})

app.use(jsonParser);
app.listen(4000, () => console.log("server is up and running"))

