import { useState, createContext, useContext, useEffect  } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { PersonContextType, temp } from "./Types";


export const PersonContext = createContext<PersonContextType>(temp!)


export const PersonContextProvider = ({children}: any) => {
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")


    return (
        <PersonContext.Provider value={{email, setEmail, name, setName, password, setPassword}}>
            {children}
        </PersonContext.Provider>
    )
} 