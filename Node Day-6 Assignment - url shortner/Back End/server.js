const express = require("express");
const mongoose = require("mongoose");
import { nanoid } from "nanoid";
require("dotenv").config();
import Url from "./Model";

const app = express();

const PORT = 3005;
const DB_URL =
  "mongodb+srv://manivasagam:8778421906Mk@mentorandstudent.itu531b.mongodb.net";

// Connecting  MongoDB
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected To DB"))
  .catch((err) => console.error(`Unable is connect with DB ${err}`));

//   Url Validation
export function validateUrl(value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}

app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}`);
});
