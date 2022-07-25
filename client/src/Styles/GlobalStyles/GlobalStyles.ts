import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #444;
        font-family: Arial, Helvetica, sans-serif;
        color: #fff;
    }
    .clicable {
        &:hover {
            color: chartreuse;
            cursor: pointer;
        }
    }

    .div-to-align {
        display: flex;
        flex-wrap: wrap;
    }

    .link {
        margin: auto;
        margin-top: 20px;
        cursor: pointer;
    }

    .text-to-distance {
        margin-top: 60px;
    }

    .text-to-distance-dois {
        margin-top: 20px;
    }

`