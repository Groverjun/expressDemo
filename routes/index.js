var express = require('express');
var router = express.Router();
var mysql  = require('mysql'); 
//创建一个connection
var connection = mysql.createConnection({     
  host     : 'localhost',       //主机
  user     : 'root',               //MySQL认证用户名
  password : '123456',        //MySQL认证用户密码
  port: '3308',     //端口号
  database: 'nodetest', //数据库名
});





/* GET home page. */
router.get('/', function(req, res, next) {
 	res.sendfile("./views/index.html");
});

/**查询接口**/
router.get('/first', function(req, res, next) {
		console.log(req.query.name)
		var name=JSON.stringify(req.query.name)
		var  userGetSql = `SELECT * FROM userinfo WHERE UserName=${name}`; //查询
	  var res=res
		connection.query(userGetSql,function (err, result) {
		    if(err){return err.message;}   
		    console.log(result)
		  	res.send(result);
		});
});



module.exports = router;
