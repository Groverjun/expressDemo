var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/first', function(req, res, next) {
	console.log(req.query)
	let data=req.query
	if(data.name=='冬马和纱'){
		res.send({name:'冬马和纱',say:'你好'});
	}else if(data.name=='小木曾雪莱'){
		res.send({name:'小木曾雪莱',say:'再见'});
	}else{
		res.send({name:'???',say:'不认识'});
	}
	
	
});
module.exports = router;
