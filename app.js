const express = require("express");
const bodyparser = require('body-parser');

const path = require("path");
const {setstatics}=require('./utils/statics');
const adminroutes=require('./routers/admin'); 
const indexroutes=require('./routers/index');
const erorcontrol=require('./controllers/error');


const app = express();


///midllewares
app.use(bodyparser.urlencoded({extends:false}));

///end of middlewares

///ejs
app.set('view engine','ejs');
///end of ejs

///statics
setstatics(app);



//////routers
app.use(indexroutes);
app.use("/admin",adminroutes);


/////end of routers

app.use(erorcontrol.get404);



app.listen(3000, () => {
console.log("listen port 3000")
});


