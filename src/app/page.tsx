'use client';

import Timer from '@/components/Timer';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import * as React from 'react';

export default function Home() {
	const [date, setDate] = React.useState<Date | undefined>(new Date());
	const [timerWeeks, setTimerWeeks] = React.useState();
	const [timerDays, setTimerDays] = React.useState();
	const [timerHours, setTimerHours] = React.useState();
	const [timerMinutes, setTimerMinutes] = React.useState();
	const [timerSeconds, setTimerSeconds] = React.useState();

	let interval;

	const startTimer = () => {
		const countdownDate = format(new Date(date), 'T');
		console.log(countdownDate);

		interval = setInterval(() => {
			const now = new Date().getTime();
			const distance = countdownDate - now;

			const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
			const days = Math.floor((distance % (24 * 60 * 60 * 1000 * 7)) / (1000 * 60 * 60 * 24));
			const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
			const seconds = Math.floor((distance % (60 * 1000)) / 1000);

			if (distance < 0) {
				// Stop Timer
				clearInterval(interval);
			} else {
				// Update Timer
				setTimerWeeks(weeks);
				setTimerDays(days);
				setTimerHours(hours);
				setTimerMinutes(minutes);
				setTimerSeconds(seconds);
			}
		});
	};

	React.useEffect(() => {
		startTimer();
		return () => {
			clearInterval(interval);
		};
	});

	return (
		<div className='h-screen flex items-center justify-center overflow-x-hidden'>
			<div className='container columns-2 gap-8 pt-32 max-w-7xl w-full mx-auto h-full'>
				<div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
					<LargeHeading size='lg' className='three-d text-light-gold light:text-light-gold'>
						Countdown <br /> Timer.
					</LargeHeading>

					<Paragraph className='max-w-xl lg:text-left'>
						Easily keep track of time to your favourite events of text with this free countdown
						timer.
					</Paragraph>
				</div>
				<div className='h-full gap-6 flex flex-col items-center justify-center'>
					<Calendar
						mode='single'
						selected={date}
						onSelect={setDate}
						disabled={(date) => date < new Date()}
						initialFocus
					/>
					<Timer
						timerWeeks={timerWeeks}
						timerDays={timerDays}
						timerHours={timerHours}
						timerMinutes={timerMinutes}
						timerSeconds={timerSeconds}
					/>
				</div>
			</div>
		</div>
	);
}
