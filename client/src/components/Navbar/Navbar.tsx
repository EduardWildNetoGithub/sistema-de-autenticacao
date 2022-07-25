import { AiFillHome, FaUserPlus, GiPadlock, IoPersonCircleOutline, BsKey } from "react-icons/all"
import { useNavigate } from "react-router-dom"
import { NavbarStyles } from "../../Styles/NavbarStyles/NavbarStyles"


export const Navbar = ()  => {
    const navigate = useNavigate()

    return(
        <NavbarStyles>
            <h1 className="clicable" onClick={() => {navigate("/")}}>Sistema De Login</h1>
            <div>
                <button className="clicable" onClick={() => {navigate("/")}}><AiFillHome/></button>
                <button className="clicable" onClick={() => {navigate("/login")}}><GiPadlock/></button>
                <button className="clicable" onClick={() => {navigate("/create-user")}}><FaUserPlus/></button>
                <button className="clicable" onClick={() => {navigate("/change-password")}}><BsKey/></button>
                <button className="clicable" onClick={() => {navigate("/user")}}><IoPersonCircleOutline/></button>
            </div>
        </NavbarStyles>
    )
}