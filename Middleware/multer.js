let multer = require("multer")

let store = multer.diskStorage({
    destination:"Images",
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

let upload = multer({storage:store})

module.exports = upload