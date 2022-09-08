const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const port = 3001;

mongoose.connect(
  "mongodb+srv://dbmassyve:zakhia123123@massyvetech.dktbayc.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to the database");
  }
);

const routes = require("./routes/users.route");

app = express();

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: [`http://localhost:${port}`],
  })
);

app.use(express.json());

app.use("/api", routes);

app.listen(process.env.PORT || port);
