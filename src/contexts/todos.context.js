import React, { createContext, useReducer } from 'react';
import todosReducer from '../reducers/todos.reducer';

const defaultTodos = [
	{ id: '0', task: 'Read a book', completed: false },
	{ id: '1', task: 'Jog in a playground', completed: true },
	{ id: '2', task: 'Write articles', completed: false },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();
console.log(DispatchContext);

export function TodosProvider(props) {
	const [todos, dispatch] = useReducer(todosReducer, defaultTodos);

	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	);
}
