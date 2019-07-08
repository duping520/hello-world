// 引入express
const express = require("express");
const router = require("./router");
const ejs = require("ejs");

// 引入FS
const fs = require("fs");

// 创建服务器
const app = express();

// 设置模板引擎ejs
app.set("view engine", "ejs");
// 指定模板文件的目录  后期使用ejs的时候就可以参照这个目录进行ejs文件查询
app.set("views", "views");

// 开启监听端口
app.listen(3000, () => {
  console.log("http://127.0.0.1:3000");
});

// 托管静态页面
app.use("/assets", express.static("assets"));
app.use("/uploads", express.static("uploads"));

app.use(router);
