import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    gap:10px;
    border:1px solid black ;
    padding:5px;
    margin-top: 10px ;
    div div{
        display:flex;
        gap: 5px ;
    }
    img{
        width: 70px;
    }
`
function Formacao(props){
    return (
        <Container>
            <img src={props.logo} alt= " " />
            <div>
                <div>
                    <h4>Instituição:</h4>
                    <p>{props.instituicao}</p>
                </div>
                <div>
                    <h4>Curso:</h4>
                    <p>{props.curso}</p>
                </div>
                <div>
                    <p>{props.duracao}</p>  
                </div>
            </div>
        </Container>
    )
}

export default Formacao;