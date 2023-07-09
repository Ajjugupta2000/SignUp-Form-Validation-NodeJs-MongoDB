const express = require("express");
const Restaurant = require("./database/schema.js");
require("./database/conn");
const app = express();

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/html/index.html");
});

// Route to handle restaurant submissions
app.post("/restaurants", async (req, res) => {
  try {
    const email = req.body.email;
    const existingRestaurant = await Restaurant.findOne({ email });
    const mobileNumber = req.body.phoneNumber;
    const sanitizedNumber = mobileNumber.replace(/\D/g, "");
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (sanitizedNumber.length !== 10) {
      return res.status(400).send(`
        <h2 style="color:maroon">Please enter a valid 10-digit mobile number</h2>
        <a href="javascript:history.back()">Go Back</a>
      `);
    }

    if (!emailRegex.test(email)) {
      return res.status(400).send(`
        <h2 style="color:maroon">Please enter a valid email address</h2>
        <a href="javascript:history.back()">Go Back</a>
      `);
    }

    if (existingRestaurant) {
      return res.status(400).send(`
        <h2 style="color:maroon">Email already exists. Please enter a different email</h2>
        <a href="javascript:history.back()">Go Back</a>
      `);
    }

    const restaurant = new Restaurant({
      restaurantName: req.body.restaurantName,
      pincode: req.body.pincode,
      location: req.body.location,
      website: req.body.website,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: req.body.password,
      avgDailyTransactions: req.body.avgDailyTransactions,
    });

    await restaurant.save();
    res.status(400).send(`
      <h2 style="color:green">Thanks for Registration</h2>
      <a href="/">Go Home</a>
    `);
  } catch (error) {
    res.status(400).send(`
      <h2 style="color:maroon">Please Enter Valid Inputs</h2>
      <a href="javascript:history.back()">Go Back</a>
    `);
  }
});

//route to handle login
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const useremail = await Restaurant.findOne({ email: email });

    if (useremail.password === password) {
      res.status(400).send(`
         <h1 style="color:green">Login Success</h1>
         <a href="/">Go Home</a>
  `);
    } else {
      res.status(400).send(`
         <h1 style="color:red">Wrong Password</h1>
         <a href="javascript:history.back()">Go Back</a>
  `);
    }
  } catch (error) {
    await res.status(400).send(`
    <h1 style="color:red">Invalid Email, Please Create Your Account</h1>
    <a href="javascript:history.back()">Go Back</a>
  `);
  }
});

app.listen(3000, () => console.log("Server started on http://localhost:3000"));
