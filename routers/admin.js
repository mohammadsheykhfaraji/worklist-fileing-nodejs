const express =require('express');

const admincontroler=require('../controllers/admin');


const router=express.Router();

router.post("/add-work",admincontroler.addwork);

router.get("/deletwork/:id",admincontroler.deletwork);
router.get("/completedwork/:id",admincontroler.completework);

module.exports=router;

