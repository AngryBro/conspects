import {useEffect, useState } from "react";

const Timer = () => {
    
    const fetch_url = '';
    const [deadline, setDeadline] = useState(0);
    const [text, setText] = useState('');
    const [time, setTime] = useState({weeks: 2, days: 3});
    const [display, setDisplay] = useState(false);

    const days_ending = {
        1: 'день',
        2: 'дня',
        3: 'дня',
        4: 'дня',
        5: 'дней',
        6: 'дней'
    };
    const weeks_ending = count => {
        if(count % 10 === 1 && count !== 11) return 'неделя';
        if(count % 10 > 1 && count % 10 < 5 && (count < 10 || count >20)) return 'недели';
        return 'недель';
    }

    const parse_deadline = () => {
        return deadline.toLocaleString().split(',')[0];
    };
    const parse_time = () => {
        if(time.days === 0 && time.weeks === 0) return 'Не осталось времени';
        return `Осталось времени: ${time.weeks>0?`${time.weeks} ${weeks_ending(time.weeks)} и `:''}${time.days>0?`${time.days} ${days_ending[time.days]}`:''}`;
    };

    useEffect(() => {
        const fetchdata = async () => {
            var promise = await fetch(fetch_url);
            var response = undefined;
            if(promise.ok) {
                try {
                    response = await promise.json();
                }
                catch(error) {
                    console.log(error);
                }
            }
            if(response !== undefined) {
                setText(response.text);
                var deadline = response.deadline.split('.');
                var date = new Date(0);
                date.setFullYear(deadline.pop());
                date.setMonth(Number(deadline.pop())-1);
                date.setDate(deadline.pop());
                date.setHours(23);
                date.setMinutes(59);
                setDeadline(date);
                var now = new Date();
                var dtime = date.getTime()-now.getTime();
                dtime = dtime>0?Math.floor(dtime / 1000 / 60 / 60 / 24):0;
                setTime({weeks: Math.floor(dtime / 7), days: dtime % 7});
                setDisplay(response.display!==undefined?response.display:false);
            }
        };
        fetchdata();
    }, []);

    if(display) return (
        <div className="frame timer">
            <div><b>{text}: </b>{parse_deadline()}</div>
            <div><b>{parse_time()}</b></div>
        </div>
    );
    else {
        return (
            <div></div>
        );
    }
};

export default Timer;