import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Route from "./routes/route.js";

const app = express();

// app.use(cors());
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Route);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = 8000;

Connection();

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
