let express =require('express') ;
let  path =require('path');
let debug =require('morgan');
let  cookieParser =require('cookie-parser');
let  bodyParser =require('body-parser');
let compression=require("compression");
let cacheTime=24*60*60*1000;
let app=express();
app.use(compression());
app.use(debug('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use((req,res,next)=>{
    let date=new Date();
    date.setTime(date.getTime()+cacheTime);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Cache-control","max-age:"+cacheTime);
    res.header("Expires",date.toUTCString());
    next();
})
app.use(express.static(path.join(__dirname,"/../build/")));
app.use(express.static(path.join(__dirname,"/../assets/")));
app.use(express.static(path.join(__dirname,"/../html/")));

// App.use("/api/",api)
// App.use("/",index);

// if(env!="development"){
//     App.use(express.static(path.join(__dirname,"/../build/"+env)));
//     App.use(express.static(path.join(__dirname,"/../build/server")));
//     console.log("生产状态：静态目录地址==="+path.join(__dirname,"/../build/"+env));
// }else{
//     App.use(express.static(path.join(__dirname,"/../build/"+env)));
//     console.log("开发状态：静态目录地址==="+path.join(__dirname,"/../build/"+env));
// }


module.exports=app;




