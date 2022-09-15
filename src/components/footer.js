import React from 'react'
import * as bsIcons from "react-icons/bs";
import * as faIcons from "react-icons/fa";
import * as aiIcons from "react-icons/ai";
import * as mdIcons from "react-icons/md";
import '../assets/footer.css'
const Footer = () => {
    return (
        <>
            {/*  */}
            <footer className="d-flex  flex-row justify-content-around align-items-center footer-color  " >
                <div className="d-flex flex-column r">
                    <h4 className='text-warning  '> درباره ما</h4>
                    <span className='text-warning size-span '>آدرس سایت</span>
                    <span className='text-warning size-span '>جوایز</span>
                    <span className='text-warning size-span '>نمایندگی ها</span>
                </div>
                <div className="d-flex flex-column r">
                    <h4 className='text-warning  '>راهنما</h4>
                    <span className='text-warning size-span'>اموزش کار با سایت</span>
                    <span className='text-warning  size-span'> نحوه خرید </span>
                    <span className='text-warning size-span '>کار با نمودار ها</span>
                </div>
                <div className="d-flex">
                    <img className='img-fit' src={require('../assets/foot.png')} alt='ss' />
                </div>
            </footer>
            {/*  */}
            <footer className="d-flex  flex-row justify-content-around footer-color  mt10" >
                <div className="d-flex ">
                    <div className="p-2" ><bsIcons.BsTelegram className="text-warning" /></div>
                    <div className="p-2" ><faIcons.FaInstagram className="text-warning" /></div>
                    <div className="p-2" ><aiIcons.AiFillTwitterCircle className="text-warning" /></div>
                </div>
                <div className="d-flex">
                    <div className="text-warning p-2" id="number-dir"><aiIcons.AiOutlineMail className="text-warning" /></div>
                    <div className="text-warning p-2" id="number-dir"><span>gmail@mail.com</span></div>
                </div>
                <div className="d-flex">
                    <div className="text-warning p-2" id="number-dir"><mdIcons.MdCallEnd className="text-warning" /></div>
                    <div className="text-warning p-2" id="number-dir"><span>+00-000-000</span></div>
                </div>
            </footer>
        </>
    )
}
export default Footer