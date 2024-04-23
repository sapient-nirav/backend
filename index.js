const express = require("express");
const mongoose = require("mongoose");
const studentsRouter = require("./Routes/students");
const usersRouter = require("./Routes/user.js");
require("dotenv").config();
require("./Db/conn.js");

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use("/students", studentsRouter);
app.use("/auth", usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
