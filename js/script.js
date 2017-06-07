//// FIREBASE ////

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyCK186U0kJsSqN633VLGvJg7AYPADrmAUI",
  authDomain: "fir-firebase-34fbd.firebaseapp.com",
  databaseURL: "https://fir-firebase-34fbd.firebaseio.com",
  storageBucket: "fir-firebase-34fbd.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// Write to firebase function
function writeUrlHash(hash) {
  firebase.database().ref('url/').set({
    hash: hash
  });
  console.log('write data success');
}

// Listen to firebase function
var listenUrlHash = firebase.database().ref('url/hash');

//// REVEAL ////

// Change the url when slide is changed
Reveal.initialize({
  history: true
});

// Always listening always understanding
listenUrlHash.on('value', function(hashValue) {
  window.location.hash = hashValue.val();
});

// Check access
var form = $('form.login');
var formPlace = $('loginPlace');
var secretTextBox = form.find('input[type=text]');

form.submit(function(e) {
  e.preventDefault();
  var key = secretTextBox.val().trim();
  console.log(key);
  form.hide();
  formPlace.hide();
  if (key === 'tsubasa') {
    // If hash is change -> rewrite firebase
    $(window).on('hashchange', function (){
      writeUrlHash(window.location.hash)
    });
  }
})
