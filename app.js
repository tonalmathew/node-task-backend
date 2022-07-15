const express = require("express");
const cors = require("cors");
const dotEnv = require('dotenv')

const companyRouter = require("./src/router/company.router")

const InitiateMongoServer = require('./db')

InitiateMongoServer()

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/v1/company", companyRouter)


dotEnv.config({
  path: './config.env',
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})