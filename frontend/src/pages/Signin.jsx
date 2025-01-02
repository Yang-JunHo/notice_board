import { React, useState } from 'react'
import instance from '../axios'
import { useNavigate } from 'react-router-dom'

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
        <div>
            <div>
                <form onSubmit={sendData}>
                    <label>ID :</label>
                    <input type="text" onChange={(e) => { setId(e.target.value) }}/><br />
                    <label>PW :</label>
                    <input type="text" onChange={(e) => { setPw(e.target.value) }}/><br />
                    <label>User :</label>
                    <input type="text" onChange={(e) => { setUsername(e.target.value) }}/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Signin