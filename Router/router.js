let ex = require("express")
let app = ex()
let router = ex.Router()
let {signup,login} = require("../Controller/controller")
let upload = require("../Middleware/multer")

// router.post("/signup",upload.single("image"),signup)
router.post("/signup",signup)
// router.get("/getalluser",getalluser)
// router.get("/getuser/:id",getuser)
router.post("/login",login)


module.exports = router