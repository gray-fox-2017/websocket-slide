
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

function writeUserData(slideId, slide){
  database.ref('slide/'+slideId).set({
    index_slide: slide
  });
  console.log('firebase data is seved');
}

var app = new Vue({
  el:'#app',
  data: {
    index_slide: 0,
    index: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
  },
  methods: {
    nextslide(){
      var slide = this.index.length;
      if(this.index_slide >= slide - 1){
        this.index_slide  = slide - 1
      } else {
        this.index_slide += 1
      }
      writeUserData('001', this.index_slide);
      console.log(this.index_slide);
    },
    previousslide(){
      if(this.index_slide > 0){
        this.index_slide -= 1
      } else {
        this.index_slide = 0
      }
    }
  },
  create: function(){
    writeUserData('001', this.index_slide);
    //console.log('created', this.index_slide);
  }
});

var startCountRef = database.ref('slide/' + '001');
startCountRef.on('value', function(snapshot){
  app.index_slide = snapshot.val().index_slide;
  console.log('learn', snapshot.val().index_slide);
  //return snapshot.val().index_slide
  //console.log('vue'. app.index_slide);
})
