import { React, useState } from 'react'
import instance from '../axios'
import { useNavigate } from 'react-router-dom'
import '../css/Signin.css'

const Signin = () => {
    const [id, setId] = useState()
    const [pw, setPw] = useState()
    const [username, setUsername] = useState()
    const nav = useNavigate()

    const sendData = async (e) => {
        e.preventDefault()

        try {
            const res = await instance.post('/getData', { id: id, pw: pw, username: username })
            console.log('res', res);
            if (res.data.result === 'success') {
                window.alert('성공!')
                nav('/')
            } else {
                window.alert('실패..')
            }
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <form className='signInForm' onSubmit={sendData}>
            <div>
                <h1 id='register_title'> 회원가입</h1>
            </div>
            <div className='register'>
                <div>
                    {/* 아이디 */}
                    <div>
                        <h5> 아이디 </h5>
                        <input type='text' class="input-field" maxLength='20' onChange={(e) => { setId(e.target.value) }} name='register_id' placeholder="7자 이상의 문자" autoFocus />
                        <button className='signInButton' type="button" id="dupIdCheck">중복확인</button>
                    </div>

                    {/* 비밀번호 */}
                    <div>
                        <h5> 비밀번호 </h5>
                        <input type='password' class="input-field" maxLength='15' onChange={(e) => { setPw(e.target.value) }} name='register_password' placeholder="비밀번호" />
                    </div>

                    {/* 비밀번호 */}
                    <div>
                        <h5> 비밀번호 확인 </h5>
                        <input type='password' class="input-field" maxLength='15' name='register_pswCheck' placeholder="비밀번호 확인" />
                    </div>

                    {/* 닉네임 */}
                    <div>
                        <h5> 닉네임 </h5>
                        <input type='text' class="input-field" maxLength='10' onChange={(e) => { setUsername(e.target.value) }} name='register_name' placeholder="이름" />
                    </div>
                </div>
            </div>

            <div>
                <button type="submit" className='signInButton' id="sbtn">가입하기&nbsp;🎉</button>
            </div>
        </form>
    )
}

export default Signin