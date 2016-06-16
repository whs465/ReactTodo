console.log('hello');
import firebase from 'firebase';
console.log('hello');
var config = {
  apiKey: "AIzaSyChJ7tEz8UzLwdBX6KeepcfrwFzp9-VQjM",
  authDomain: "whs-todo-app.firebaseapp.com",
  databaseURL: "https://whs-todo-app.firebaseio.com",
  storageBucket: "whs-todo-app.appspot.com"
};

firebase.initializeApp(config);
firebase.database().ref().set({
  appName: 'Todo App'
});
