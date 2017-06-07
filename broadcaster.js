var config = {
  apiKey: "AIzaSyDZX_qPJUCxqY3Qp7kygynERDkFgI0ephE",
  authDomain: "fir-project-4bcfc.firebaseapp.com",
  databaseURL: "https://fir-project-4bcfc.firebaseio.com",
  projectId: "fir-project-4bcfc",
  storageBucket: "fir-project-4bcfc.appspot.com",
  messagingSenderId: "670786535968"
};
firebase.initializeApp(config);
var database = firebase.database();

var secret = 'hello';
var inputSecret

function sendKey() {
  inputSecret = $('#key').val()
  if(inputSecret == secret){
    listenData.on('value', function(hash_data) {
      console.log('success');
      $('.login').hide()
      window.location.hash = hash_data.val().hash
    })
  }
}

function windowHash(hash) {
  firebase.database().ref('websocket-slide/hash').set({
    hash: hash
  });
  console.log('write data success');
}


$(window).on('hashchange', function(){
  var hash = window.location.hash;
  windowHash(hash)
});


var listenData = firebase.database().ref('websocket-slide/hash');
