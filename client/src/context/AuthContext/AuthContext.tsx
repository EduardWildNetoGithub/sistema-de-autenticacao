import { createContext } from "react";
import { useState } from "react";
import { AuthContextType, temp } from "./Types";

export const AuthContext = createContext<AuthContextType>(temp!)

export const AuthContextProvider = ({children}: any) => {
    const [authEmail, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [auth, setAuth] = useState<boolean>(false)

    return(
        <AuthContext.Provider value={{authEmail, setEmail, password, setPassword, auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )

}