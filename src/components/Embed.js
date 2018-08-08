import SC from 'soundcloud'

window.onload = function () {SC.initialize({
  client_id: 'a281614d7f34dc30b665dfcaa3ed7505'
});


// stream track id 293
SC.stream('/tracks/293').then(function(player){
  player.play().then(function(){
    console.log('Playback started!');
  }).catch(function(e){
    console.error('Playback rejected. Try calling play() from a user interaction.', e);
  });
});
};
