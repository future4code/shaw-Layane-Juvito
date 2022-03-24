import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 90%;
    margin-right: 5px;
`

// componente de comentario que será incorporado ao post
export class SecaoComentario extends Component {
	state = {
		texto:"",
		comentado:false,
	}

	onChangeComentario = (event) => {
		this.setState({texto:event.target.value})
		console.log(this.state.texto)
	}
	onClickCOmentario = () =>{
		this.setState({comentado:!this.comentado})
		this.setState({id:this.id+1})
		localStorage.setItem(`texto`, this.state.texto);
		localStorage.setItem(`comentado`, this.state.comentado);
		this.props.aoEnviar()
	}


	render() {
		return <CommentContainer>
				<InputComentario
					placeholder={'Comentário'}
					value={this.state.texto}
					onChange={this.onChangeComentario}
				/>
				<button onClick={this.onClickCOmentario}>Enviar</button>
		</CommentContainer>
	}
}
