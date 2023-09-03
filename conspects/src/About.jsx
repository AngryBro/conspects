import { useEffect, useState } from "react"
import { Title } from "./Title"
import "./css/About.css";
import { Block } from "./Block";

export const About = () => {

    const [time, setTime] = useState("??:??");

    const [data, setData] = useState({
        text: [],
        communication: [],
        info: {}
    });

    const [fetching, setFetching] = useState(false);


    useEffect(() => {
        const fetchTime = async () => {
            let promise = await fetch("http://worldtimeapi.org/api/timezone/Asia/Vladivostok.txt");
            let response = await promise.text();
            let key = "datetime: ";
            let index = response.indexOf(key);
            let vdkTime = "";
            while(response[index] !== "\n") {
                vdkTime += response[index];
                index++;
            }
            setTime(new Date(vdkTime.replace(key, "")).toLocaleTimeString().split(":").slice(0,2).join(":"));
        }

        const fetchData = async () => {
            setFetching(true);
            const error = (e) => {
                setFetching(false);
                console.log(e)
                alert("Ошибка загрузки, перезагрузите страницу");
            }
            let promise = undefined;
            let response = undefined;
            try {
                promise = await fetch("https://raw.githubusercontent.com/AngryBro/conspects/data/about.json");
            }
            catch(e) {
                return error(e);
            }
            if(!promise.ok) {
                return error(promise.status);
            }
            try {
                response = await promise.json();
                setData(response);
                setFetching(false);
            }
            catch(e) {
                return error(e);
            }
            
        }
        fetchData();
        fetchTime();
    }, []);

    const renderInfo = () => {
        return Object.keys(data.info).map((key, i) =>
            <tr key={i}>
                <td><i>{key}:</i></td>
                <td>
                    {
                        Array.isArray(data.info[key]) ?
                        <a target="_blank" rel="noopener noreferrer" href={data.info[key][1]}>{data.info[key][0]}</a>
                        : data.info[key]
                    }:
                </td>
            </tr>
        )
    }
    
    return <div>
        <Title>Преподаватель</Title>
        <div className="teacher-info-container">
            <div className="teacher-photo">
                <img src="https://sun9-75.userapi.com/impg/AwPISDBOmIyySa-PMwAi8kFdYFYyjt0QygWaFA/spQ2fhYlqow.jpg?size=1200x1799&quality=95&sign=3c791181da73ad91ea99f4532e2a0526&type=album" alt="Аватарка вк" />
            </div>
            <div className="teacher-info">
                <div className="teacher-name">Андрей Петров</div>
                <table>
                    <tbody>
                        <tr>
                            <td><i>Город обитания:</i></td>
                            <td>Владивосток, время {time}</td>
                        </tr>
                        {renderInfo()}
                    </tbody>
                </table>
                <div> </div>
                <div> </div>
            </div>
        </div>
        <Block title="Цели и принципы работы">
            {
                data.text.map((text, i) => 
                    <p key={i}>{text}</p>
                )
            }
        </Block>
        <Block title="Про общение">
            <p>
                <ol className="teacher-communication">
                    {
                        data.communication.map((rule, i) => 
                            <li key={i}>{rule}</li>
                        )
                    }
                </ol>
            </p>
        </Block>
    </div>
}