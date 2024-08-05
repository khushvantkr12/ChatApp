import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Route from "./routes/route.js";

const app = express();

// app.use(cors());
const allowedOrigins = ['https://chatapp-mu-lyart.vercel.app'];

//app.use(cors());
app.use(cors({
  origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
          // If origin is not allowed, reject the request
          const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
          return callback(new Error(msg), false);
      }
      return callback(null, true);
  }
}));
app.get('/', (req, res) => {
  res.send('CORS-enabled for allowed origins');
});

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
