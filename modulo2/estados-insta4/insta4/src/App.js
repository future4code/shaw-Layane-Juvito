import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    user:"",
    fotoUser:"",
    fotoPost:"",
    postagens:[
      {
        nomeUsuario:'Paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'mina',
        fotoUsuario:'https://picsum.photos/50/49',
        fotoPost:'https://picsum.photos/200/149'
      },
      {
        nomeUsuario:'lay',
        fotoUsuario:'https://picsum.photos/50/48',
        fotoPost:'https://picsum.photos/200/148'
      }
    ]
  }
  onChangeUser = (event) =>{
    this.setState({user:event.target.value})
  }
  onChangeFoto = (event) =>{
    this.setState({fotoUser:event.target.value})
  }
  onChangePost = (event) =>{
    this.setState({fotoPost:event.target.value})
  }
  onClickPostar = () => {
    let novaPostagem = [...this.state.postagens,
      {
        nomeUsuario:this.state.user,
        fotoUsuario:this.state.fotoUser,
        fotoPost:this.state.fotoPost
      }];
      this.setState({
        postagens:novaPostagem,
        user:"",
        fotoPost:"",
        fotoUser:""
      })
  }
  render() {
   const renderizanatela = this.state.postagens.map((postagem,index)=>{
      return(
        <Post
          key={index}
          id={index}
          nomeUsuario={postagem.nomeUsuario}
          fotoUsuario={postagem.fotoUsuario}
          fotoPost={postagem.fotoPost}
        />
      )
   })
    return (
      
      <MainContainer>
        <div>
          <div>
            <label>Identifique-se</label>
            <input onChange={this.onChangeUser} value={this.state.user}/>
          </div>
          <div>
            <label>Insira sua foto</label>
            <input  onChange={this.onChangeFoto} value={this.state.fotoUser} />
          </div>
          <div>
            <label>Insira a postagem</label>
            <input  onChange={this.onChangePost} value={this.state.fotoPost} />
          </div>
        </div>
        <button onClick={this.onClickPostar}>Postar</button>
        {renderizanatela}
      </MainContainer>
    );
  }
}

export default App;
