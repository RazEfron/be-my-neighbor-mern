const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")

// Load the Model Schema for Users 
const User = require("../models/User")

router.get("/login", (req, res) => {
    res.render("login")
})

//  Index Page
router.get("/users", (req, res) => res.render("users"));

// Register Post Router
router.get("/register", (req, res) => {
    res.render("register")
})

router.post("/register", (req, res) => {
  const { name, email, password, cpassword } = req.body;

  let errors = [];

  if (!name || !email || !password || !cpassword) {
      errors.push(
          {
              msg: "Sorry fill all fields"
          }
      )
    }

    if (password != cpassword) {
        errors.push({
            msg: "Password not the same"
        })
    }

    if (errors.length > 0) {
        res.render("register", {
            errors,
            email,
            password,
            name
        })
    } else {
        const newUser = User({
            name, password, email
        })
    }
});

module.exports = router;
