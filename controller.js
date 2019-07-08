// Controller.js中实现真正的业务处理

// 专门用来返回页面
// 引用fs
const fs = require("fs");

// 读取前台页面
module.exports.getIndexpage = (req, res) => {
  // 现在这么做得原因是我们还没有引入模板引擎
  fs.readFile(__dirname + "/../vendors/index.ejs", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getListpage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/list.ejs", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getDetailpage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/detail.ejs", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};

// 读取后台页面
module.exports.getAdminpage = (req, res) => {
  res.render("admin/index.ejs");
};
module.exports.getCategoriespage = (req, res) => {
  res.render("admin/categories.ejs");
};
module.exports.getCommentspage = (req, res) => {
  res.render("admin/comments.ejs");
};

module.exports.getLoginpage = (req, res) => {
  res.render("admin/login.ejs");
};
module.exports.getNavMenuspage = (req, res) => {
  res.render("admin/nav-menus.ejs");
};
module.exports.getPasswordResetpage = (req, res) => {
  res.render("admin/password-reset.ejs");
};
module.exports.getPostAddpage = (req, res) => {
  res.render("admin/post-add.ejs");
};
module.exports.getPostspage = (req, res) => {
  res.render("admin/posts.ejs");
};
module.exports.getProfilepage = (req, res) => {
  res.render("admin/profile.ejs");
};
module.exports.getSettingspage = (req, res) => {
  res.render("admin/settings.ejs");
};
module.exports.getSlidespage = (req, res) => {
  res.render("admin/slides.ejs");
};
module.exports.getUserspage = (req, res) => {
  res.render("admin/users.ejs");
};
