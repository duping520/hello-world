// Controller.js中实现真正的业务处理

// 专门用来返回页面
// 引用fs
const fs = require("fs");

// 读取前台页面
module.exports.getIndexpage = (req, res) => {
  // 现在这么做得原因是我们还没有引入模板引擎
  fs.readFile(__dirname + "/../vendors/index.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getListpage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/list.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getDetailpage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/detail.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};

// 读取后台页面
module.exports.getAdminpage = (req, res) => {
  fs.readFile(__dirname + "/./vendors/admin/index.html", (err, data) => {
    if (err) {
      return res.end("404");
    } else {
      res.end(data);
      //   console.log(data);
    }
  });
};
module.exports.getCategoriespage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/admin/categories.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getCommentspage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/admin/comments.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getIndexpage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/admin/index.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getLoginpage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/admin/login.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getNavenuspage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/admin/anv-menus.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getPasswordpage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/admin/password.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getPostspage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/admin/posts.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getPostAddpage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/admin/post-add.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getProfilepage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/admin/profile.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getSettingspage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/admin/settings.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getSlidespage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/admin/slides.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
module.exports.getUserspage = (req, res) => {
  fs.readFile(__dirname + "/../vendors/admin/userss.html", (err, data) => {
    if (err) {
      res.end(404);
    } else {
      res.end(data);
    }
  });
};
