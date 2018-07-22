const playlist = {Kanye:'Yikes'};

const updatePlaylist = function(list,artist,song){
  return Object.assign({},list,{ [artist]:song })
}

const removeFromPlaylist = function(list,artist){
  delete list.artist;
}