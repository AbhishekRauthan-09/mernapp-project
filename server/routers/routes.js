const express = require("express");
const router = express.Router();

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
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      await user.save();
      res.status(200).json({ message: "User registered successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Some error occured at the server side" });
  }
});

router.post('/login', async (req, res) => {
    res.json({ message:"Login Page Success"})
})

module.exports = router;
