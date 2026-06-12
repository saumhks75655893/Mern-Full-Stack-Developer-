import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  // localStorage.clear();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin });
  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
