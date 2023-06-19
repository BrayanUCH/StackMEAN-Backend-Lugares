const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Settings
app.set("port", process.env.PORT || 80);

// Middlewares
// const corsOptions = {origin: "http://localhost:4200"}
app.use(cors());
app.use(morgan("start"));
app.use(express.json());

// Routes
app.use("/api/lugares", require("./routes/lugares.routes"));

module.exports = app;
