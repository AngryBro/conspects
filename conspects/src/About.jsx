import { useEffect, useState } from "react"
import { Title } from "./Title"
import "./css/About.css";
import { Block } from "./Block";
import { Spinner } from "./Spinner";

export const About = () => {

    const contentURL = "https://raw.githubusercontent.com/AngryBro/conspects/main/data/about.html";

    const [time, setTime] = useState("??:??");

    const [data, setData] = useState("");

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
            let promise = await fetch(contentURL);
            let response = await promise.text();
            setFetching(false);
            setData(response);
        }
        fetchData();
        fetchTime();
    }, []);

    
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
                        <tr>
                            <td><i>Образование:</i></td>
                            <td>ДВФУ, Математика и компьютерные науки</td>
                        </tr>
                        <tr>
                            <td><i>Результаты ЕГЭ:</i></td>
                            <td>
                                <a href="https://angrybro.github.io/checkege" target="_blank" rel="noopener noreferrer">
                                    angrybro.github.io/checkege
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td><i>Лет работы в РИ:</i></td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
                <div> </div>
                <div> </div>
            </div>
        </div>
        <div hidden={!fetching}><Spinner/></div>
        <div hidden={fetching} className="about-paragraps-container">
            {
                data.split("\n\n\n").map((block, i) =>
                    <Block key={i} title={block.split("\n\n")[0].replace("<title>", "").replace("</title>","")}>
                        <div dangerouslySetInnerHTML={{__html: block.split("\n\n")[1]}} />
                    </Block>
                )
            }
        </div>
    </div>
}