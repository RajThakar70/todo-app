import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddTodo from './components/AddTodo';
import Filter from './components/Filter';
import TodoList from './components/TodoList';

const styles = (theme) => {
	return {
		root: {
			paddingTop: 16,
			paddingBottom: 16,
			marginTop: theme.spacing.unit * 3
		}
	};
};

class App extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid container spacing={16} >
        <Grid item md={12} align="center" >
					<Grid container justify="center">
						<Grid item md={6}>
							<Paper className={classes.root} elevation={4} >
								<Typography variant="headline" component="h1" align="center">
                  Todo App
								</Typography>
								<Filter />
								<AddTodo />
								<TodoList />
							</Paper>
						</Grid>
					</Grid>
        </Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(App);
