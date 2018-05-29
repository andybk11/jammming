import React from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';


class App extends Component {
     
     constructor(props) {
        super(props);
        this.state={
          searchResults:[], // name , artist , album, id
          playlistName:"Playlist",
          playlistTracks:[]
        }

        this.addTrack = this.addTrack.bind(this); 
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this); 
        this.savePlaylist = this.savePlaylist.bind(this); 
        this.search = this.search.bind(this);       
      }

     


     //Adds a song to the playlist 
      addTrack(track){
        if(this.state.playlistTracks.find(savedTrack => savedTrack.id == track.id)){
          return; 
        }else{
          tracks.push(track);
          this.setState({playlistTracks:tracks});
        }
      }

      //Removes a song from a user's custom playlist
      removeTrack(track){
           this.setState({playlistTracks: this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id)
           });
      }

      //
      updatePlaylistName(name){
          this.setState({playlistName:name});
      }


      savePlaylist(){
            const trackURIs = this.state.playlistTracks.map(track => track.uri);
      }

      search(term){
        
      }

       




  render() {
    return (
      <div>
           <h1>Ja<span className="highlight">mmm</span>ing</h1>
          
          <div className="App">
               //Add a SearchBar component //
               <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
              //Add a SearchResults component 
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
              // Add a Playlist component 
              <Playlist  playlistName={this.state.playlistName
                         playlistTracks={this.state.playlistTracks}}
                         onRemove={this.removeTrack}
                         onNameChange={this.updatePlaylistName}
                         onSave={this.savePlaylist}/>
           </div>
         
           </div>
       </div>
    );
  }
}

export default App;



  
  


  