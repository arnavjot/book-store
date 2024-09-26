const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
  {
  name: String,
  price: Number,
  quantity: Number,
},{
  collection : "CartInfo",
}
);


mongoose.model("CartInfo", cartItemSchema);
