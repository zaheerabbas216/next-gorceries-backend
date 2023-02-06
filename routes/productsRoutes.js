const express = require("express");
const {
  getProducts,
  addProduct,
  uploadImage,
} = require("../controllers/productsController");

const router = express.Router();

router.get("/list", getProducts);
router.post("/addProd", addProduct);
router.post("/uploadimage", uploadImage);

module.exports = router;
