import styled from "styled-components";

export const ButtonStyles = styled.button`
    width: 400px;
    height: 60px;
    background-color: chartreuse;
    margin-top: 20px;
    border: none;
    border-radius: 10px;
    font-size: 2.5em;
    color: #333;
    cursor: pointer;
    &:hover {
        border: solid 3px chartreuse;
        background-color: #333;
        color: chartreuse;
    }
`