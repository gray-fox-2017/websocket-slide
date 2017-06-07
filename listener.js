var firebase = require('firebase')

var config = {
  apiKey: "AIzaSyDZX_qPJUCxqY3Qp7kygynERDkFgI0ephE",
  authDomain: "fir-project-4bcfc.firebaseapp.com",
  databaseURL: "https://fir-project-4bcfc.firebaseio.com",
  projectId: "fir-project-4bcfc",
  storageBucket: "fir-project-4bcfc.appspot.com",
  messagingSenderId: "670786535968"
};
firebase.initializeApp(config);

// var database = firebase.database();
//
// var listenData = firebase.database().ref('websocket-slide/hash');
// listenData.on('value', function(hash_data) {
//   console.log(hash_data.val())
// })
