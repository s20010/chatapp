"use strict";

var express = require("express");
var cookie = require("cookie-parser");
var session = require("express-session");
var bodyParser = require("body-parser");

// Expressインスタンスを生成
var app = express();

// テンプレートエンジンの設定
app.set("views", "./views");
app.set("view engine", "ejs");

// ミドルウエアの設定
app.use("/public", express.static("public"));
app.use(cookie());
app.use(session({ secret: "YOUR SECRET SALT", resave: true, saveUninitialized: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ルーティングの設定
app.use("/shop", require("./router.js"));

// サーバー起動
app.listen(3000);
