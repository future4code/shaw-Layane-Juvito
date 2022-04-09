import React from 'react';
import SideMenu from './components/SideMenu/SideMenu';
import CreatePlaylistPage from './pages/CreatePlaylistPage/CreatePlaylistPage';
import DetailPlaylistPage from './pages/DetailPlaylistPage/DetailPlaylistPage';
import PlaylistsPage from './pages/PlaylistsPage/PlaylistsPage';
import {HomePage} from './pages/HomePage/HomePage';
import { MainContainer, GlobalStyle } from './styled';

export default class App extends React.Component {
  state = {
    currentPage: 'home',
    detailPage:'',
    headers:{
      headers:{
          Authorization: 'layane-bastos-shaw'
      }
  }
  }

  selectPage = () => {
    switch (this.state.currentPage) {
      case 'create':
        return <CreatePlaylistPage headers={this.state.headers} />
      case 'playlist':
        return <PlaylistsPage goToDetailPage = {this.goToDetailPage} headers={this.state.headers} />
      case 'detail':
        return <DetailPlaylistPage headers={this.state.headers} page={this.state.detailPage}/>
      default:
        return <HomePage headers={this.state.headers} changeUser = {this.changeUser} />
    }
  }
  changeUser = (userInfo) => {
    this.setState({headers:{
      headers:{
          Authorization: userInfo
      }
  }})
  }
  goToDetailPage = (page) =>  {
    this.setState({
      currentPage:'detail',
      detailPage:page
    })
  }
  goToCreatePage = () =>  {
    this.setState({currentPage:'create'})
  }
  goToPlaylistsPage = () =>  {
    this.setState({currentPage:'playlist'})
  }
  goToHomePage = () =>  {
    this.setState({currentPage:'home'})
  }

  render() {
    return (
      <MainContainer>
        <GlobalStyle />
        <SideMenu 
          goToDetailPage = {this.goToDetailPage}
          goToCreatePage = {this.goToCreatePage}
          goToPlaylistsPage = {this.goToPlaylistsPage}
          goToHomePage = {this.goToHomePage}

        />
        {this.selectPage()}
      </MainContainer>
    );
  }
}


