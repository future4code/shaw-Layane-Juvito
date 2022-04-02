import React from 'react';
import styled from 'styled-components'

// Tentando apresentar o comentario abaixo do post 
const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
const ContainerComentario = styled.div`
	display:flex;
	align-items: center;
    padding:10px ;
	p{
		width:80%;
		padding:5px ;
		span{
			font-weight:bold ;
		}
	}

`
export class ComentarioPost extends React.Component{
	
	render(){
		return (
			<ContainerComentario>
				<UserPhoto src={this.props.imagem} alt={'Imagem do usuario'}/>
				<p><span>lay</span> {this.props.comentario}</p>
				<button onClick={()=>this.props.onClickFuncao(this.props.id)}>Excluir</button>
			</ContainerComentario>
		)
	}
}