import { Dispatch, SetStateAction } from "react";

export interface AuthContextType {
    authEmail: string
    setEmail: Dispatch<SetStateAction<string>>
    password: string
    setPassword: Dispatch<SetStateAction<string>>
    auth: boolean
    setAuth: Dispatch<SetStateAction<boolean>>
}

export const temp = {
    authEmail: "",
    setEmail: () => {},
    password: "",
    setPassword: () => {},
    auth: false,
    setAuth: () => {},
}