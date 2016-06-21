var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        hashHistory.push('/todos');
    } else {
        hashHistory.push('/');
    }
});

store.dispatch(actions.startAddTodos());

$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
        <Provider store={store}>
            {router}
        </Provider>,
    document.getElementById('app')
);
