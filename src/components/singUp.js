import React from 'react'
import { Link } from 'react-router-dom'
import * as fa from 'react-icons/fa'
import * as bs from 'react-icons/bs'
import { Formik } from 'formik'
import * as yup from 'yup'
import '../assets/singUp.css'
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from 'react-redux'
import { fetchUserPost } from '../store/userPost'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SingUp() {
    function onChange(value) {
        console.log('Captcha value:', value);
    }
    const dispatch = useDispatch()
    return (
        <Formik initialValues={{
            userName: '',
            age: '',
            email: '',
            rule: '',
            password: ''
        }}
            validationSchema={yup.object({
                userName: yup.string("شامل عدد نباشد").required("الزامی است"),
                email: yup.string("شامل عدد نباشد").email('فرمت اشتباه است').required("الزامی است"),
                age: yup.number("باید عدد باشد").positive("باید مثبت باشد").integer("اعشاری نباشد").required("الزامی است"),
                rule: yup.boolean().oneOf([true], 'تیک را بزنید'),
                password: yup.string("شامل عدد نباشد").required("الزامی است")
            })}
            onSubmit={(values) => {
                console.log(values);
                toast("شما در سایت ثبت نام شده اید!");
                dispatch(fetchUserPost(values))
                // toast.success('Submited !', { autoClose: 3000 })
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
                                <h2 className='text-light pointer'><fa.FaCoffee className='mx-2 text-warning' />ثبت نام</h2>
                            </div>
                        </div>
                        {/* 1-2 */}
                        <div className="row">
                            <div className="col"><h6 className='text-light pointer'>اگر اکانت دارین <Link to='/' className='text-warning text-dec'>اینجا کلیک کنید</Link ></h6></div>
                        </div>
                        {/* 2-3 */}
                        <div className="row mt-3">
                            <div className="col-6">
                                <input className='form-control border' type="text" placeholder='نام کاربری...'
                                    name='userName'
                                    onChange={handleChange}
                                    value={values.userName} />
                            </div>
                            <div className="col-6">
                                {errors.userName ?
                                    <span className="text-danger">{errors.userName}</span>
                                    : null}
                            </div>
                        </div>
                        {/* 3-4 */}
                        <div className="row mt-3">
                            <div className="col-6">
                                <input className='form-control border' type="text" placeholder='سن....'
                                    name='age'
                                    onChange={handleChange}
                                    value={values.age} />
                            </div>
                            <div className="col-6">
                                {errors.age ?
                                    <span className="text-danger">{errors.age}</span>
                                    : null}
                            </div>
                        </div>
                        {/* 4-5 */}
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
                        {/* 4-5 */}
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
                        {/* -- */}
                        <div className="row mt-2">
                            <div className="col">
                                <label className="form-check-label text-light mx-2" htmlFor="flexCheckDefault">
                                    قبول قوانین
                                </label>
                                <input className="form-check-input" type="checkbox" name='rule' value={values.acc} onChange={handleChange} id="flexCheckDefault"
                                />
                            </div>
                            <div className="col-6">
                                {errors.rule ?
                                    <span className="text-danger">{errors.rule}</span>
                                    : null}
                            </div>
                        </div>
                        {/* -- */}
                        {/* 5-6 */}
                        <div className="row">
                            <div className="col">
                                <ReCAPTCHA className="g-recaptcha mt-3" theme='dark' sitekey="6Ld8KX4hAAAAAIoQdo_rho2LOLtnxDSlqTguI_2n" onChange={onChange} ></ReCAPTCHA>
                            </div>
                        </div>
                        {/* 6-7 */}
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
            )
            }
        </Formik >
    )
}

export default SingUp