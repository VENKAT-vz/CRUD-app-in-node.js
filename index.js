
const express = require('express')
const mongoose = require('mongoose');
const productRoutes=require("./routes/product.route.js");
const app = express()

app.use(express.json());

app.use("/api/products",productRoutes);

app.get('/', (req, res) => {
  res.send("Hello from node api server updated");
})


mongoose.connect("mongodb+srv://venkateshknr:venkat@backenddb.gvyq2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
  .then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    })

  })
  .catch(() => {
    console.log("Connection failed");
  })
