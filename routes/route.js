const express = require("express");
const route = express.Router();
const App = require("../models/appModel");
module.exports = route;
route.post("/add", async (req, res) => {
  try {
    const newNft = new App(req.body);
    const result = await newNft.save();
    res.sendStatus(200).send({ Nft: result, msg: "nft added successfully" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = route;
