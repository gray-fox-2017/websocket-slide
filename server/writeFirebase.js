const firebase = require('firebase');

// Initialize Firebase
 var config = {
   apiKey: "AIzaSyDHhE9Amy6SGy7B2vc3nnH2Itrynn6kS7o",
   authDomain: "realtime1project.firebaseapp.com",
   databaseURL: "https://realtime1project.firebaseio.com",
   projectId: "realtime1project",
   storageBucket: "realtime1project.appspot.com",
   messagingSenderId: "291320917249"
 };
 firebase.initializeApp(config);

 //Get a reference to the database service
 var database = firebase.database();

 writeUserData('0001', 'derikurniawan', 'derikurniawan@example.com', '123456', 'deri kurniawan');

 function writeUserData(userId, name, email, password, name){
   firebase.database().ref('users/'+userId).set({
     username: name,
     email: email,
     password: password,
     name: name
   })
 }

 console.log('firebase is sucess to write data');
