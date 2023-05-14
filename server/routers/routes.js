const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../Middlewares/authenticate");
const jwt = require("jsonwebtoken");

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
      res.status(400).json({ error: "Please fill all the fields" });
    }

    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      res
        .status(400)
        .json({ message: "User not found with these credentials" });
    } else {
      const isMatch = await bcrypt.compare(password, findUser.password);
      const token = await findUser.generateAuthToken();

      res.cookie("jwttoken", token);

      if (!isMatch) {
        res
          .status(400)
          .json({ message: "User not found with these credentials" });
      } else {
        res.send(findUser);
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Some Error Occured" });
  }
});

router.get("/aboutme",authenticate, async (req, res) => {
  // try {
  //   const token = req.cookies.jwttoken;
  //   if(token !== undefined){
  //     const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
  
  //     const rootUser = await User.findOne({
  //       _id: verifyToken._id,
  //       "tokens.token": token,
  //     });
  //     if (!rootUser) {
  //       throw new Error("User not found");
  //     } else {
  //       res.status(200).send(rootUser);
  //     }
  //   }
  //   else{
  //     res.status(404).send({message:"User not found"});
  //   }
  // } catch (error) {
  //   res.status(404).send({message:"User not found"});
  //   console.log("Not Found");
  // }
  res.send(req.rootUser)
});
router.get("/getdata",authenticate, async (req, res) => {
  res.send(req.rootUser)
});

router.post('/contact',authenticate, async (req, res) => {
    try {
     const {name,email,phone,message} = req.body;
     if(!name || !email || !phone || !message){
      console.log("Error in the Contact form")
      res.status(404).json({error:"Please fill the Contact Form"})
     }

     const userContact = await User.findOne({_id: req._id})

     if(userContact){
      const userMessage = await userContact.addMessage(name,email,phone,message)

      await userContact.save();
      res.status(200).json({message:"User Contact saved successfully"})
     }

    } catch (error) {
      console.log(error)
    }


})

module.exports = router;
