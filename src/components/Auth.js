import SC from 'soundcloud'

SC.initialize({
  client_id: 'a281614d7f34dc30b665dfcaa3ed7505',
  redirect_uri: 'http://www.favesound.de/callback'
});

// initiate auth popup
SC.connect().then(function() {
  return SC.get('/me');
}).then(function(me) {
  alert('Hello, ' + me.username);
});
