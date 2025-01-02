// 3-1. 기본 모듈 가져오기
const express = require('express');
const app = express();

// 6-1. 리액트 프로젝트 경로 설정
const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));
app.use(express.json());

// 9. CORS 모듈 가져오기
const cors = require('cors');
app.use(cors());

// 4-3. 메인페이지 경로 설정
const indexRouter = require('./routes');
app.use('/', indexRouter);

// 3-2. 포트 설정
app.set('port', process.env.PORT || 8000);
app.listen(app.get('port'), ()=>{
    console.log(`Server is running on ${app.get('port')}`);
});