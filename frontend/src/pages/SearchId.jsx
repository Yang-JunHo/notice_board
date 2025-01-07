import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import instance from '../axios'

const SearchId = () => {
    const nav = useNavigate()
    const [user, setUser] = useState()

    const handleSearchId = async (e) => {
        e.preventDefault()
        console.log(user);

        try {
            const res = await instance.post('/getSearchId', { username: user })
            console.log('res', res.data.result);
            console.log('res', res.data.id);
            const id = res.data.id

            if (res.data.result === 'success') {
                window.alert("당신의 아이디는 " + id + "입니다.")
                nav('/login')
            } else {
                window.alert('해당 정보를 찾을 수 없습니다.')
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSearchId}>
                    <label>USERNAME :</label>
                    <input type='text' onChange={e => setUser(e.target.value)} />
                    <br />
                    <input type='submit' value="로그인 찾기" />
                </form>
            </div>
        </div>
    )
}

export default SearchId