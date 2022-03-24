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
export function ComentarioPost (props){
	return (
		<ContainerComentario>
			<UserPhoto src={'https://picsum.photos/50/48'} alt={'Imagem do usuario'}/>
			<p><span>lay</span> {props.comentario}</p>
		</ContainerComentario>
	)
}