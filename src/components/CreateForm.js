import React, { useContext } from 'react';
import '../assests/CreateForm.css';
import { DispatchContext } from '../contexts/todos.context';
import useInputState from '../hooks/useInputState';
import { ADD_TODO } from '../constants/actions.js';

export default function CreateForm() {
	const dispatch = useContext(DispatchContext);
	const [value, handleChange, clearValue] = useInputState('');

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					dispatch({ type: ADD_TODO, task: value });
					clearValue();
				}}
			>
				<input
					value={value}
					onChange={handleChange}
					placeholder='Add Your Task...'
				/>
			</form>
		</div>
	);
}
