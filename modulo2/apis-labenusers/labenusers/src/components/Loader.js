import React from "react";
import styled from "styled-components";

const Border = styled.div`
    border-radius:15px;
    border: solid 2px transparent;
    background-image: linear-gradient(white, white), linear-gradient(45deg,orange,rgb(228, 60, 161),blueviolet);
    background-origin: border-box;
    background-clip: content-box, border-box;
    height: 50%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 90%;
        height: 70%;
    }
`
const LoadContainer = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    width: 50%;
    
`
export default class Loader extends React.Component{
    render(){
        return(
            <Border>
                <LoadContainer>
                    <img 
                        src="https://c.tenor.com/gJLmlIn6EvEAAAAM/loading-gif.gif" 
                        alt="Loading Forever 12years Later GIF - Loading Forever 12years Later GIFs"
                    />
                </LoadContainer>
            </Border>
        )
    }
}