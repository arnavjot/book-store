const express = require("express");
const app = express();
app.use(express.json());
const mongoose =  require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*(){}|";

const mongoUrl = "mongodb://localhost:27017";

mongoose
.connect(mongoUrl,{
  useNewUrlParser : true,
})
.then(()=>{
  console.log("Connected to database");
})
.catch((e) => console.log(e));

require("./mongo")
require("./Product")
const User = mongoose.model("UserInfo");
const Product = mongoose.model("CartInfo");

app.post("/Signup", async(req, res) => {
  const {name, email, password, passwordConfirmation, termsChecked} = req.body;
  const encryptedPassword = await bcrypt.hash(password,10);
  try{
    const oldUser = await User.findOne({email});
    if(oldUser){
      return res.send({error : "User Exists"});
    }
    await User.create({
      name,
      email,
      password:encryptedPassword,
      passwordConfirmation,
      termsChecked,
    });
    res.send({status:"ok"});
  }catch(error){
    res.send({status : "error"});
  }
});

app.post("/Signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not Found" });
  }
  
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({}, JWT_SECRET);
    return res.json({ status: "ok", data: token });
  } else {
    return res.json({ status: "error", error: "Invalid Password" });
  }
});

 // Assuming you have a Contact model defined

 app.post("/Contact", async (req, res) => {
  const { first, last, email, message } = req.body;

  try {
    // Check if the email already exists in the User collection (assuming User model is used for contacts)
    const existingContact = await User.findOne({ email });

    if (existingContact) {
      // Email already exists, respond with an error message
      return res.status(400).json({ error: "Contact with this email already exists." });
    }

    // Create a new User document (assuming User model is used for contacts) and save it to MongoDB
    const newContact = new User({
      first,
      last,
      email,
      message,
    });
    await newContact.save();

    // Respond with success message and the saved contact data
    res.json({ status: "ok", data: newContact });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "An error occurred while saving contact." });
  }
});


app.post('/Book1', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book2', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book3', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book4', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book5', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book6', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book7', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book8', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book9', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book10', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book11', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book12', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book13', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book14', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book15', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/Book16', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book17', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book18', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book19', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/Book20', async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const newProduct = new Product({ name, price, quantity });
    await newProduct.save();
    res.status(201).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(5000, () => {
  console.log("Server Started");
});
