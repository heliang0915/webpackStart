/**
 * 定义web服务器 生产环境
 *@author heliang
 *@date 2017-05-26
 */
let app =require("./server");
let http=require('http');
require('es6-promise').polyfill();
require("isomorphic-fetch");
var request = require('request');
let port=3000;
app.set("port",port);
let server=http.createServer(app);
server.listen(port)
let onListening=()=>{
    console.log("服务器启动.. 端口:%s",port);
}
let onError=(err)=>{
    if(err.code=="EADDRINUSE"){
        console.log("端口%s被占用",port);
    }else{
        console.log("出现错误%s",err.message);
    }
}



var counter=0;
setInterval(()=>{
    var options = {
        url: 'https://www.wukong.com/question/6447659951488762125/',
        headers: {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1'
        }
    };
    request(options, function(err){
        if(err){
            console.log("刷新次数出错:"+err.message);
        }else{
            counter++;
            console.log("浏览次数:"+counter)
        }

    });
},100)


server.on('listening',onListening);
server.on('error',onError)