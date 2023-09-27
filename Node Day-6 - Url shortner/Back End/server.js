
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { userRouter } from "./Routes/user.js";
import { urlRouter } from "./Routes/url.js";
const app = express();

dotenv.config();

const PORT = 3008;
const DB_URL =
  "mongodb+srv://manivasagam:8778421906Mk@mentorandstudent.itu531b.mongodb.net/urlShortner";

// Connecting  MongoDB
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected To DB"))
  .catch((err) => console.error(`Unable is connect with DB ${err}`));

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/urlshort", urlRouter);


app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}`);
});
