import React from 'react';
import SideMenu from './components/SideMenu/SideMenu';
import CreatePlaylistPage from './pages/CreatePlaylistPage/CreatePlaylistPage';
import DetailPlaylistPage from './pages/DetailPlaylistPage/DetailPlaylistPage';
import PlaylistsPage from './pages/PlaylistsPage/PlaylistsPage';
import { MainContainer, GlobalStyle } from './styled';

export default class App extends React.Component {
  state = {
    currentPage: 'create',
    detailPageId:''
  }

  selectPage = () => {
    switch (this.state.currentPage) {
      case 'create':
        return <CreatePlaylistPage />
      case 'playlist':
        return <PlaylistsPage goToDetailPage = {this.goToDetailPage}/>
      case 'detail':
        return <DetailPlaylistPage
                 id={this.state.detailPageId}/>
      default:
        return <CreatePlaylistPage />
    }
  }
  goToDetailPage = (id) =>  {
    this.setState({
      currentPage:'detail',
      detailPageId:id
    })
  }
  goToCreatePage = () =>  {
    this.setState({currentPage:'create'})
  }
  goToPlaylistsPage = () =>  {
    this.setState({currentPage:'playlist'})
  }
  // goToSearchPage = () =>  {
  //   this.setState({currentPage:'detail'})
  // }

  render() {
    return (
      <MainContainer>
        <GlobalStyle />
        <SideMenu 
          goToDetailPage = {this.goToDetailPage}
          goToCreatePage = {this.goToCreatePage}
          goToPlaylistsPage = {this.goToPlaylistsPage}

        />
        {this.selectPage()}
      </MainContainer>
    );
  }
}


