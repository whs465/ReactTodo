var expect = require('expect');
var actions = require('actions');

describe('Actions',() => {
  it('Should generate search text action', () => {
    var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'some search text'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('Should generate addTodo action', () => {
    var action = {
        type: 'ADD_TODO',
        text: 'some text'
    };
    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('Should generate toggleShowCompleted action', () => {
    var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
    var todos = [{
      id: '111',
      test: 'anyrhing',
      completed: false,
      createdAt: 3300
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    }
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('Should generate toggleTodo action', () => {
    var action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });

});
