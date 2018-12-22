const request = require('request');
const fs = require('fs');
const path = require('path');
var express = require('express');
var router = express.Router();
var mysql  = require('mysql'); 
const multer=require("multer");
//创建一个connection
var login = mysql.createConnection({     
  host     : 'localhost',       //主机
  user     : 'root',               //MySQL认证用户名
  password : '046576LI',        //MySQL认证用户密码
  port: '3306',     //端口号
  database: 'nodetest', //数据库名
});

//测试git push

/* GET home page. */
router.get('/', function(req, res, next) {
 	res.sendfile("./views/index.html");
});

/**登录接口**/
router.post('/login', function(req, res, next) {
		var passWord=JSON.stringify(req.body.passWord)  /*post*/
//	var name=JSON.stringify(req.query.name)  /*get*/
		var  userGetSql = `SELECT * FROM users WHERE password=${passWord}`; //查询
	  var res=res
		login.query(userGetSql,function (err, result) {
		    if(err){return err.message;}   
		    console.log(result)
		    if(result.length==0){
		    	res.status(203).send({"error":"密码错误"});
		    }else{
		    	res.status(200).send(result);
		    }
		  	
		});
});

/**获取必应图片接口**/
router.get('/imgFile', function(req, res, next) {
	let data=req.query;
	let days_ago = req.query.days_ago || 0;
	getWallpaper(res,days_ago,mkt)
});
/*获取必应图片函数*/
let mkt = getRandomInteger(0,10) ? 'zh-CN' : 'en-US';
function getUri(start, number, mkt) {
  return 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=' + start + '&n=' + number + '&mkt=' + mkt
}
function getWallpaper(res,days_ago, mkt) {
    let uri;
    if (days_ago <= 7){
        uri = getUri(days_ago, 1, mkt)
    }else {
        uri = getUri(7, days_ago-6, mkt)
    }
    request(uri, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            let data = JSON.parse(body);
            let images = data.images;
            let imgUrl='https://www.bing.com'+images[images.length-1].url
            res.send(imgUrl)
        }else{
            res.send('request error!')
        }
    })
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*结束*/

/*上传图片接口*/
var storage = multer.diskStorage({
  destination(req,res,cb){
    cb(null,'public/uploads');
    console.log(0)
  },
  filename(req,file,cb){
    const filenameArr = file.originalname.split('.');
    cb(null,Date.now() + '.' + filenameArr[filenameArr.length-1]);
    console.log("ok")
  }
});
var upload = multer({
  storage: storage
});
router.post('/upload', upload.single('file'), function (req, res, next) {
	res.send({urlFile:"http://localhost:3000/uploads/"+req.file.filename})
});
/*结束*/

/*保存与修改markdown文件*/

router.post('/markdown', function(req, res, next) {
		let  markdownSql = null;
		if(req.body.id==''||req.body.id=='null'){
			markdownSql = `INSERT INTO markdown(html,time) VALUES(?,?)`; //插入
		}else{
			markdownSql = 'UPDATE markdown SET html = ?,time = ? WHERE ID = ?';//根据ID修改
		}
		let  markdownVal =[req.body.markdown,req.body.time,Number(req.body.id)];
		console.log(markdownVal)
	  var res=res
		login.query(markdownSql,markdownVal,function (err, result) {
			if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         res.status(500).send(err);
         return;
   		}  
			res.status(200).send({"status":200,"data":"操作成功"});
		});
});
/*结束*/

/*每日一句接口*/
router.post('/sentenceday', function(req, res, next) {
		let  sentencedaySql = null;
		if(req.body.id==''||req.body.id=='null'){
			sentencedaySql = `INSERT INTO sentenceday(time,sentence,author,imgUrl) VALUES(?,?,?,?)`; //插入
		}else{
			sentencedaySql = 'UPDATE sentenceday SET time = ?,sentence = ?,author = ? ,imgUrl = ?  WHERE ID = ?';//根据ID修改
		}
		let  sentencedayVal =[req.body.time,req.body.sentence,req.body.author,req.body.imgUrl,Number(req.body.id)];
		console.log(sentencedaySql)
	  var res=res
		login.query(sentencedaySql,sentencedayVal,function (err, result) {
			if(err){
         console.log('[UPDATE ERROR] - ',err.message);
         res.status(500).send(err);
         return;
   		}  
			res.status(200).send({"status":200,"data":"操作成功"});
		});
});
/*结束*/
module.exports = router;
