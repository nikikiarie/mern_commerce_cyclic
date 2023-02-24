const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Token = require("../models/Token");
const crypto = require("crypto");
const sendMail = require("../utils/sendMail");

console.log(process.env.PASS)
router.post("/register", async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const newUser = new User({
    ...req.body,
    password: hashedPassword,
  });
  try {
    const savedUser = await newUser.save();
    const token = new Token({
      userId: savedUser._id,
      token: crypto.randomBytes(32).toString("hex"),
    });

    const savedToken = await token.save();

    const url = `${process.env.BASE_URL}/users/${savedUser._id}/verify/${savedToken.token}`;

    await sendMail(savedUser.email,"Verify Email",url)
    
    res.status(200).json({message: "An email sent to account ,Please Verify"});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return res.status(403).json("Wrong Credentials");

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);

    if (!isCorrect) return res.status(403).json("Wrong Username or Password");

   const accessToken =jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET_KEY)

   const {password, ...others} = user._doc

   res.status(200).json({accessToken, ...others})

  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
