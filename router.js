// 引入users表的控制器模块
const pagesController = require("./controller");

// 封装路由模块
const express = require("express");

// Router()构造函数创建的路由对象可以当成一个中间件来使用
const router = express.Router();

// 当监听到Get方式的/请求的时候  会调用函数进行处理  并且为传递俩两个参数  req,res
// 这两个参数是服务器传递的  不是你一开始就有的
// 前台页面
router
  .get("/", pagesController.getIndexpage)
  .get("/list", pagesController.getListpage)
  .get("/detail", pagesController.getDetailpage)

  //  后台管理页面  统一添加admin做为前缀
  .get("/admin", pagesController.getAdminpage)
  .get("/admin/categories", pagesController.getCategoriespage)
  .get("/admin/comments", pagesController.getCommentspage)
  .get("/admin/login", pagesController.getLoginpage)
  .get("/admin/nav-menus", pagesController.getNavMenuspage)
  .get("/admin/password-reset", pagesController.getPasswordResetpage)
  .get("/admin/post-add", pagesController.getPostAddpage)
  .get("/admin/posts", pagesController.getPostspage)
  .get("/admin/profile", pagesController.getProfilepage)
  .get("/admin/settings", pagesController.getSettingspage)
  .get("/admin/slides", pagesController.getSlidespage)
  .get("/admin/users", pagesController.getUserspage);
module.exports = router;
