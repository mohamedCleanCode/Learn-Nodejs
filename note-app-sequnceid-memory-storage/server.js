// Setup server
const express = require("express");
const noteRouter = require("./route/noteRouter");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello User");
});

app.use("/api/v1", noteRouter);

app.listen(port, () => {
  console.log(`Listen at http://localhost:${port}`);
});
