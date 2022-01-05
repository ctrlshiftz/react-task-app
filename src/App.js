import { useState } from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';

function App() {
	const [ showAddForm, setShowAddForm ] = useState(false);

	const [ tasks, setTasks ] = useState([
		{
			id: 1,
			text: 'قرار ملاقات با دوستم',
			day: '5 اردیبهشت',
			reminder: true
		},
		{
			id: 2,
			text: 'قرار ملاقات با دکتر',
			day: '8 اردیبهشت',
			reminder: true
		},
		{
			id: 3,
			text: 'خرید مایحتاج خونه',
			day: '10 اردیبهشت',
			reminder: false
		}
	]);

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};

	// ذخیره کردن وظیفه
	const addTask = (task) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const newTask = { id, ...task };
		setTasks([ ...tasks, newTask ]);
	};

	return (
		<div className="container">
			<Header />
			<AddTask onAdd={addTask} />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} />
			) : (
				'هیچ وظیفه ای موجود نیست'
			)}
		</div>
	);
}

export default App;
