import express from "express";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

//rest object
const app = express();

//rest api

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//Port
const PORT = process.env.PORT || 8080;

//run listen

app.listen(PORT, () => {
  console.log(`Server Running ${process.env.DEV_MODE} on mode on port ${PORT}`.bgCyan.white);
});
