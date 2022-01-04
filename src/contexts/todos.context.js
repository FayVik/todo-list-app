import React, { createContext } from 'react';
import todosReducer from '../reducers/todos.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const defaultTodos = [
	{
		id: '0',
		task: 'I want to be a world class React developer',
		completed: false,
	},
	{ id: '2', task: 'Write articles', completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
	const [todos, dispatch] = useLocalStorageReducer(
		'todos',
		todosReducer,
		defaultTodos
	);

	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	);
}
