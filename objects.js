const playlist = {Kanye:'Yikes'};

const updatePlaylist = function(lsit,artist,song){
  return Object.assign({},list,{ [artist]:song })
}

const removeFromPlaylist = function(list,artist){
  delete list.artist;
}