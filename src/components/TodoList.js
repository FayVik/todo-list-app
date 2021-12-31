import React, { useContext } from 'react';
import { TodosContext } from '../contexts/todos.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';

export default function TodoList() {
	const todos = useContext(TodosContext);

	return (
		<div>
			{todos.map((todo) => (
				<div className='todo-view' key={todo.id}>
					<div className='todo-text'>
						<p>{todo.task}</p>
					</div>
					<div className='todo-icon'>
						<FontAwesomeIcon className='trash' icon={faTrashAlt} />
						<FontAwesomeIcon className='pen' icon={faPen} />
					</div>
				</div>
			))}
		</div>
	);
}
