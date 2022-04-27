import React from "react";
import styled from "styled-components";

const Border = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const LoadContainer = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
   
`


export default class Loader extends React.Component{
    render(){
        return(
            <Border>
                <LoadContainer>
                    <img 
                        src={'https://louisville.edu/advising/testing/index_videolb/loading.gif/image_preview'} 
                        alt="Loading Forever 12years Later GIF - Loading Forever 12years Later GIFs"
                    />
                </LoadContainer>
            </Border>
        )
    }
}