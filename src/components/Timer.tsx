import { FC } from 'react';
import Paragraph from './ui/Paragraph';

const Timer: FC = ({ timerWeeks, timerDays, timerHours, timerMinutes, timerSeconds }) => {
	return (
		<div className='border-solid rounded border-gray-300 border-2'>
			<Paragraph className='max-w-xl lg:text-left flex flex-row gap-10 p-8'>
				<section>
					<p>{timerWeeks}</p>
					<p>
						<small>Weeks</small>
					</p>
				</section>
				<section>
					<p>{timerDays}</p>
					<p>
						<small>Days</small>
					</p>
				</section>
				<section>
					<p>{timerHours}</p>
					<p>
						<small>Hours</small>
					</p>
				</section>
				<section>
					<p>{timerMinutes}</p>
					<p>
						<small>Minutes</small>
					</p>
				</section>
				<section>
					<p>{timerSeconds}</p>
					<p>
						<small>Seconds</small>
					</p>
				</section>
			</Paragraph>
		</div>
	);
};

export default Timer;
