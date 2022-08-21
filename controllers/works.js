const works=require('../models/work');
const workutil=require('../utils/works');

exports.getindex=(req,res)=>{

    workutil.getcompletedwork((completedw)=>{
        workutil.reminingwork((reminingw)=>{

            works.fetchall((work)=>{
                res.render("index",{
                    title:"کارها",
                    work:work,
                    completedw:completedw,
                    reminingw:reminingw,
                });
            });

        });
    });

   
}

