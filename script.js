const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("localhostdb");

run();

const run = async () => {
  try {
    //recommended 
    // User.findById()
    
    const user = new User({
      name: "YOUSSEF",
      age: 25,
      adress: {
        street: "MARREKCH MASSIRA 1",
        city: "marrakech",
      },
      email:"test@test.com"
    });
    await user.save();
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};
