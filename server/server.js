let express =require('express') ;
let  path =require('path');
let debug =require('morgan');
let  cookieParser =require('cookie-parser');
let  bodyParser =require('body-parser');
let cacheTime=24*60*60*1000;
let App=express();
App.use(debug('dev'));
App.use(cookieParser());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:false}));

App.use(express.static(path.join(__dirname,"/../build/")));
App.use(express.static(path.join(__dirname,"/../assets/")));
App.use(express.static(path.join(__dirname,"/../html/")));

App.use((req,res,next)=>{
    let date=new Date();
    date.setTime(date.getTime()+cacheTime);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Cache-control","max-age:"+cacheTime);
    res.header("Expires",date.toUTCString());
    next();
})

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


module.exports=App;




