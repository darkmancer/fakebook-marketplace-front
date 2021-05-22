import { createContext } from 'react'
import { useState } from 'react'
import { getToken } from '../services/localStorageService'
import jwtDecode from 'jwt-decode'
import { useEffect } from 'react'
export const AuthContext = createContext()

function AuthContextProvider({ children }) {
  //  const [state, dispatch] = useReducer(reducer, initialState, init)
  const [isAuthenticated, setIsAuthenticated] = useState(getToken())
  const [user, setUser] = useState()

 

  function DecodeToken() {
    if (isAuthenticated) {
      const dktoken = jwtDecode(getToken())
      return setUser(dktoken)
    }
  }
  useEffect(() => {
    DecodeToken()
  }, [])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
