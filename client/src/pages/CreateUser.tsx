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


export const CreateUserPage = () => {
    const { name, email, password, setEmail, setName,setPassword  } = useContext(PersonContext)
    const navigate = useNavigate()

    const nameInput = useRef<HTMLInputElement>(null!)
    const emailInput = useRef<HTMLInputElement>(null!)
    const passwordInput = useRef<HTMLInputElement>(null!)

    const createUser = () => {

        if (nameInput.current.value === "") {
            alert("O input de nome está vazio")
        }
        if (passwordInput.current.value === "" ) {
            alert("O input de senha está vazio")
        }
        if (emailInput.current.value === "") {
            alert("O input de email está vazio")
        } 

        else {
            axios.post('http://localhost:3333/users/create-user', {
                email: emailInput.current.value,
                name: nameInput.current.value,
                password: passwordInput.current.value 
            }).then(
                (response) => {
                    emailInput.current = null!
                    nameInput.current.value = null!
                    passwordInput.current.value = null!
    
                    alert("O usuário foi criado")
                    
                }
            ).catch(
                (response) => {
                    alert("Erro! algo aconteceu")
                }
            )
        }
    }

    return(
         <>
            <GlobalStyles/>
            <Navbar/>
            <ContainerStyles>
                <h1>Deseja criar uma conta?</h1>
                <h2>Coloque suas informações abaixo</h2>
                <InputStyles ref={nameInput} type={"text"} placeholder="Name:"/>
                <InputStyles ref={emailInput} type={"text"} placeholder="E-mail:"/>
                <InputStyles ref={passwordInput} type={"password"} placeholder="Senha:"/>
                <ButtonStyles onClick={createUser}>Criar Conta</ButtonStyles>
                <h3 className="link clicable" onClick={() => {navigate("/login")}}>Já tem conta? Faça login aqui</h3>
            </ContainerStyles>
        </>
    )
}