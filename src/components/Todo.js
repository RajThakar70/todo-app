import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Todo = ({ text, dispatch, id, completed }) => {
	console.log('ID', id);
	console.log('PROPS', completed);
	return (
		<FormControlLabel
			control={
				<Checkbox
					checked={completed}
					value="gilad"
          onClick={() => dispatch(toggleTodo(id))} />
			}
			label={text} />
	);
};

export default connect()(Todo);
