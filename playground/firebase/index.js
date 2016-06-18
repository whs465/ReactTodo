import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyChJ7tEz8UzLwdBX6KeepcfrwFzp9-VQjM",
  authDomain: "whs-todo-app.firebaseapp.com",
  databaseURL: "https://whs-todo-app.firebaseio.com",
  storageBucket: "whs-todo-app.appspot.com"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'william',
    age: 24
  }
});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('got entire database ', snapshot.key, snapshot.val());
// },(e) => {
//     'unable to fetch value', e
// });

var logData = (snapshot) => {
  console.log('got value', snapshot.val());
};
firebaseRef.on('value',logData)
firebaseRef.off();
firebaseRef.update({
  isRunning:false
});
