import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage';

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [userData, setuserData] = useState(null)

   useEffect(() => {
    let {employees,admin} = getLocalStorage();
    setuserData({employees,admin});

   }, [])

    return (
        <AuthContext.Provider value={[userData,setuserData]}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider