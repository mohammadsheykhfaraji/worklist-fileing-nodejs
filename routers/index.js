const experess=require('express');

const workcontroler=require('../controllers/works');

const router=experess.Router();

router.get("/",workcontroler.getindex);

module.exports=router;