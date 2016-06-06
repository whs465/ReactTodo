var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        }, {
          id: uuid(),
          text: 'clean the patio'
        }, {
          id: uuid(),
          text: 'check email'
        }, {
          id: uuid(),
          text: 'cook dinner'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos, {
          id: uuid(),
          text: text
        }
      ]
    });
  },
  handleSearch: function (showCompleted, searchText) {
    setState({showCompleted: showCompleted, searchText: searchText.toLowerCase()});
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
