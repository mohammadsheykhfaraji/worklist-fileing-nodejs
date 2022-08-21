const Work =require('../models/work');
const workutil=require('../utils/works');

exports.addwork=(req,res)=>{
    if(!req.body.work){
        return res.redirect("/");
    }
    const wrk=new Work(workutil.genraterandomid(),req.body.work);
    wrk.save((err)=>{
        if(err){
            console.log(err);
        }
        
        res.redirect("/");
    });
}
exports.deletwork=(req,res)=>{
    Work.deletwork(req.params.id,(err)=>{
        if(err){
            console.log(err);
        }
        res.redirect("/");
    });
}


exports.completework=(req,res)=>{
    Work.setworktocompleted(req.params.id,(err)=>{
        if(err){
            console.log(err);
        }
        res.redirect("/");
    })
}
