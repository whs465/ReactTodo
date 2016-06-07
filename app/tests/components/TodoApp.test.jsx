var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect('TodoApp').toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'prueba';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should toogle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    // check todos first item has comppleted value of false
    expect(todoApp.state.todos[0].completed).toBe(false);

    // call handleToggle with 11
    todoApp.handleToggle(11);

    //verify that value change
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
