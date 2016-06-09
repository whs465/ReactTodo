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

    // expect createdAt to br a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');

  });

  it('should toogle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    // check todos first item has comppleted value of false
    expect(todoApp.state.todos[0].completed).toBe(false);

    // call handleToggle with 11
    todoApp.handleToggle(11);

    //verify that value change
    expect(todoApp.state.todos[0].completed).toBe(true);

    // expect complet to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toogle todo form completed to incompleted', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);

    // call handleToggle with 11
    todoApp.handleToggle(11);

    //verify that value change
    expect(todoApp.state.todos[0].completed).toBe(false);

    // expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
