import React, { useContext } from 'react';
import { DispatchContext } from '../contexts/todos.context';
import useInputState from '../hooks/useInputState';
import { EDIT_TODO } from '../constants/actions';
import '../assests/CreateForm.css';

function EditTodoForm({ id, task, toggleEditForm }) {
	const dispatch = useContext(DispatchContext);
	const [value, handleChange, clearValue] = useInputState(task);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				dispatch({ type: EDIT_TODO, id, task: value });
				toggleEditForm();
				clearValue();
			}}
		>
			<input
				autoFocus
				value={value}
				onChange={handleChange}
				onClick={(e) => e.stopPropagation()}
			/>
		</form>
	);
}

export default EditTodoForm;
