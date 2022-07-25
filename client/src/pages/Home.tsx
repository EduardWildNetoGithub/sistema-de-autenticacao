import { useContext } from "react";
import { PersonContext } from "../context/PersonContext/PersonContext";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { GlobalStyles } from "../Styles/GlobalStyles/GlobalStyles";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { ContainerStyles } from "../Styles/ContainerStyles/ContainerStyles";


export const HomePage = () => {
    const navigate = useNavigate()

    let { auth } = useContext(AuthContext)
    let { name } = useContext(PersonContext)
    return (
        <>
            <GlobalStyles/>
            <Navbar/>
            <ContainerStyles>
                { auth == true ? (
                    <>
                        <h1>Olá {name} como vai ?</h1>
                        <h2 className="clicable" onClick={() => {navigate("/user")}}>Clique aqui para ver suas informações</h2>
                    </>   
                ): (
                    <>
                        <h1>Você não está autenticado</h1>
                        <h2 className="clicable" onClick={() => {navigate("/login")}}>Clique aqui para se autenticar</h2>
                    </> 
                )}
            </ContainerStyles>
        </>
    )
} 