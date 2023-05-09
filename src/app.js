const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 
app.set("json spaces", 2);

app.get("/restaurants",  async (Request, response, next)=>{
    const restaurants = await Restaurant.findAll();
    response.json(restaurants);
})

//app.use()




module.exports = app;