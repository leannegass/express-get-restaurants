const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

//TODO: Create your GET Request Route Below: 
app.set("json spaces", 2);

app.get("/restaurants",  async (request, response, next)=>{
    const restaurants = await Restaurant.findAll();
    response.json(restaurants);
})

app.get("/restaurants/:id", async (request, response, next) => {
    const index = request.params.id 
    const restaurantAtIndex = await Restaurant.findByPk(index);
    response.json(restaurantAtIndex);
    
})

//app.use()




module.exports = app;