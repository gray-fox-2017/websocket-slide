// var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyBPFDXYZmVCMqqT3PKnLR-1IG22aG6etBI",
    authDomain: "ppt-slider.firebaseapp.com",
    databaseURL: "https://ppt-slider.firebaseio.com",
    projectId: "ppt-slider",
    storageBucket: "ppt-slider.appspot.com"
  };
firebase.initializeApp(config);

function writeUrl(hash) {
  firebase.database().ref('urls/').set({
    hash:hash
  });
  console.log('url data sukses');
}

var listenerUrl = firebase.database().ref('urls/');
listenerUrl.on('value', function(url) {
  // updateStarCount(postElement, data.val());
  var data = url.val()
  window.location.hash = data.hash
});

$(window).on('hashchange', function(){
  writeUrl(window.location.hash)
});
