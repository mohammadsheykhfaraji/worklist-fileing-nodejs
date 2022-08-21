const workutil=require('../utils/works');

class Work{
    constructor(id , txt , complated=false){
        this.id=id;
        this.txt=txt;
        this.complated=complated;

    }

    save(callback){
       workutil.getwork((works)=>{
        works.push(this);
        workutil.savework(works,(err)=>{
            callback(err);
        });
       });

    }


    static fetchall(callback){
       workutil.getwork((works)=>{
        callback(works);
       });
    
    }
    static deletwork(id,callback){
       workutil.getwork((works)=>{
           const fillterw=works.filter(t=>t.id!=id);
           workutil.savework(fillterw,(err)=>{
                callback(err);
           });
       });
    }

    static setworktocompleted(id,callback){
      workutil.getwork((works)=>{
          const workindex=works.findIndex(t=>t.id==id);
          const work=works[workindex];
          work.complated=true;
          works[workindex]=work;
          workutil.savework(works,(err)=>{
            callback(err);
          });
      });
    }
}
module.exports=Work;