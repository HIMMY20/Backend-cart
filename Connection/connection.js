let mg = require("mongoose")

let connection = async() =>{
    try{
        await mg.connect("mongodb://localhost:27017/Data")
        console.log("Database Connected")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connection