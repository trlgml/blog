```
var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// user.id序列化到session中
// 类似 req.session.passport = { user: user.id }
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// session反序列化,上面的user.id
// 若存在则从数据库中查询user并存储与req.user中
passport.deserializeUser(function(id, done) {
  //req.user获取实际数据
  //done(null, user);
  // 相当于next(err)
  //done(err);
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy({ usernameField: 'username' }, function(username, password, done) {
    // 对密码和用户验证错误的处理方式
    // return done(null, false, { message: 'Incorrectusername.' });
    // 验证无误返回user对象
    // return done(null, user);
}));


app.use(cookieParser());
app.use(session({secret: "need change"}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


app.post('/login', passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) {
      return res.redirect('/login');
    }
    req.logIn(user, function(err) {
      if (err) return next(err);
      res.redirect('/');
    });
  })(req, res, next)
);

app.get('/user', isAuthenticated, getUser);
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};

```