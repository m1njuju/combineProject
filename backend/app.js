var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Vue의 라우터와 연결하기 위한 모듈
const connectHistory = require('connect-history-api-fallback');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 7. 작성한 라우터를 app.js에 가져옴
const memoRouter = require('./routes/memo');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 3. connect-history-api-fallback 모듈 사용
//  : 모든 주소를 vue-router주소로 받음 (서버 주소 가지 않음)
app.use(connectHistory());
// 2. public의 index.html을 사용하기 위한 연결(이미 작성되어 있음)
/* 
  (1) use(express.static())을 통해서 index.html 실행 
  화면은 계속해서 Vue-router로 작성한 화면만 출력
*/ //실행순서
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 8. url(/api/memo를 항상 가지는 주소)와 라우터이름을 연결
app.use('/api/memo', memoRouter);

module.exports = app;
