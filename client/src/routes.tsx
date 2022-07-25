import {BrowserRouter, Routes, Route} from "react-router-dom"
import { ChangePasswordPage } from "./pages/ChangePassword"
import { CreateUserPage } from "./pages/CreateUser"
import { HomePage } from "./pages/Home"
import { LoginPage } from "./pages/Login"
import { UserPage } from "./pages/User"

export const MyRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/create-user" element={<CreateUserPage/>}/>
                <Route path="/change-password" element={<ChangePasswordPage/>} />
                <Route path="/user" element={<UserPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

