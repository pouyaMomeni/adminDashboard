import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as fa from 'react-icons/fa'
import * as bs from 'react-icons/bs'
import { Formik } from 'formik'
import * as yup from 'yup'
import ReCAPTCHA from "react-google-recaptcha";
import '../assets/login.css'
import { fetchUser } from '../store/user'
import { useSelector, useDispatch } from 'react-redux'
import { changeLog } from '../store/user'
import { getNumber } from '../store/userGetById'
import { getNumberHome } from '../store/userGetByIdHome'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const navigate = useNavigate();
    function onChange(value) {
        console.log('Captcha value:', value);
    }
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.users.list);
    // let loadData = useSelector((state) => state.users.login);

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])
    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }}
            validationSchema={yup.object({
                email: yup.string("شامل عدد نباشد").email('فرمت اشتباه است').required("الزامی است"),
                password: yup.string("شامل عدد نباشد").required("الزامی است")
            })}
            onSubmit={(values) => {
                let i = 0
                dispatch(fetchUser())
                for (let index = 0; index < userData.length; index++) {
                    if (values.email === userData[index].email && values.password === userData[index].password) {
                        dispatch(changeLog());
                        i = i + 1;
                        dispatch(getNumber(index + 1))
                        dispatch(getNumberHome(index + 1))
                        return navigate('/dashboard');
                    }

                }
                if (i === 0) {
                    toast("ایمیل یا رمز عبور شما اشتباه است!");
                }


            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                <div className='d-flex justify-content-center align-items-center hight-log'>
                    <form className='container w-log-form border p-3 form-log-color' onSubmit={handleSubmit}>
                        {/* row 1 */}
                        <div className="row">
                            <div className="col">
                                <h2 className='text-light pointer'><fa.FaCoffee className='mx-2 text-warning' />ورود</h2>
                            </div>
                        </div>
                        {/* 1-2 */}
                        <div className="row">
                            <div className="col"><h6 className='text-light pointer'>اکانت دارین؟<Link to='singUp' className='text-warning mx-1 text-dec'>اگر ندارین اینجا کلیک کنید</Link></h6></div>
                        </div>
                        {/* 2-3 */}
                        <div className="row mt-3">
                            <div className="col-6">
                                <input className='form-control border' type="email" placeholder='ایمیل...'
                                    name='email'
                                    onChange={handleChange}
                                    value={values.email} />
                            </div>
                            <div className="col-6">
                                {errors.email ?
                                    <span className="text-danger">{errors.email}</span>
                                    : null}
                            </div>
                        </div>
                        {/* 3-4 */}
                        <div className="row mt-3">
                            <div className="col-6">
                                <input className='form-control border' type="password" placeholder='رمز عبور... '
                                    name='password'
                                    onChange={handleChange}
                                    value={values.password} />
                            </div>
                            <div className="col-6">
                                {errors.password ?
                                    <span className="text-danger">{errors.password}</span>
                                    : null}
                            </div>
                        </div>
                        {/* 4-5 */}
                        <div className="row">
                            <div className="col">
                                <ReCAPTCHA className="g-recaptcha mt-3" theme='dark' sitekey="6Ld8KX4hAAAAAIoQdo_rho2LOLtnxDSlqTguI_2n" onChange={onChange} ></ReCAPTCHA>
                            </div>
                        </div>
                        {/* 5-6 */}
                        <div className='d-flex justify-content-around align-items-center mt-3'>
                            <div><button type="submit" className='btn btn-warning' name='submit'>تایید</button></div>
                            <div><p className='text-light'></p></div>
                            <div className='d-flex'>
                                <div className='mx-2 text-warning'><bs.BsFacebook /></div>
                                <div className='mx-2 text-warning'><bs.BsGithub /></div>
                                <div className='mx-2 text-warning'><bs.BsTwitter /></div>
                            </div>
                        </div>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={true}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </form>
                </div>
            )}
        </Formik>
    )

}

export default Login