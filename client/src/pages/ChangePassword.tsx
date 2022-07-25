import { useContext, useRef } from "react";
import { PersonContext } from "../context/PersonContext/PersonContext";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { GlobalStyles } from "../Styles/GlobalStyles/GlobalStyles";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { ContainerStyles } from "../Styles/ContainerStyles/ContainerStyles";
import { InputStyles } from "../Styles/InputStyles/InputStyles";
import { ButtonStyles } from "../Styles/ButtonStyles/ButtonStyles";
import axios from "axios";


export const ChangePasswordPage = () => {
    const auth = useContext(AuthContext)
    const person = useContext(PersonContext)

    const changePassword = () => {
        if (auth.auth === true ) {
            axios.post('http://localhost:3333/users/change-password', {
            email: person.email ,
            password: passwordInput.current.value  
            }).then(
                (response) => {
                    alert("A senha foi mudada")
                }
            ).catch(
                (response) => {
                    alert("Erro! algo aconteceu o")
                }
            )
        } else {
            axios.post('http://localhost:3333/users/change-password', {
            email: emailInput.current.value,
            password: passwordInput.current.value  
            }).then(
                (response) => {
                    alert("A senha foi mudada")
                }
            ).catch(
                (response) => {
                    alert("Erro! algo aconteceu")
                }
            )
        }

    }  

    const emailInput = useRef<HTMLInputElement>(null!)
    const passwordInput = useRef<HTMLInputElement>(null!)

    return(
        <>
            <GlobalStyles/>
            <Navbar/>
            <ContainerStyles>
                <h1>Olá, coloque as informações abaixo para mudar sua senha</h1>
                 { auth.auth === true ? (
                    <>
                        <InputStyles ref={passwordInput} type={"text"} placeholder="Nava senha:"/>
                        <ButtonStyles onClick={() => {changePassword()}}>Mudar Senha</ButtonStyles>
                    </>
                )
                : (
                    <>
                        <InputStyles ref={emailInput} type={"text"} placeholder="E-mail:"/>
                        <InputStyles ref={passwordInput} type={"text"} placeholder="Nova senha:"/>
                        <ButtonStyles onClick={() => {changePassword()}}>Mudar Senha</ButtonStyles>
                    </>
                ) }
            </ContainerStyles>
        </>
    )
}

// //const changePassword = () => {
//     if (auth.auth === true ) {
//         axios.post('http://localhost:3333/users/change-password', {
//         email: auth.authEmail ,
//         password: passwordInput.current.value  
//         }).then(
//             (response) => {
//                 alert("A senha foi mudada")
//             }
//         ).catch(
//             (response) => {
//                 alert("Erro! algo aconteceu")
//             }
//         )
//     } else {
//         axios.post('http://localhost:3333/users/change-password', {
//         email: emailInput.current.value,
//         password: passwordInput.current.value  
//         }).then(
//             (response) => {
//                 alert("A senha foi mudada")
//             }
//         ).catch(
//             (response) => {
//                 alert("Erro! algo aconteceu")
//             }
//         )
//     }

// }  