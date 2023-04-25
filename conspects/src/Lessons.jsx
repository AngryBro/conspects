import { useEffect, useRef, useState } from "react";

const Lessons = () => {
    
    const [data, setData] = useState({});
    const [lessons, setLessons] = useState([]);
    const [group, setGroup] = useState(0);
    const [loading, setLoading] = useState(true);
    const table_head = useRef();
    
    const url = 'https://raw.githubusercontent.com/AngryBro/conspects/main/math/lessons.json';

    const parse_lessons = (lessons) => {
        var temp = [];
        var days = ['ВС','ПН','ВТ',"СР","ЧТ","ПТ","СБ"];
        for(var i = 0; i<lessons.length; i++) {
            var date = lessons[i].date.split(' ');
            var now = new Date();
            var day_date = date[0];
            var time = date[1];
            date[0] = now.getFullYear()+'-'+date[0].split('.').reverse().join('-');
            date = date.join('T') + ':00+03:00';
            date = new Date(date);
            var day = days[date.getDay()];
            var length = `${lessons[i].length} часа`;
            var lesson_numbers = lessons[i].lessons;
            if(now.getTime() < date.getTime()) {
                temp.push({date: day_date, day, time, length, lessons: lesson_numbers});
            }
        };
        return temp;
    };

    useEffect(() => {
        const fetchData = async () => {
            var promise = await fetch(url);
            var response = {"ошибка загрузки":[]};
            try {
                if(promise.ok) {
                    response = await promise.json();
                }
            }
            catch(e) {
                console.log(e, promise);
            }
            setData(response);
            setLoading(false);
            // setTimeout(() => setLoading(false), 1000);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if(group in data) {
            setLessons(data[group]);
        }
        else {
            setLessons([]);
        }
    }, [group, data]);

    return loading?<div style={{height:'120px'}}><div className="sub-menu">Loading..</div></div>:<div>
        <div>
            <select className="sub-menu" onChange={e => setGroup(e.target.value)} value={group}>
                <option className="main-menu" value={0}>Выберите группу</option>
                {
                    Object.keys(data).map(gr =>
                        <option className="main-menu" key={gr} value={gr}>{`Группа ${gr}`}</option>
                    )
                }
            </select>
        </div>
        <div hidden={!lessons.length}>
            <table>
                <tbody>
                    <tr ref={table_head}>
                        <th>Дата</th>
                        <th>День</th>
                        <th>Время начала</th>
                        <th>Длительность</th>
                        <th>Занятия</th>
                    </tr>
                    {
                        parse_lessons(lessons).map((lesson, i) =>
                            <tr key={i}>
                                <td>{lesson.date}</td>
                                <td>{lesson.day}</td>
                                <td>{lesson.time}</td>
                                <td>{lesson.length}</td>
                                <td>{lesson.lessons}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>

};

export default Lessons;