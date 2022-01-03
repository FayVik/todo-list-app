import React from 'react';
import '../assests/TodoView.css';
import CreateForm from './CreateForm';
import { TodosProvider } from '../contexts/todos.context';
import TodoList from './TodoList';

export default function TodoView() {
	return (
		<div className='container'>
			<div className='header'>
				<h1>TodoList</h1>
				<p>A simple todolist app built with React Hooks & Context</p>
			</div>
			<div className='todo-body'>
				<TodosProvider>
					<div className='todo-container'>
						<TodoList></TodoList>
					</div>
					<div className='todo-button'>
						<CreateForm></CreateForm>
					</div>
				</TodosProvider>
			</div>
		</div>
	);
}
