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


/**sql语句 **/

var  userGetSql = 'SELECT * FROM userinfo '; //查询

/**sql语句结束*/
function query(res){
		connection.connect();
	  var res=res
		connection.query(userGetSql,function (err, result) {
		    if(err){return err.message;}   
		    console.log(result)
		  	res.send(result);
		});
		connection.end();		
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/first', function(req, res, next) {
	query(res)
});

module.exports = router;
