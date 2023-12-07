const express = require("express");
const Product = require("../models/productModel");
// prettier-ignore
const { getProducts, getProduct, postProduct, updateProduct, deleteProduct } = require("../controller/productController");

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", postProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
