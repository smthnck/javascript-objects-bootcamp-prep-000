const playlist = {Kanye:'Yikes'};

var updatePlaylist2 = function(list,artist,song){
  return Object.assign({},list,{ [artist]:song })
}

var removeFromPlaylist2 = function(list,artist){
  delete list.artist;
}