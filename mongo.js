const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    name:String,
    email:{type : String , unique : true},
    password:String,
    passwordConfirmation:String,
    termsChecked:Boolean,
  },
  {
    collection : "UserInfo",
  }
)


const contactSchema = new mongoose.Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, unique: true },
  message: { type: String, required: true },
});

mongoose.model('Contact', contactSchema);
mongoose.model("UserInfo", userSchema);

