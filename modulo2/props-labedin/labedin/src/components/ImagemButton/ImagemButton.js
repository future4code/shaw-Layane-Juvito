import React from 'react';
import styledComponents from 'styled-components';

const ImagemButtonContainer=styledComponents.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    > img {
        width: 30px;
        margin-right: 10px;
    }
`
function ImagemButton(props) {
    return (
        <ImagemButtonContainer className="image-button-container">
            <img src={ props.imagem } alt =" "/>
            <p>{ props.texto }</p>
        </ImagemButtonContainer>

    )
}

export default ImagemButton;