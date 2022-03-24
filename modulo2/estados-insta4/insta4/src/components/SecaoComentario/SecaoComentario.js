import React, {Component} from 'react'
import styled from 'styled-components'
import { ComentarioPost } from '../ComentarioPost/ComentarioPost'

const CommentContainer = styled.div`
    display: flex;
	flex-direction:column ;
    justify-content: center;
    padding: 5px;
	div{
		display:flex;
		justify-content: center;
    	padding: 5px;
	}
`

const InputComentario = styled.input`
    width: 90%;
    margin-right: 5px;
`
// componente de comentario que será incorporado ao post
export class SecaoComentario extends Component {
	state = {
		texto:"",
	}

	onChangeComentario = (event) => {
		this.setState({texto:event.target.value})
		console.log(this.state.texto)
	}
	onClickComentario = () =>{
		this.props.listaComentarios.push(this.state.texto)
		console.log(this.props.listaComentarios)
		this.setState({
			comentado:!this.state.comentado})
		this.props.aoEnviar()

	}


	render() {
		
		let renderLista = this.props.listaComentarios.map((comentario,index)=>{
			return (
				<ComentarioPost 
					key={index}
					imagem={this.props.imagem}
					comentario={comentario} 
					nome={this.props.nome}
				/>
			)
		})
		
		
		return <CommentContainer>
			<div>
				<InputComentario
					placeholder={'Comentário'}
					value={this.state.texto}
					onChange={this.onChangeComentario}
				/>
				<button onClick={this.onClickComentario}>Enviar</button>
			</div>
			{renderLista}
		</CommentContainer>
	}
}
