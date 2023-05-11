const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("Hello from the server form routes");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "each field is required" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "User Already Exists" });
    } else {
      const hashPassword = await bcrypt.hash(password, 12);
      const user = new User({
        name,
        email,
        phone,
        work,
        password: hashPassword,
        cpassword,
      });

      await user.save();
      res.status(200).json({ message: "User registered successfully" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Some error occured at the server side : ${error}` });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(422).json({ error: "Please fill all the fields" });
    }

    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      res
        .status(404)
        .json({ message: "User not found with these credentials" });
    } else {
      const isMatch = await bcrypt.compare(password, findUser.password);
      const token = await findUser.generateAuthToken()
      console.log(token)
      if (!isMatch) {
        res
          .status(404)
          .json({ message: "User not found with these credentials" });

        res.cookie("jwttoken", token , {expiresIn: '1h'})
      } else {
        res.send(findUser);
        console.log(findUser);
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
