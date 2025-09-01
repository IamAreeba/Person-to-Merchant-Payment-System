
import { createContext, useContext, useState } from "react";


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    // Getting Token
    const [token, setToken] = useState(localStorage.getItem("token"))

    // Setting Token
    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken)
        setToken(serverToken);   // ✅ now React state updates instantly
    }


    // If we get the token then isLoggedIn is true otherwise its false
    let isLoggedIn = !!token
    console.log("isLoggedIn Value:", isLoggedIn)

    // Tackling the logout functionality
    const LogoutUser = () => {
        setToken("")
        // Removing Token
        return localStorage.removeItem("token")
    }

    return <AuthContext.Provider  value={ { storeTokenInLS, LogoutUser, isLoggedIn } } >
        {children}
    </AuthContext.Provider>
}


// 
export const useAuth = () => {
    const authContextValue = useContext(AuthContext)
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider")
    }
    return authContextValue
}