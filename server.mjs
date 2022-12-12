// const express = require('express')
console.log("i am server file");
import express from "express";
import path from "path";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
let products = [];

// data add krna ki api start
app.post('/product', (req, res) => {

  const body = req.body;

  if ( // validation
      !body.name
      || !body.price
      || !body.description
  ) {
      res.status(400).send({
          message: "required parameters missing",
      });
      return;
  }

  console.log(body.name)
  console.log(body.price)
  console.log(body.description)

  products.push({
      id: `${new Date().getTime()}`,
      name: body.name,
      price: body.price,
      description: body.description
  });

  res.send({
      message: "product added successfully"
  });
});
//data add krna ki api end
// data view krna ki api start
app.get('/products', (req, res) => {
    res.send({
        message: "got all products successfully",
        data: products
    })
});
// data view krna ki api end

// single data view krna ki api start
app.get('/product/:id', (req, res) => {

  const id = req.params.id;

  let isFound = false;
  for (let i = 0; i < products.length; i++) {

      if (products[i].id === id) {
          res.send({
              message: `get product by id: ${products[i].id} success`,
              data: products[i]
          });

          isFound = true
          break;
      }
  }
  if (isFound === false) {
      res.status(404)
      res.send({
          message: "product not found"
      });
  }
  return;
})
// single data view krna ki api end


// api data delete krna ki api start
app.delete('/product/:id', (req, res) => {
  const id = req.params.id;

  let isFound = false;
  for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
          products.splice(i, 1);
          res.send({
              message: "product deleted successfully"
          });
          isFound = true
          break;
      }
  }
  if (isFound === false) {
      res.status(404)
      res.send({
          message: "delete fail: product not found"
      });
  }
})
// api data delete krna ki api end


// api data edit krna ki api start
app.put('/product/:id', (req, res) => {

  const body = req.body;
  const id = req.params.id;

  if ( // validation
      !body.name
      || !body.price
      || !body.description
  ) {
      res.status(400).send({
          message: "required parameters missing"
      });
      return;
  }

  console.log(body.name)
  console.log(body.price)
  console.log(body.description)

  let isFound = false;
  for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {

          products[i].name = body.name;
          products[i].price = body.price;
          products[i].description = body.description;

          res.send({
              message: "product modified successfully"
          });
          isFound = true
          break;
      }
  }
  if (!isFound) {
      res.status(404)
      res.send({
          message: "edit fail: product not found"
      });
  }
  res.send({
      message: "product added successfully"
  });
})
// api data edit krna ki api end





const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "./web/build")));
app.use("*", express.static(path.join(__dirname, "./web/build")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

