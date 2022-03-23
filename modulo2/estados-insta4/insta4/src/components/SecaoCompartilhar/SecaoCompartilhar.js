import React from 'react'
import styled from 'styled-components'


const CompartilharContainer = styled.div`
    display:flex;
    flex-direction:column ;
    align-items:center;
    justify-content:center ;
    
`
const OpcoesContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center ;

`

export class SecaoCompartilhar extends React.Component{
    state={
        mensagem:""
    }
    onChangeArea = (event) =>{
        this.setState({
            mensagem:event.target.value
        })
    }
    onClickFace = ()=>{
        this.props.onClickCompartilhar()
        console.log("Post compartilhado no Facebook com a mensagem: ", this.state.mensagem)
    }
    onClickInsta = ()=>{
        this.props.onClickCompartilhar()
        console.log("Post compartilhado no Instagram com a mensagem: ", this.state.mensagem)
    }
    onClickTwitter = ()=>{
        this.props.onClickCompartilhar()
        console.log("Post compartilhado no Twitter com a mensagem: ", this.state.mensagem)
    }
    render(){
        return(
            <CompartilharContainer>
                <div>
                    <h4>Mensagem:</h4>
                    <input value={this.props.mensagem} onChange={this.onChangeArea}></input>
                </div>
                <OpcoesContainer>
                    <h4>Compartilhar com:</h4>
                    <img 
                        src={this.props.icone1} 
                        onClick={this.onClickFace}
                        alt={"facebook"} 
                    />
                    
                    <img 
                        src={this.props.icone2}
                        onClick={this.onClickInsta}
                        alt={"Instagram"}
                    />

                    <img
                        src={this.props.icone3}
                        onClick={this.onClickTwitter}
                        alt={"Twitter"}
                    />
                </OpcoesContainer>
                
            </CompartilharContainer>
        )
    }
        
}