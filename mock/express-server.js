// let http = require('http');
// let fs = require('fs');
// let url = require('url');
// let list = require('./list');
// function read(cb) { //用来读取数据的
//   fs.readFile('./list.json','utf8',function (err,data) {
//     if(err || data.length === 0){
//       cb([]); // 如果有错误 或者文件没长度 就是空数组
//     }else{
//       cb(JSON.parse(data)); // 将读出来的内容转化成对象
//     }
//   })
// }
//
// function write(data,cb) { // 写入内容
//   fs.writeFile('./list.json',JSON.stringify(data),cb)
// }
// http.createServer((req,res)=>{
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//   res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.setHeader("X-Powered-By",' 3.2.1');
//   if(req.method=="OPTIONS") return res.end();/*让options请求快速返回*/
//   let {pathname,query} = url.parse(req.url,true); // true把query转化成对象
//   if(pathname === '/list'){
//     res.setHeader('Content-Type','application/json;charset=utf8');
//     console.log("hehe");
//     return res.end(JSON.stringify(list));
//   }
// }).listen(3000,()=>{
//   console.log('success');
// })
let express = require('express');
let app = express();
app.listen(3000);
let fs = require('fs');
// let list = require('./list');
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname));
//read
function read(cb) { //用来读取数据的
  fs.readFile('./book.json','utf8',function (err,data) {
    if(err || data.length === 0){
      cb([]); // 如果有错误 或者文件没长度 就是空数组
    }else{
      cb(JSON.parse(data)); // 将读出来的内容转化成对象
    }
  })
}
//write
function write(data,cb) { // 写入内容
  fs.writeFile('./book.json',JSON.stringify(data),cb)
}
// 跨域
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});
//获取list
app.get('/list',function (req,res) {
  res.json(list);
});