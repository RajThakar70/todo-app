import { combineReducers } from 'redux';
import { VisibilityFilters } from '../actions';



const todos = (state, action) => {
	if(!state){
		if(localStorage.getItem("todos")){
			state = JSON.parse(localStorage.getItem("todos"));
		}else{
			state = []
		}
	}
	switch (action.type) {
		case 'ADD_TODO':
			let newStateAdd = [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			]
			localStorage.setItem('todos',JSON.stringify(newStateAdd));
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			]
		case 'TOGGLE_TODO':
			let newStateToggle = state.map(
				(todo) =>
					todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
			);
			localStorage.setItem('todos',JSON.stringify(newStateToggle))
			return newStateToggle;
		default:
			return state;
	}
}

const visibilityFilter = (state, action) => {
	if(!state){
		if(localStorage.getItem("visibilityFilter")){
			state = JSON.parse(localStorage.getItem("visibilityFilter"));
		}else{
			state = VisibilityFilters['SHOW ALL'];
		}
	}
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			localStorage.setItem('visibilityFilter',JSON.stringify(action.filter));
			return action.filter;
		default:
			return state;
	}
}

const reducer = combineReducers({todos,visibilityFilter})

export default reducer;
