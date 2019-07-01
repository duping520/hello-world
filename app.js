// 引入express
const express = require("express");

// 引入FS
const fs = require("fs");

// 创建服务器
const app = express();

// 开启监听端口
app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});

// 添加路由
app.get("/", (req, res) => {
  fs.readFile(__dirname + "/views/index.html");
});
