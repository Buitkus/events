require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db")
const port = process.env.PORT || 4000;

connectDB();

const app = express();

app.use(express.json());


app.listen(port, () => console.log(`Server is running on port ${port}`));

