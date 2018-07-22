const playlist = {Kanye:'Yikes'};

const updatePlaylist = function(playlist,artist,song){
  Object.assign({},playlist,{[artist]:'song'})
}
