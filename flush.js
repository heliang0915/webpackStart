/**
 * Created by heliang on 2017/7/28.
 */
var request = require('request');
var counter=0;
let url="https://www.wukong.com/question/6447747474441371917/";
setInterval(()=>{
    var options = {
        url,
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