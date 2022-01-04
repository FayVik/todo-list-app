import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons';
import { DispatchContext } from '../contexts/todos.context';
import { REMOVE_TODO, TOGGLE_TODO } from '../constants/actions';
import useToggleState from '../hooks/useToggleState';
import EditTodoForm from './EditTodoForm';

export default function TodoApp({ id, task, completed }) {
	const dispatch = useContext(DispatchContext);

	const [isEditing, toggle] = useToggleState(false);
	if (isEditing) {
		return (
			<EditTodoForm
				id={id}
				task={task}
				toggleEditForm={toggle}
				onClick={() => toggle()}
			/>
		);
	}
	return (
		<div className='todo-view'>
			<div className='todo-text'>
				<p
					onClick={() => dispatch({ type: TOGGLE_TODO, id })}
					style={{
						textDecoration: completed ? 'line-through' : '',
						color: completed ? '#bdc3c7' : '#34495e',
						cursor: 'pointer',
					}}
				>
					{task}
				</p>
			</div>
			<div className='todo-icon'>
				<FontAwesomeIcon
					className='pen'
					icon={faPen}
					onClick={(e) => {
						e.stopPropagation();
						toggle();
					}}
				/>
				<FontAwesomeIcon
					className='trash'
					icon={faTrashAlt}
					onClick={(e) => {
						e.stopPropagation();
						dispatch({ type: REMOVE_TODO, id });
						console.log(e);
					}}
				/>
			</div>
		</div>
	);
}
