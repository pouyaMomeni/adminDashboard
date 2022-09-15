import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../store/user';
import { fetchUserDelet } from '../store/userDelet';
import { fetchUserPut } from '../store/userPut';
import * as cg from 'react-icons/cg'

import '../assets/panelUsers.css'
let numberPut = 0;
const PanleUsers = () => {
    let [name, setName] = useState('')
    let [age, setAge] = useState()
    let [email, setEmail] = useState('')
    let [pass, setPass] = useState('')
    const users = useSelector((state) => state.users.list)
    const sew = useSelector((state) => state.users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])
    const DeletBut = (index) => {
        dispatch(fetchUserDelet({ id: index }));
        dispatch(fetchUser())
        dispatch(fetchUser())
    }
    const putBut = (number) => {
        numberPut = number
    }
    // input handelers
    const nameHandel = (event) => {
        setName(event.target.value)
    }
    const ageHandel = (event) => {
        setAge(event.target.value)
    }
    const emailHandel = (event) => {
        setEmail(event.target.value)
    }
    const passHandel = (event) => {
        setPass(event.target.value)
    }
    // 
    const sendData = () => {
        dispatch(fetchUserPut({ id: numberPut, userName: name, age: email, email: age, password: pass }))
        dispatch(fetchUser())
        dispatch(fetchUser())
        numberPut = 0
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center mt-5'><h3 >لیست ادمین ها</h3></div>
            <table className='table b-rr mt-2'>
                <thead>
                    <tr >
                        <th scope='col'>#</th>
                        <th scope="col">نام</th>
                        <th scope="col">ایمیل</th>
                        <th scope="col">سن</th>
                        <th scope="col">رمز</th>
                        <th scope="col">تعغیرات</th>
                        <th scope="col">حذف</th>
                    </tr>
                </thead>
                <tbody>
                    {sew.loading ? <div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div> : null}
                    {users.map((value, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td><img className='wi ms-1' src={require('../assets/logo2.png')} alt="s" /> {value.name}</td>
                                <td>{value.email}</td>
                                <td >{value.age}</td>
                                <td>{value.password}</td>
                                <td><button className='btn btn-warning' onClick={() => putBut(value.id)}>اپدیت</button></td>
                                <td><button className='btn btn-warning' onClick={() => DeletBut(value.id)}>حذف</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className='d-flex  flex-column p-3 mt-3'>
                <hr />
                <div>
                    <h3 className='text-dark'><cg.CgDanger className='mx-2 text-danger' />راهنما استفاده </h3>
                </div>
                <div>
                    <ul>
                        <li className='my-1'>در لیست ادمین ها شخص مورد نظر را انتخاب کنید</li>
                        <li className='my-1'>در باکس تعغیرات اطلاعات مورد نیاز را وارد کنید</li>
                        <li className='my-1'>و در اخر دکمه اپدیت را فشار دهید</li>
                    </ul>
                </div>
                <hr />
            </div>
            <div className='d-flex justify-content-center align-items-center mt-3'><h3 >باکس تعغیرات</h3></div>
            <table className='table mb-5 mt-2 '>
                <thead>
                    <tr >
                        <th scope='col'>#</th>
                        <th scope="col">نام</th>
                        <th scope="col">ایمیل</th>
                        <th scope="col">سن</th>
                        <th scope="col">رمز</th>
                        <th scope="col">---</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td className='mx-2'><input className='form-control ' type="text" onChange={nameHandel} placeholder='نام' /></td>
                        <td className='mx-2'><input className='form-control  ' type="text" onChange={ageHandel} placeholder='ایمیل' /></td>
                        <td className='mx-2'><input className='form-control  ' type="text" onChange={emailHandel} placeholder='سن' /></td>
                        <td className='mx-2'><input className='form-control  ' type="password" onChange={passHandel} placeholder='رمز' /></td>
                        <td className='mx-2'><button className='btn btn-warning ' onClick={() => sendData()}>اپدیت</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PanleUsers