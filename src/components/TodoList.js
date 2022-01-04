import React, { useContext } from 'react';
import { TodosContext } from '../contexts/todos.context';
import TodoApp from './TodoApp';

export default function TodoList() {
	const todos = useContext(TodosContext);

	return (
		<div>
			{todos.map((todo) => (
				<TodoApp key={todo.id} {...todo}></TodoApp>
			))}
		</div>
	);
}
