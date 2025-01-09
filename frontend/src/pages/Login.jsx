import React, { useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import instance from '../axios'
import '../css/Login.css'

const Login = () => {

  const [id, setId] = useState()
  const [pw, setPw] = useState()
  const [user, setUser] = useState()
  const nav = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(id, pw);

    try {
      const res = await instance.post('/getLoginData', { id: id, pw: pw })
      // console.log('res', res.data.result);
      // console.log('res', res.data.username);

      if (res.data.result === 'success') {
        setUser(res.data.username)
        const username = res.data.username

        window.alert(username + '님 환영합니다!')
        nav('/')
      } else {
        window.alert('잘못된 아이디 또는 비밀번호입니다..')
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
      <form onSubmit={handleLogin} className='loginForm' >
        <div>
          <h1 id='login_title'>로그인</h1>
        </div>
        <div>
          <div className='input'>
            <input type='text' className='userId' id='userId' placeholder="아이디" autoFocus onChange={e => setId(e.target.value)} />
            <input type='password' className='password' id='password' placeholder='비밀번호' onChange={e => setPw(e.target.value)} />
            <button id='loginBut' type='submit'>Login</button>
          </div>
        </div>
        <div className="link">
          <NavLink to="/SearchId">아이디 찾기</NavLink>
          <span>&nbsp;|&nbsp;</span>
          <NavLink to="/findPw">비밀번호 찾기</NavLink>
          <span>&nbsp;|&nbsp;</span>
          <NavLink to="/signin">회원가입</NavLink>
        </div>
      </form>
  )
}

export default Login
