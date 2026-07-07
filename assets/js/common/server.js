const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

function readDB() {
  return JSON.parse(fs.readFileSync("./db.json"));
}

app.get("/workflows", (req, res) => {
  const db = readDB();
  res.json(db.workflows);
});

app.listen(3000, () => {
  console.log("SERVER RUNNING ON 3000");
});