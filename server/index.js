const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');

const userRoute = require("./src/users/user.routes.js")
const app = express();
const PORT = process.env.PORT || 8000;

const {connectMongoDB} = require("./db/db.mongo.js");

connectMongoDB(process.env.DB_CONNECTION_STRING);

app.use(express.json());
app.use("/user", userRoute);

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
