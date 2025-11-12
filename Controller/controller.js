let user = require("../Schema/schema")
let bcrypt = require("bcrypt")
let jwt = require("jsonwebtoken")

let signup = async(req,res) =>{
    try{
        let{name,email,age,password} = req.body
        let newPassword = await bcrypt.hash(password,10)

        let exitinguser = await user.findOne({email});
        if (exitinguser){
          return res.status(400).send({
            success:false,
            message:"User alredy register"
          })
        }

        let newUser = new user({
            name,
            email,
            age,
            password: newPassword,
            // image: req.file.filename
        })
        let data = await newUser.save()
        res.send({
            success:true,
            message:"User Created",
            data:data
        })
    }
    catch(err){
        res.send({
            success:false,
            message:"User creation failed"
        })
    }
}

// let getalluser = async(req,res)=>{
//     try {
//          let data = await user.find()
//          res.send({
//             success:true,
//             message:"All user get succesfully",
//             data:data
//          })
//     } catch (err) {
//         res.send({
//             success:false,
//             message:"Getting user failed",
//             data:err.message
//         })
//     }
// }

// let getuser = async(req,res)=>{
//     try {
//         let id = req.params.id
//         let data = await user.findById(id)
//         res.send({
//             success:true,
//             message:"User get succesfully",
//             data:data
//          }) 
//     } catch (err) {
//         res.send({
//             success:false,
//             message:"Getting user failed",
//             data:err.message
//         })
//     }
// }

let login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let exituser = await user.findOne({ email });

    if (!exituser) {
      return res.send({
        success: false,
        message: "No register this email",
      });
    }
    let validpassword = await bcrypt.compare(password, exituser.password);
    if (!validpassword) {
      return res.send({
        success: false,
        message: "Invalid Password",
      });
    }
        let token = jwt.sign(
      { id: exituser._id, email: exituser.email },
      "mySecretKey",
      { expiresIn: "24h" }
    );
    res.send({
        success:true,
        message:"Login Successfully",
        token:token,
        user:{
            name:exituser.name,
            email:exituser.email
        }
    })
  } catch (error) {
    res.send({
        success:false,
        message:"Login failed ",
        error:error.message
    })
  }
};


module.exports = {signup,login}