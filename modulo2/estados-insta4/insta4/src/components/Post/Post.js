import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvoPreto from '../../img/turned_in_black.svg'
import iconeSalvoBranco from '../../img/turned_in_not_black.svg'
import iconeCompartilhar from '../../img/launch_black.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'
import iconeFacebook from '../../img/icons8-facebook.svg'
import iconeInstagram from '../../img/icons8-instagram.svg'
import iconeTwitter from '../../img/icons8-twitter-circled.svg'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-top:10px ;
  background-color:white;
  color: black;
  border-radius:5px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`
const PostTexto = styled.p`
  text-align:justify;
  padding: 0 10px;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    comentado:false,
    numeroComentarios: 0,
    salvo:false,
    compartilhar: false,
    listaComentarios:[]
  }

  onClickCurtida = () => {
    this.setState({
      curtido:!this.state.curtido,
    })
    if(this.state.curtido){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas-1
      }) 
    }else{
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas+1
      })
    }
  }
 
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
      compartilhar: false,
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      // comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      comentado:true,
    })
  }
  onClickSalvo = () => {
    this.setState({
      salvo:!this.state.salvo
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhar:!this.state.compartilhar,
      comentando:false
    })
  }
  onclickExcluirComentario = () =>{
    this.setState({
      numeroComentarios: this.state.numeroComentarios - 1,

    })
  }
  render() {
  
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }
    let iconeSalvo

    if(this.state.salvo) {
      iconeSalvo = iconeSalvoPreto
    } else {
      iconeSalvo = iconeSalvoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario 
        aoEnviar={this.aoEnviarComentario}
        listaComentarios = {this.state.listaComentarios}
        comentado={this.state.comentado}
        imagem={this.props.fotoUsuario}
        nome={this.props.nomeUsuario}
        aoExcluir={this.onclickExcluirComentario}
      />
    }
    let componenteCompartilhar

    if(this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhar
      icone1={iconeFacebook}
      icone2={iconeInstagram}
      icone3={iconeTwitter}
      onClickCompartilhar={this.onClickCompartilhar}
      mensagem={this.mensagemCompartilhar}
      />
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>
      <PostTexto>
        {this.props.textoPostagem}
      </PostTexto>
      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
          valorContador={""}
        />
        <IconeComContador
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvo}
          valorContador={""}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhar}
    </PostContainer>
  }
}

export default Post