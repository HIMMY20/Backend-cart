let mg = require("mongoose")

let mySchema = new mg.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true
    },
    age:Number,

    
    password:String,
    image:String,
    role:{
        type:String,
        enum:["Admin","User"],
        default:"User"
    },
    date:{
        type:Date,
        default:new Date()
    }
})
let user = new  mg.model("user",mySchema)
module.exports = user