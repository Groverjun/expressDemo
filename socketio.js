/*
封装socket.io,为了获取server以便监听.
 */
var socketio = {};
var socket_io = require('socket.io');
 
//获取io
var i=0
socketio.getSocketio = function(server){
 
	var io = socket_io.listen(server);
 
	io.sockets.on('connection', function (socket) {
		/*setInterval(function(){
			i++
			var datas = [1,2,3,4,5];
			socket.emit('message', {datas: i+"您有一条新消息"});
		},3000)*/
		socket.on('messageClick',function(res){
			console.log(res)
			console.log('监听点击事件');
			var datas = [1,2,3,4,5];
			socket.emit('message', {datas: datas});
      		socket.broadcast.emit('message',  {datas: datas});
		})
	})
};
 
module.exports = socketio;
