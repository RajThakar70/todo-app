import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import FormGroup from '@material-ui/core/FormGroup';

const todoRender = (todos, filter) => {
  switch (filter) {
    case 'SHOW ALL':
      return todos.map((todo, index) => <Todo key={index} {...todo} />);
    case 'SHOW ACTIVE':
      return todos
        .filter((todo) => todo.completed === false)
        .map((todo, index) => <Todo key={index} {...todo} />);
    case 'SHOW COMPLETED':
      return todos
        .filter((todo) => todo.completed === true)
        .map((todo, index) => <Todo key={index} {...todo} />);
    default:
      return todos.map((todo, index) => <Todo key={index} {...todo} />);
  }
};

const TodoList = ({ todos, filter }) => {
	return <FormGroup>{todoRender(todos, filter)}</FormGroup>;
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.visibilityFilter
})



export default connect(mapStateToProps)(TodoList);
