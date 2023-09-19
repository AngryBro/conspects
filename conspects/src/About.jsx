import { useEffect, useState } from "react"
import { Title } from "./Title"
import "./css/About.css";
import "./css/media.css";
import { Block } from "./Block";
import { Spinner } from "./Spinner";
import { useLocation } from "./static-router";
// import { Api } from "./Api";


export const About = () => {

    const contentURL = "https://raw.githubusercontent.com/AngryBro/conspects/main/data/about.html";

    // const [time, setTime] = useState("??:??");

    const [data, setData] = useState("");

    const [fetching, setFetching] = useState(false);


    useEffect(() => {
        // const fetchTime = () => {
        //     Api("https://api.api-ninjas.com/v1/worldtime")
        //     .get({city: "Vladivostok"})
        //     .callback(({ok, data}) => {
        //         if(ok) {
        //             setTime(data.time);
        //         }
        //     })
        //     .send();
            // let promise = await fetch("http://worldtimeapi.org/api/timezone/Asia/Vladivostok.txt");
            // let response = await promise.text();
            // let key = "datetime: ";
            // let index = response.indexOf(key);
            // let vdkTime = "";
            // while(response[index] !== "\n") {
            //     vdkTime += response[index];
            //     index++;
            // }
            // setTime(new Date(vdkTime.replace(key, "")).toLocaleTimeString().split(":").slice(0,2).join(":"));
        // }

        const fetchData = async () => {
            setFetching(true);
            let promise = await fetch(contentURL);
            let response = await promise.text();
            setFetching(false);
            setData(response);
        }
        fetchData();
        // fetchTime();
    }, []);

    const loc = useLocation();

    const mainPage = () => {
        let route = loc.split("/");
        const pages = {
            "math": "/math",
            "inf": "/inf"
        };
        return pages[route[1]];
    }

    
    return <div className="about smaller-xx">
        <Title main={mainPage()}>Преподаватель</Title>
        <div className="about-info-container">
            <div className="about-photo">
                <img src="https://sun9-75.userapi.com/impg/AwPISDBOmIyySa-PMwAi8kFdYFYyjt0QygWaFA/spQ2fhYlqow.jpg?size=1200x1799&quality=95&sign=3c791181da73ad91ea99f4532e2a0526&type=album" alt="Аватарка вк" />
            </div>
            <div className="about-info">
                <div className="about-name">Андрей Петров</div>
                <table>
                    <tbody>
                        <tr>
                            <td><i>Город обитания:</i></td>
                            <td>Владивосток</td>
                        </tr>
                        <tr>
                            <td><i>Образование:</i></td>
                            <td>ДВФУ, Математика и компьютерные науки</td>
                        </tr>
                        <tr>
                            <td><i>Результаты ЕГЭ:</i></td>
                            <td>
                                <a href="https://angrybro.github.io/checkege" target="_blank" rel="noopener noreferrer">
                                    ссылка
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