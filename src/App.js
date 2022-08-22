import './App.css';
import { useEffect, useState } from 'react';
import Clock from './Components/Clock';

function App() {
	const [timerDays, setTimerDays] = useState();
	const [timerHours, setTimerHours] = useState();
	const [timerMinutes, setTimerMinutes] = useState();
	const [timerSeconds, setTimerSeconds] = useState();

	let interval;

	const startTimer = () => {
		const countDownDate = new Date('Jan 5, 2023').getTime();

		// Update the count down every 1 second
		interval = setInterval(() => {
			// Get today's date and time
			const now = new Date().getTime();

			// Find the distance between now and the count down date
			const distance = countDownDate - now;

			// Time calculations for days, hours, minutes and seconds
			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			// If the count down is finished, write some text
			if (distance < 0) {
				clearInterval(interval.current);
			} else {
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		});
	};

	useEffect(() => {
		startTimer();
	});

	return (
		<div className="App">
			<Clock
				timerDays={timerDays}
				timerHours={timerHours}
				timerMinutes={timerMinutes}
				timerSeconds={timerSeconds}
			/>
		</div>
	);
}

export default App;
