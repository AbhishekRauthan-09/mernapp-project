const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwttoken;
    if (token !== undefined) {
      const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
      const rootUser = await User.findOne({
        _id: verifyToken._id,
        "tokens.token": token,
      });
      if (!rootUser) {
        res.status(404)
        throw new Error("User not found");
        next()
      } else {
        res.status(200);
        req.rootUser = rootUser;
        req._id = rootUser._id;
        next()
      }
    } else {
      res.status(404).send({ message: "User not found" });
      next()
    }
  } catch (error) {
    res.status(404).send({ message: "User not found" });
    console.log("Not Found");
  }
};

module.exports = authenticate;
