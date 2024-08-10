const ProductRouter = require("express").Router()
const {verifyAdmin, verifyBoth} = require("../middlewares/authentication")

const {createRecord,getRecord,getSingleRecord,updateRecord,updateQuantity,deleteRecord} = require("../controller/ProductController")

const {uploadProduct} = require("../middlewares/fileUploadMiddleware")

ProductRouter.post("/",verifyAdmin,uploadProduct.array("pic"),createRecord)
ProductRouter.get("/",getRecord)
ProductRouter.get("/:_id",getSingleRecord)
ProductRouter.put("/:_id",verifyAdmin,uploadProduct.array("pic"),updateRecord)
ProductRouter.put("/quantity/:_id",verifyBoth,updateQuantity)
ProductRouter.delete("/:_id",verifyAdmin,deleteRecord)

module.exports = ProductRouter