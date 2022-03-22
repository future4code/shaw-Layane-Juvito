import "../App.css";
import React from "react";
import styled from "styled-components";

const BoxPaginaPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width:24.2% ;
    gap: 2px;
    color: white;
    :hover{
        opacity: 60%;
    }
    > img {
    width: 100%;
    height: 200px;}
`
export function CardVideo(props) {
    
    return (
        <BoxPaginaPrincipal onClick={props.funcao}>
                <img src={props.link} alt="" />
                <h4>{props.titulo}</h4>
                <p>Descrição do vídeo vem aqui</p>
        </BoxPaginaPrincipal>
    )
}