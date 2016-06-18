import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyChJ7tEz8UzLwdBX6KeepcfrwFzp9-VQjM",
    authDomain: "whs-todo-app.firebaseapp.com",
    databaseURL: "https://whs-todo-app.firebaseio.com",
    storageBucket: "whs-todo-app.appspot.com"
  };
  firebase.initializeApp(config);
} catch (e) {
  
}

export var firebaseRef = firebase.database().ref();
export default firebase;
