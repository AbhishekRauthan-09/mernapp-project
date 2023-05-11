const mongoose = require("mongoose");
var jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    minlength: 3,
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  phone: {
    type: "number",
    required: true,
  },
  work: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  cpassword: {
    type: "string",
    required: true,
  },
  tokens: [
    {
      token: {
        type: "string",
        required: true,
      },
    },
  ],
});

// generating auth token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token:token})
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("USER", userSchema);

module.exports = User;
