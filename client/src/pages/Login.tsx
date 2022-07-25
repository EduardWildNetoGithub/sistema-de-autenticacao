import { useContext, useEffect, useRef, useState } from "react";
import { PersonContext } from "../context/PersonContext/PersonContext";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { GlobalStyles } from "../Styles/GlobalStyles/GlobalStyles";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { ContainerStyles } from "../Styles/ContainerStyles/ContainerStyles";
import { InputStyles } from "../Styles/InputStyles/InputStyles";
import { ButtonStyles } from "../Styles/ButtonStyles/ButtonStyles";
import axios from "axios";

// alert

export const LoginPage = () => {
    const navigate = useNavigate()

    const auth = useContext(AuthContext)
    const person = useContext(PersonContext)


    const emailInput = useRef<HTMLInputElement>(null!)
    const passwordInput = useRef<HTMLInputElement>(null!)

    const authenticate = () => {

        console.log(emailInput.current)

        if (emailInput.current.value == "") {
           alert("O input de nome está vazio")
        }
        if (passwordInput.current.value == "" ) {
        }
        else {
            axios.post('http://localhost:3333/users/get-user', {
                email: emailInput.current.value,
                password: passwordInput.current.value
                
            }).then(
                function(response) {
                    console.log(response)
                    person.setEmail(response.data.email)
                    person.setName(response.data.name)
                    auth.setAuth(true)
                    navigate("/user")
                }  
            ).catch(
                function(response) {
                    console.log(response)
                    emailInput.current.value = null!
                    passwordInput.current.value = null!
                }
            )
        }
    }

    const logout = () => {
        auth.setAuth(false)
        person.setEmail(null!)
        person.setName(null!)
        person.setPassword(null!)
    }

    return(
        <>
            <GlobalStyles/>
            <Navbar/>
            <ContainerStyles>
                {auth.auth == true ? (
                    <>
                        <h1>Olá {person.name}, você já está logado</h1>
                        <h2 className="link clicable" onClick={() => {navigate("/user")}}>Clique aqui para ver suas informações</h2>
                        <h2 className="clicable" onClick={() => {logout()}}>Deslogar</h2>
                    </>
                ): (
                    <>
                        <h1>Você não está logado, faça login abaixo</h1>
                        <InputStyles ref={emailInput}  placeholder="Email:" type={"text"}/>
                        <InputStyles ref={passwordInput} placeholder="Senha:" type={"password"}/> 
                        <ButtonStyles onClick={() => authenticate()}>Fazer Login</ButtonStyles>
                        <h3 className="link clicable" onClick={() => {navigate("/create-user")}}>Não tem conta? Clique aqui para criá-la</h3>
                        <h3 className="text-to-distance-dois link clicable" onClick={() => {navigate("/change-password")}}>Esqueceu sua senha? clique aqui para muda-la</h3>
                    </>
                )}
            </ContainerStyles>
        </>
    )
}