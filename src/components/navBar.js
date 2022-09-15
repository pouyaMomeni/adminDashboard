import React, { useEffect } from 'react'
import '../assets/nav.css'
import * as faIcons from "react-icons/fa";
import * as bs from 'react-icons/bs'
import * as bi from 'react-icons/bi'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import * as hi from 'react-icons/hi'
import { fetchUserGetById } from '../store/userGetById';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'
const NavBar = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.userGetById.listById);
    const idNumber = useSelector((state) => state.userGetById.numberSolid)
    useEffect(() => {
        dispatch(fetchUserGetById({ id: idNumber }))
    }, [dispatch, idNumber])
    console.log(userId.name);
    return (
        <div>
            <nav className='d-flex bg-nav justify-content-around align-items-center mb-2'>
                <div className='d-flex logo-class'>
                    <div className='bg-text align-itemes-center'>
                        <h6 className='text-warning align-itemes-center'><img className='w-img p-2 mx-2' src={require('../assets/logo2.png')} alt="ss" />{userId.name}</h6>
                    </div>
                </div>
                <div className='d-flex justify-content-around align-items-center w-link item-class'>
                    {/* 1 */}
                    <div className='d-flex align-items-center'>
                        <Tooltip
                            title="فعال کردن نوتیفکشن"
                            position="bottom"
                            trigger="mouseenter focus"
                        >
                            <bs.BsFillBellFill className='text-warning w-bar-3 mx-3' />
                        </Tooltip>
                    </div>
                    {/* 2 */}
                    <div>

                        <Tooltip
                            title="فارسی"
                            position="bottom"
                            trigger="mouseenter focus"
                        >
                            <faIcons.FaLanguage className='text-warning w-bar-2 mx-3' />
                        </Tooltip>
                    </div>

                    {/* 3 */}
                    <div className="input-group rounded w-serach d-flex align-items-center" mx-3>
                        <input type="search" className="form-control rounded w-serach" placeholder="سرچ کنید" aria-label="Search" aria-describedby="search-addon" />
                        <i className='corsour-serach'><bs.BsSearch className='text-warning w-bar mx-2 ' /></i>
                    </div>
                </div>
                <div className='d-flex'>
                    {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></button> */}
                    <faIcons.FaBars className='text-warning w-bar' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" />

                    {/*  */}
                    <div className="offcanvas offcanvas-start text-bg-dark" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            <h3 className="offcanvas-title text-warning" id="offcanvasWithBothOptionsLabel">داشبورد</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul>
                                <li className='li-des'><Link to='/Home' className='text-warning mx-2 tt'><faIcons.FaHome className='mx-2' />خانه</Link></li>
                                <hr className='txt-warning' />
                                <li className='li-des'><Link to='/dashboard' className='text-warning mx-2 tt'><bi.BiUser className='mx-2' />پنل کاربرها</Link></li>
                                <hr className='txt-warning' />
                                <li className='li-des'><Link to='/' className='text-warning mx-2 tt'><faIcons.FaCoffee className='mx-2 text-warning' /> ثبت نام و ورود</Link></li>
                                <hr className='txt-warning' />
                            </ul>
                        </div>
                    </div>
                    {/*  */}
                </div>
            </nav>
        </div>
    )
}

export default NavBar