import React from "react";
import "../App.css";
import styled from "styled-components";

const ListaMenu = styled.li`
    cursor: pointer;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 5px;
    font-size: 1.1rem;
    :hover{
        background-color: rgba(211, 205, 205, 0.075);
    }
`


export function BotaoMenu(props){
    return(
        <div >
            <ListaMenu className="botoes-meunu-vertical">
                 {props.icon} {props.texto}
            </ListaMenu>
        </div>
    )
}