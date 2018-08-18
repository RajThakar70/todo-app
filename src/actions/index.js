let nextTodoId = 0;
export const addTodo = (text) => {
	console.log('TEXT', text);
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	};
};

export const setVisibilityFilter = (filter) => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
});

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
});

export const VisibilityFilters = {
	'SHOW ALL': 'SHOW ALL',
	'SHOW COMPLETED': 'SHOW COMPLETED',
	'SHOW ACTIVE': 'SHOW ACTIVE'
};
