import { useContext } from "react";
import { PersonContext } from "../context/PersonContext/PersonContext";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { GlobalStyles } from "../Styles/GlobalStyles/GlobalStyles";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { ContainerStyles } from "../Styles/ContainerStyles/ContainerStyles";
import { InputStyles } from "../Styles/InputStyles/InputStyles";
import { ButtonStyles } from "../Styles/ButtonStyles/ButtonStyles";

export const UserPage = () => {
    const navigate = useNavigate()
    const person = useContext(PersonContext)
    const auth = useContext(AuthContext)

    return(
        <>
            <GlobalStyles/>
            <Navbar/>
            <ContainerStyles>
                {auth.auth === true ? (
                    <>
                        <h1>Olá, aqui estão suas informações </h1>
                        <h2 className="text-to-distance">E-mail: {person.email}</h2>
                        <h2>Nome: {person.name}</h2>
                        <h3 className="text-to-distance-dois link clicable" onClick={() => {navigate("/change-password")}}>Deseja mudar sua senha? clique aqui</h3>
                    </>
                ): (
                    <>
                        <h1>Olá, você não está autenticado</h1> 
                        <h2 className="link text-to-distance-dois clicable" onClick={() => {navigate("/login")}}>Clicque aqui para se autenticar </h2>   
                    </>
                )}
            </ContainerStyles>
        </>
    )
}