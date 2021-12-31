import React, { useState } from 'react';
import '../assests/TodoView.css';
import CreateForm from './CreateForm';
import { TodosProvider } from '../contexts/todos.context';
import TodoList from './TodoList';

export default function TodoView() {
	const [click, setClick] = useState(false);

	const CreateTodo = () => {
		setClick(true);
	};

	return (
		<div className='container'>
			<div className='header'>
				<h1>TodoList</h1>
				<p>A simple todolist app built with React Hooks & Context</p>
			</div>
			<div className='todo-body'>
				<div className='todo-container'>
					{click !== true ? (
						<TodosProvider>
							<TodoList></TodoList>
						</TodosProvider>
					) : (
						<CreateForm></CreateForm>
					)}
				</div>
				<div className='todo-button'>
					<button onClick={() => CreateTodo()}>+</button>
				</div>
			</div>
		</div>
	);
}
