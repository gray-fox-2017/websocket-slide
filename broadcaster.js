// Initialize Firebase
var config = {
    apiKey: "AIzaSyC6I9fG6kCLGyQZGuN5d568b26o3KNscw0",
    authDomain: "websocket-slide.firebaseapp.com",
    databaseURL: "https://websocket-slide.firebaseio.com",
    storageBucket: "websocket-slide.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

// function writeUserData() {
//     database.ref('/users').set({
//         type: '',
//         status: false
//     });
//     console.log('data berhasil di write');
// }

var starCountRef = firebase.database().ref('/users');
starCountRef.on('value', function(data) {
    // console.log(data.val().status);
    if (data.val().status) {
        app.status = false
    } else {
        app.status = true
    }

    if (data.val().type === 'left') {
        $('#left').click()
    } else {
        $('#right').click()
    }


    console.log('data berhasil di read');
});

var app = new Vue({
    el: '#app',
    data: {
        status: false
    },
    methods: {
        clickLeft() {
            database.ref('/users').set({
                type: 'left',
                status: app.status
            });
        },
        clickRight() {
            database.ref('/users').set({
                type: 'right',
                status: app.status
            });
        }
    }
})