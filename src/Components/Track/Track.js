import React from 'react';
import './Track.css';

class Track extends React.Component{
     constructor(props) {
        super(props);
       
        this.addTrack = this.addTrack.bind(this);
       }
        
    
    // Add this.props.track to the playlist.
    addTrack() {
        this.props.onAdd(this.props.track);
    }







    render() {
        return(
            <div className="Track" key={this.props.track.id}>
                
                <div className="Track-information">
                     <h3>{this.props.track.name}</h3>
                     <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                      <a className="Track-action">
                      //+ or - will go here 
                      if(this.props.onAdd){
                        return<a className='Track-action' onClick={this.addTrack}>+</a>
                      }
                      </a>
                </div>
        );
    }
}

export default Track;




