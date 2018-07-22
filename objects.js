const playlist = {Kanye:'Yikes'};

const updatePlaylist = function(playlist,artist,song){
  return Object.assign({},playlist,{ [artist]:song })
}
