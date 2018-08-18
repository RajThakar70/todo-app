import React from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const AddTodo = ({ dispatch }) => {
	let inputValue;
	return (
		<Grid container justify="center">
			<Grid item md={8}>
				<Input
					autoFocus
					onChange={(node) => {inputValue = node.target.value}}
					fullWidth
					margin="dense"
					type="text"
				/>
			</Grid>
			<Grid item>
				<Button
					variant="raised"
					color="primary"
					onClick={() => {
						dispatch(addTodo(inputValue));
						inputValue = 'kljlkl';
					}}>
					AddTodo
				</Button>
			</Grid>
		</Grid>
	);
};

export default connect()(AddTodo);
