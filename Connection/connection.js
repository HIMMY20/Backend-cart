require("dotenv").config();
let mg = require("mongoose")

let connection = async() =>{
    try{
        await mg.connect(process.env.MONGO_URL)
        console.log("Database Connected")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connection