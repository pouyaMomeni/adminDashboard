import React from 'react'
import '../assets/notFound.css'
import * as bi from 'react-icons/bi'

function NotFound() {
    return (
        <div className='d-flex justify-content-center align-itemes-center hight-notFound'>
            <div className='d-flex flex-column justify-content-center align-itemes-center'>
                <h1><bi.BiError className='text-danger mx-3' />همچین صفحه ای وجود ندارد</h1>
            </div>

        </div>
    )
}

export default NotFound