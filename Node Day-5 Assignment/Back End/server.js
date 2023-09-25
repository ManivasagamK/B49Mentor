const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");

const UserModel = require("./Models/UserModel");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.use(bodyParser.json());

app.use(cors());


//connection to MongoDB
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.post("/api/Register", async (req, res) => {
  const { username, password } = req.body;

  const hashpassword = await bcrypt.hash(password, 12);

  const user = new UserModel({ username, password: hashpassword });

  try {
    await user.save();
    res.json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error in registering User" });
  }
});

app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });

  res.json({ token });
});

app.get("/api/protected", (req, res) => {
  res.json({ message: "Protected resource accessed successfully!!" });
});

app.put("/api/resetpassword", async (req, res) => {
  try {
    const { username, password } = req.body;
    const User = await UserModel.findOne({ username })
    console.log(User)
    User.password = { password };
    await User.save();
    res.status(200).json({message: "Password Reset Successfully"})
  } catch (error) {
    res.status(401).json({message: "Enter a Valid Password"})
  }
 
})
app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});
