import { Dispatch, SetStateAction } from "react";

export interface PersonContextType {
    email: string
    setEmail: Dispatch<SetStateAction<string>>
    name: string
    setName: Dispatch<SetStateAction<string>>
    password: string
    setPassword: Dispatch<SetStateAction<string>>
}

export const temp = {
    email: "",
    setEmail: () => {},
    name: "",
    setName: () => {},
    password: "",
    setPassword: () => {}
}