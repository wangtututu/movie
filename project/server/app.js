// 代理模式的跨域 





//web 项目框架
var express = require ('express');
//导入 request 模块 http 请求模块插件
var request = require('request');
//实例化express
var app = express();
//术语：“路由”
// app.route('/').get(function(req, res, next){
// 	res.post(
// 			"data" = [1,2,3,4]
// 		);
// });
// req : request 浏览器发送给服务器的对象
// res : response 服务器发送给浏览器的对象
app.route('/api/test').get(function(req, res){
	//接收 js 使用 ajax 发送的数据
	var query = req.query;
	var url = query.url;
	//删除 url 参数
	//剩余的就是想接口发送的数据
	delete query.url;
	
	request.post({
		url : url,
		formData:query
		/**
		 * error : 判断结果是否错误
		 * response : 请求的头文件信息
		 * data ： 返回的结果数据
		 */
	},function(error,response,data){
		res.send(data);
	});
});

app.route('/api/movie').get(function(req, res){
	var query = req.query || {}; //ajax 发送过来的数据
	request.post({
		url : "http://op.juhe.cn/onebox/movie/video",
		formData:{
			q : query.title,
			key : "a96507c8ab111f43e8d236fd1af17dbb"
		}
	},function(error,response,data){
		res.send(data);
	});
});


// express 开启静态服务器，把指定的目录做根目录
app.use(express.static("./dest"));

//创建一个http服务
var server  = require('http').createServer(app);
//监听端口和ip地址  //127.0.0.1监听这个端口   0.0.0.0本机网卡
server.listen(5000, "127.0.0.1", function() {
	console.log('http://127.0.0.1:5000');
});
