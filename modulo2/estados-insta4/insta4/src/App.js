import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color:black;
  color:white;

`
const InputsContainer = styled.div`
  display:flex ;
  flex-direction:column ;
  gap:10px;
  padding:10px;
  border: 1px solid black;
  width:300px;
  background-color:rgb(49, 48, 48);
  border-radius:5px ;
  margin-top:10px;
 
  div{
    display:flex;
    align-items:center;
    justify-content:center ;
  }
  label{
    padding-left:10px ;
    font-size:17px;
    font-weight:bold;
  }
  button{
    cursor: pointer;
    padding:10px;
    border:none;
    border-radius:5px;
    width:50%;
    background-color:rgb(119, 238, 119);
    color:blueviolet;
    font-weight:bold;
    font-size:16px;
    outline:none;

    :hover{
      background-color:blueviolet;
      color:rgb(119, 238, 119);
    }
  }
`

const InputBox = styled.input`
  padding: 10px;
  border:none;
  background-color: rgba(130, 14, 238, 0.368);
  font-size:16px;
  box-shadow:1px 1px 1px rgba(197, 230, 197, 0.822);
  border-radius:5px;
  color:white;
  outline:none;
  ::-webkit-input-placeholder{
    color:rgb(119, 238, 119);
    opacity:80%;
    font-weight:bold;
  }
`


class App extends React.Component {
  state = {
    user:"",
    fotoUser:"",
    fotoPost:"",
    texto:"",
    postagens:[
      {
        nomeUsuario:'Paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150',
        textoPostagem:'A vida é bela, nós é que fode ela'
      },
      {
        nomeUsuario:'mina',
        fotoUsuario:'https://picsum.photos/50/49',
        fotoPost:'https://picsum.photos/200/149',
        textoPostagem:'O naruto teve uma vida sofrida sabiam, ele cresceu sozinho, sem os pais...'
      },
      {
        nomeUsuario:'lay',
        fotoUsuario:'https://picsum.photos/50/48',
        fotoPost:'https://picsum.photos/200/148',
        textoPostagem:'Pani no sistema alguém me desconfigurou!! Aonde estão meus olhos de robô?'
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
  onChangetextoPost = (event) =>{
    this.setState({texto:event.target.value})
  }
  onClickPostar = () => {
    let novaPostagem = [...this.state.postagens,
      {
        nomeUsuario:this.state.user,
        fotoUsuario:this.state.fotoUser,
        fotoPost:this.state.fotoPost,
        textoPostagem:this.state.texto

      }];
      this.setState({
        postagens:novaPostagem,
        user:"",
        fotoPost:"",
        fotoUser:"",
        texto:""
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
          textoPostagem={postagem.textoPostagem}
        />
      )
   })
    return (
      
      <MainContainer>
        <InputsContainer>
          <div>
            <h3>Adicionar Postagem</h3>
          </div>
            <label>Identifique-se</label>
            <InputBox onChange={this.onChangeUser} value={this.state.user}
            placeholder={"Insira seu nome"}/>
          
        
            <label>Insira sua foto</label>
            <InputBox  onChange={this.onChangeFoto} value={this.state.fotoUser} 
            placeholder={"Link da foto"}/>
          
        
            <label>Postagem</label>
            <InputBox  onChange={this.onChangetextoPost} value={this.state.texto}
            placeholder={"Sobre o que ta pensando..."} />

            <label>Adicionar foto</label>
            <InputBox  onChange={this.onChangePost} value={this.state.fotoPost}
            placeholder={"Link do post"} />
            <div>
              <button onClick={this.onClickPostar}>Postar</button>
            </div>
        </InputsContainer>
        {renderizanatela}
      </MainContainer>
    );
  }
}

export default App;
