import { useState } from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';

function App() {
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

	const page = 'klsflksdfkslkd';
	const isOk = true;
	return (
		<div className="container">
			<Header />
			<Tasks tasks={tasks} />
		</div>
	);
}

export default App;
