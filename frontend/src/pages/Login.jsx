import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../axios'

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
    <div>
      <div>
        <form onSubmit={handleLogin}>
          <label>ID :</label>
          <input type='text' onChange={e => setId(e.target.value)} />
          <br />
          <label>PW :</label>
          <input type='password' onChange={e => setPw(e.target.value)} />
          <input type='submit' value="로그인" />
        </form>
      </div>
    </div>
  )
}

export default Login
