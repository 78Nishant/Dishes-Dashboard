const express=require('express');
const router=express.Router();
const dishcontroller=require('../controller/dish.controller');


router
.get('/',dishcontroller.getAllDishes)
.get('/isPublished/:name',dishcontroller.isPublished)

exports.router=router;