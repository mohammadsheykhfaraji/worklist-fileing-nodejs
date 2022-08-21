const fs=require('fs');
const path=require('path');


const {v4:uuidv4}=require('uuid');


const rootdir=require('./path');

const filepath=path.join(rootdir,'data','work.json')

exports.getwork=(callback)=>{
    fs.readFile(filepath,(err,filecontent)=>{
        if(err){
        return callback([]);
        }
        callback(JSON.parse(filecontent));
    });
}

exports.savework=(work,callback)=>{
    fs.writeFile(filepath,JSON.stringify(work),(err)=>{
        callback(err);
    });
}

exports.genraterandomid=()=>{
    return uuidv4(); 
}


exports.getcompletedwork=(callback)=>{
    this.getwork((works)=>{
        const filterw=works.filter((t)=>t.complated===true);
        console.log(filterw.length);
        callback(filterw.length);
    });
}


exports.reminingwork=(callback)=>{
    this.getwork((works)=>{
        const filterw=works.filter((t)=>t.complated!==true);
        console.log(filterw.length);
        callback(filterw.length);
    });
}