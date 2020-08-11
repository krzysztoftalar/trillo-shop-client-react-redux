import React, { useState } from 'react';
// Imports from src
import useInterval from '../../app/customHooks/useInterval';
import calculateTimeLeft from '../../app/helpers/calculateTimeLeft';

interface IProps {
    countDownDate: Date;
}

const Timer: React.FC<IProps> = ({ countDownDate }: IProps): JSX.Element => {
    const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; mins: number; secs: number }>(
        calculateTimeLeft(countDownDate)
    );

    useInterval(() => {
        setTimeLeft(calculateTimeLeft(countDownDate));
    }, 1000);

    return (
        <div className="timer">
            {Object.entries(timeLeft).map(([key, value]) => (
                <div className="timer__box" key={key}>
                    <span className="timer__time">{value < 10 ? `0${value}` : value}</span>
                    <span className="timer__label">{value === 1 ? key.slice(0, -1) : key}</span>
                </div>
            ))}
        </div>
    );
};

export default Timer;
