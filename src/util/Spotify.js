const clientId = '23ac33897b52491480fe52263dd7b832';
const redirectUri = 'http://localhost:3000/';



let accessToken;


const Spotify{
   
   getAccessToken(){
   	
   	if(accessToken){
   		return accessToken;
   	}
     
     const hasAccessToken = window.location.href.match(/access_token=([^&]*)/);
     const hasExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
             
       if(hasAccessToken && hasExpiresIn){
       	 accessToken = hasAccessToken[1];
         const expiresIn = Number(hasExpiresIn[1]);

         window.setTimeout(() => accessToken='' , expiresIn*1000);
         window.history.pushState('Access Token', null, '/');
         return accessToken;
       }else{
       	const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
       }


   }


   search(term){
   	      const accessToken = Spotify.getAccessToken();
   	       return fetch(`https://api.spotify.com/v1/search?type=track&q= ${searchTerm}`, {
                   headers:  {
                         Authorization: `Bearer ${accessToken}`
                        }
         }).then(response => {return response.json();
         }).then(
            jsonResponse => {
            if(!jsonResponse.tracks) return [];
           
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri,
                
            }));
        });

   },
    




}




export default Spotify;


You will be using the Implicit Grant Flow to setup a user's account and make requests. The implicit grant flow returns a user's access token in the URL.