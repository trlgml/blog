(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{338:function(e,n,r){"use strict";r.r(n);var s=r(12),t=Object(s.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("var express = require('express');\nvar cookieParser = require('cookie-parser');\nvar session = require('express-session');\nvar passport = require('passport');\nvar LocalStrategy = require('passport-local').Strategy;\n\n// user.id序列化到session中\n// 类似 req.session.passport = { user: user.id }\npassport.serializeUser(function(user, done) {\n  done(null, user.id);\n});\n\n// session反序列化,上面的user.id\n// 若存在则从数据库中查询user并存储与req.user中\npassport.deserializeUser(function(id, done) {\n  //req.user获取实际数据\n  //done(null, user);\n  // 相当于next(err)\n  //done(err);\n  User.findById(id, function(err, user) {\n    done(err, user);\n  });\n});\n\npassport.use(new LocalStrategy({ usernameField: 'username' }, function(username, password, done) {\n    // 对密码和用户验证错误的处理方式\n    // return done(null, false, { message: 'Incorrectusername.' });\n    // 验证无误返回user对象\n    // return done(null, user);\n}));\n\n\napp.use(cookieParser());\napp.use(session({secret: \"need change\"}));\napp.use(passport.initialize());\napp.use(passport.session());\napp.use(flash());\n\n\napp.post('/login', passport.authenticate('local', function(err, user, info) {\n    if (err) return next(err);\n    if (!user) {\n      return res.redirect('/login');\n    }\n    req.logIn(user, function(err) {\n      if (err) return next(err);\n      res.redirect('/');\n    });\n  })(req, res, next)\n);\n\napp.get('/user', isAuthenticated, getUser);\napp.get('/logout', function(req, res){\n  req.logout();\n  res.redirect('/');\n});\n\n\nvar isAuthenticated = function(req, res, next) {\n  if (req.isAuthenticated()) return next();\n  res.redirect('/login');\n};\n\n")])])])])}),[],!1,null,null,null);n.default=t.exports}}]);