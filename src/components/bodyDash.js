import React, { useEffect } from 'react'
import * as hi from 'react-icons/hi'
import '../assets/bodyDash.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserGetByIdHome } from '../store/userGetByIdHome'
import { changeLog } from '../store/user'
import { useNavigate } from 'react-router-dom'
const BodyDash = () => {
    const navigate = useNavigate();
    const data = useSelector((state) => state.userGetByIdHome.listByIdHome)
    const number = useSelector((state) => state.userGetByIdHome.numberSolidHome)
    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(fetchUserGetByIdHome({ id: number }))
    }, [dispacth, number])
    const exite = () => {
        dispacth(changeLog())
        return navigate('/');
    }
    return (
        <>
            <div className='container my-5 '>
                <div className="row  p-3 ">
                    <hr />
                    <div className="col-8 mt-3">
                        <h5 className='text-dark'><hi.HiInformationCircle className='mx-2 text-danger' />هنگامی خواستید از اکانت خود خارج شوید میتوانید با فشار دادن این دکمه از  اکانت خارج شوید </h5>
                    </div>
                    <div className="col mb-4">
                        <button className='btn btn-warning' onClick={() => exite()}>خروج</button>
                    </div>
                    <hr />
                </div>
            </div>
            <div className='container my-5 border p-4 '>
                <div className="row align-items-center">
                    <div className="col"><img className='w-img-body p-2 mx-2 border' src={require('../assets/logo2.png')} alt="ss" /></div>
                    <div className="col-9">
                        <h5><hi.HiInformationCircle className='mx-2 text-danger' />تمامی اطلاعات شما در این جا نوشته شده است ولی نمی توانید تعغیری  در آن ایجاد کنید(میتوانید در بخش پنل ادمین ها اطلاعات خود را تعغیر بدهید)</h5>
                    </div>
                </div>
                <div className="row justify-content-around align-items-center mt-4">
                    <div className="col me-4"><input className='form-control w-75' type="text" value={data.name} disabled /></div>
                    <div className="col"><input className='form-control w-75' type="text" value={data.age} disabled /></div>
                </div>
                <div className="row justify-content-around align-items-center mt-4">
                    <div className="col me-4"><input className='form-control w-75' type="text" value={data.email} disabled /></div>
                    <div className="col"><input className='form-control w-75' type="text" value={data.password} disabled /></div>
                </div>
            </div>
        </>
    )
}

export default BodyDash