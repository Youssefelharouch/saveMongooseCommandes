const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect(
  "localhostdb"
);


//create a new user !! 
// const user = new User({name:'YOUSSEF',age:25});
// user.save().then(()=>console.log("User saved")
// );


run();

const run = async () => {

  // v1
  //  const user = await User.create({{name:'YOUSSEF',age:25}})
  //  user.name ="ahmed";
  //  await User.save();
  // v2
  const user = new User({name:'YOUSSEF',age:25});
  await user.save();
  console.log(user)
}
