import "../App.css";
import React from "react";
import styled from "styled-components";

const BoxPaginaPrincipal = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: start; 
    width:100%;
    gap: 2px;
    color: white;
    :hover{
        opacity: 60%;
    }
    > img {
    width: 100%;
    height: 200px;}
`
class CardVideo extends React.Component {
    render() {
        return (
            <BoxPaginaPrincipal onClick={this.props.funcao}>
                    <img src={this.props.link} alt="" />
                    <h4>{this.props.titulo}</h4>
                    <p>Descrição do vídeo vem aqui</p>
            </BoxPaginaPrincipal>
        )
    }
}
export default CardVideo