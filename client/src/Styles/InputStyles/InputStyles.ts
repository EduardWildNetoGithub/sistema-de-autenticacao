import styled from "styled-components";

export const InputStyles = styled.input`
    margin-top: 20px;
    height: 60px;
    width: 400px;
    background-color: #333;
    border: solid 3px chartreuse;
    font-size: 2em;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    color: white;

    &:focus {
        outline: 0;
        border: solid 3px #00B01D
    } 

    &::placeholder {
        color: #C0C0C0
    }

`