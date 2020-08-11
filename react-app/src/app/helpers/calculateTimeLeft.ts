const calculateTimeLeft = (countDownDate: Date): { days: number; hours: number; mins: number; secs: number } => {
    const distance = +countDownDate - +new Date();
    let timeLeft: { days: number; hours: number; mins: number; secs: number } = {
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
    };

    if (distance > 0) {
        timeLeft = {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
            mins: Math.floor((distance / 1000 / 60) % 60),
            secs: Math.floor((distance / 1000) % 60),
        };
    }

    return timeLeft;
};

export default calculateTimeLeft;
