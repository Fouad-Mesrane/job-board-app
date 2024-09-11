// express
const express = require("express");
// required to connect to mongo db
const mongoose = require("mongoose");
// using cors to connect frontend to backend (url)
const cors = require("cors");
// dotenv for environment variables
const dotenv = require("dotenv");
const jobRoutes = require('./routes/jobRoutes');
// call dotenv config
dotenv.config();
// call express
const app = express();
// middleware to convert response to json
app.use(express.json());
app.use('/api/jobs', jobRoutes)
// grab the port from .env
const PORT = process.env.PORT;


// get all routes


//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB && listening on port:", PORT);
      });
  })
  .catch((e) => console.log(e));

  


  

