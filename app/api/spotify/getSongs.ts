const CLIENT_ID = process.env.API_CLIENT;
const CLIENT_SECRET = process.env.API_SECRET;



async function getToken() {
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    var token = await fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data => {return data.access_token})
    return token;
}

async function getSongs(id: String) {
    var doc: { _id: any; name: any; artist: any; popularity: any; image: any; }[]  = [];
    var songs;
    var accessToken = await getToken();
    var searchParameters = {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
      }
    }

  var songs = await fetch('https://api.spotify.com/v1/playlists/' + id + '/tracks' + '?market=US&limit=50', searchParameters)
  .then(response => response.json())
  .then(data => {console.log(data);return data.items})

  songs.forEach((song: { track: { id: any; name: any; artists: { name: any; }[]; popularity: any; album: { images: { url: any; }[]; }; }; }) => {
      doc.push({
          _id: song.track.id,
          name: song.track.name,
          artist: song.track.artists[0].name,
          popularity: song.track.popularity,
          image: song.track.album.images[0].url
      });
    });

  return doc;
};

export default getSongs;
