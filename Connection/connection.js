// require("dotenv").config();
// let mg = require("mongoose")

// let connection = async() =>{
//     try{
//         await mg.connect(process.env.MONGO_URL)
//         console.log("Database Connected")
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// module.exports = connection

require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 5000,   // Important for Vercel
    });
    console.log("MongoDB Atlas Connected");
  } catch (err) {
    console.log("Database Connection Failed:", err.message);
  }
};

module.exports = connection;
