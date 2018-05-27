import React from 'react';
import './App.css';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends Component {
     
     constructor(props) {
        super(props);
        this.state={
          searchResults:[], // name , artist , album, id
          playlistName:"Playlist",
          playlistTracks:[]
        }

        this.addTrack = this.addTrack.bind(this);          
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




  render() {
    return (
      <div>
           <h1>Ja<span className="highlight">mmm</span>ing</h1>
          
          <div className="App">
               //Add a SearchBar component //
         
          <div className="App-playlist">
              //Add a SearchResults component 
              <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
              // Add a Playlist component 
              <Playlist  playlistName={this.state.playlistName
                         playlistTracks={this.state.playlistTracks}}/>
           </div>
         
           </div>
       </div>
    );
  }
}

export default App;



  
  


  