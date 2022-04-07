import React from 'react';
import CreatePlaylistPage from './pages/CreatePlaylistPage/CreatePlaylistPage';
import DetailPlaylistPage from './pages/DetailPlaylistPage/DetailPlaylistPage';
import PlaylistsPage from './pages/PlaylistsPage/PlaylistsPage';

export default class App extends React.Component {
  state = {
    currentPage: 'create'
  }

  selectPage = () => {
    switch (this.state.currentPage) {
      case 'create':
        return <CreatePlaylistPage />
      case 'playlist':
        return <PlaylistsPage />
      case 'detail':
        return <DetailPlaylistPage
                 id={'3b906ec9-eda2-4f77-9d99-305b958ec443'}/>
      default:
        return <CreatePlaylistPage />
    }
  }

  render() {
    return (
      <div>
        {this.selectPage()}
      </div>
    );
  }
}


