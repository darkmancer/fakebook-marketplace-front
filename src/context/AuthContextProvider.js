import { createContext } from "react";
import { useState } from "react";
import { getToken } from "../services/localStorageService";
export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  //  const [state, dispatch] = useReducer(reducer, initialState, init)
  const [isAuthenticated, setIsAuthenticated] = useState(getToken());

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
