import React from 'react';
import styled from 'styled-components';

const ContainerCardPequeno = styled.div`
    display:flex ;
    align-items:center ;
    gap: 5px;
    border: 1px solid black ;
    padding:5px;
    margin-top:10px;
    
`
function CardPequeno(props) {
    return (
        <ContainerCardPequeno>
            { props.icon }
            <h4>{ props.nome }</h4>
            <p>{ props.descricao }</p>
        </ContainerCardPequeno>
    )
}

export default CardPequeno;