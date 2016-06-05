var React = require('react');
var TodoList = require('TodoList');
var TodoApp  = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'clean the patio'
        },
        {
          id: 3,
          text: 'check email'
        },
        {
          id: 4,
          text: 'cook dinner'
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
