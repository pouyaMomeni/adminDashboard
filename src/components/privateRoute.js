import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const PrivateRouter = ({ children }) => {
    let status = useSelector((state) => state.users.login)
    return status ? children : <Navigate to='/' />
}

export default PrivateRouter