const express = require("express");
const products = require("../products.json");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json(products[id]);
});


router.get("/Instock/:qt", (req, res) => {
  const qt = req.params.qt;
  const inStock = Object.values(products).filter(product => product.stock >= qt);
  res.json(inStock);
});

router.get("/:id/:qt", (req, res) => {
  const id = req.params.id;
  const qt = req.params.qt;
  const product = products[id];
  if (product) {
    const unit_price = product.price;
    const total_price = unit_price*qt;
    const productsInfo = {
      id: id,
      qt: qt,
      unit_price: unit_price,
      total_price: total_price,
    };
    res.json(productsInfo);
  } else {
    res.status(404).json({ error: `Product with ID ${id} not found` });
  }
});




module.exports = router;
