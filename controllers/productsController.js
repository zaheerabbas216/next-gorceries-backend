const express = require("express");
const router = express.Router();
const ImageModel = require("../models/imageModel");

var { Product } = require("../models/productModel");

// get all the products
const getProducts = (req, res) => {
  Product.find((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("product not found");
    }
  });
};

// post a product
const addProduct = (req, res) => {
  var prod = new Product({
    name: req.body.name,
    shopName: req.body.shopName,
    address: req.body.address,
    phone: req.body.phone,
    shopType: req.body.shopType,
  });

  prod.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("error adding the product");
    }
  });
};

const uploadImage = async (req, res, next) => {
  console.log("req body--------------", req);
  console.log("req body.file", req.body.file);
  try {
    const newImage = new ImageModel({
      name: req.body.name,
      image: {
        data: req.file.filename,
        contentType: "image/png",
      },
    });
    newImage
      .save()
      .then(() => {
        res.send("Successfully Uploaded!");
      })
      .catch((err) => console.log("errr", err));
  } catch (error) {
    console.log("errrorrr", error);
    next(error);
  }
};

module.exports = {
  getProducts,
  addProduct,
  uploadImage,
};
