import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [LoginUser, setLoginUser] = useState(null)
    const [userData, setuserData] = useState(null)

   useEffect(() => {
    let {employees,admin,loggedInUSer} = getLocalStorage();
    setuserData({employees,admin});
setLoginUser(loggedInUSer)
   }, [])

    return (
        <AuthContext.Provider value={[userData,setuserData,LoginUser,setLoginUser]}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider