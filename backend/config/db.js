const mongoose = require('mongoose')
 const dotenv=require("dotenv")
dotenv.config()
const ConnectDB=async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL)
       console.log("database connect")
    }catch(err){
        console.log(err)
    }
}
module.exports=ConnectDB
