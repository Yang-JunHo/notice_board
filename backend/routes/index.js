// 4-1. 라우터 모듈 가져오기
const express = require('express');
const router = express.Router();
const path = require('path')
const conn = require('../config/database')

// 4-3. 메인페이지 경로 설정
//      => server.js 추가 작업
router.get('/', (req, res) => {
    console.log('main');
    // 6-2. 리액트 페이지 응답 설정
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'))
})

// 8-3. axios로 받아온 데이터 확인
// 회원가입 라우터
router.post('/getData', (req, res) => {
    console.log('getdata router', req.body);

    // LINK_MEMBER라는 테이블 안에
    // ID: 'admin', PW : 123, USER_NAME 우리가 받아온 데이터로 저장

    res.json({
        result: 'success'
    })

    const ID = req.body.id
    const PW = req.body.pw
    const USER_NAME = req.body.username

    // SQL 쿼리 생성
    let sql = `INSERT INTO LINK_MEMBER VALUES(?, ?, ?)`;

    // 데이터베이스에 값 삽입
    conn.query(sql, [ID, PW, USER_NAME], (err, rows) => {
        if (err) {
            console.error('데이터베이스 오류:', err);
            return;
        }
        console.log('insert 완료', rows);
    });
})

// 로그인 라우터
router.post('/getLoginData', (req, res) => {
    console.log('getdata router', req.body);

    let { id, pw } = req.body

    // SQL 쿼리 생성
    let sql = `SELECT ID, USER_NAME FROM LINK_MEMBER WHERE ID = ? and PW = ?`;

    // 데이터베이스에 값 삽입
    conn.query(sql, [id, pw], (err, rows) => {
        if (err) {
            console.error('데이터베이스 오류:', err);
            return;
        }
        console.log('insert 완료', rows);
        const username = rows[0].USER_NAME

        if (rows.length > 0) {
            res.json({
                result: 'success',
                username: username
            })
        } else {
            res.json({
                result: 'fail'
            })
        }
    });
})

// 아이디 찾기 라우터
router.post('/getSearchId', (req, res) => {
    console.log('getdata router', req.body);

    let { username } = req.body

    // SQL 쿼리 생성
    let sql = `SELECT ID, USER_NAME FROM LINK_MEMBER WHERE USER_NAME = ?`;

    // 데이터베이스에 값 삽입
    conn.query(sql, [username], (err, rows) => {
        if (err) {
            console.error('데이터베이스 오류:', err);
            return;
        }
        console.log('insert 완료', rows);
        const id = rows[0].ID
        const username = rows[0].USER_NAME

        if (rows.length > 0) {
            res.json({
                result: 'success',
                id: id,
                username: username
            })
        } else {
            res.json({
                result: 'fail'
            })
        }
    });
})

// 4-2. 라우터 모듈 내보내기
module.exports = router;