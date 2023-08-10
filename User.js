const mongoose = require("mongoose");

const adressSchema = new mongoose.Schema({
  street :String,
  city:String    
})


const userSchema = new mongoose.Schema({
  name:String,
  age:{
    type: Number,
    min:1,
    max :260,
    validate :{
      validator: v=>v%2,
      message: props=> `${props.value} is not an even number` 
    }
  },
  email:{
    type :String,
    minLength: 10,
    required :true,
    lowercase:true
  },
  createdAt :{
    type:Date,
    immutable:true, // makikhelinach n changiw had champ we dont have the right ! 
    default: ()=> Date.now()
  },
  updatedAt :{
    type:Date,
    default: ()=> Date.now()
  },
  bestFriend : mongoose.SchemaTypes.ObjectId,
  hobbies : [String],
  adress:adressSchema 
})

module.exports =  mongoose.model('User',userSchema);