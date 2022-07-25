import styled from "styled-components";


export const NavbarStyles = styled.div`
    width: auto;
    height: 80px;
    background-color: #222;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 20px;
    z-index: 99999;
    h1 {
        font-size: 40px;
    }
    button {
        background-color: #222;
        border: none;
        font-size: 25px;
        color: #fff;
        margin-left: 20px ;
        margin-right: 20px;
        cursor: pointer;
    }
`