const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/urlRoutes');
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use('/', router);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
