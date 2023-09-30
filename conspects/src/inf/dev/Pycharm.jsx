import { Block } from "../../Block";
import { Title } from "../Title";
import pycharm1 from "../../img/pycharm/setup/1pycharm.png";
import pycharm2 from "../../img/pycharm/setup/2pycharm.png";
import pycharm3 from "../../img/pycharm/setup/3pycharm.png";
import pycharm4 from "../../img/pycharm/setup/4pycharm.png";
import pycharm5 from "../../img/pycharm/setup/5pycharm.png";
import pycharm6 from "../../img/pycharm/setup/6pycharm.png";
import pycharm7 from "../../img/pycharm/setup/7pycharm.png";
import pycharm8 from "../../img/pycharm/setup/8pycharm.png";
import { Content } from "../../Content";
import { useRef } from "react";
import new1 from "../../img/pycharm/newProject/1.PNG";
import new2 from "../../img/pycharm/newProject/2.PNG";
import new3 from "../../img/pycharm/newProject/3.PNG";
import new4 from "../../img/pycharm/newProject/4.PNG";

export const Pycharm = () => {

    const description = useRef();
    const setup = useRef();
    const project = useRef();
    const main = useRef();

    return <div ref={main} className="instruction">
        <Title>Pycharm</Title>
        <Content>
            <li link={description}>Описание</li>
            <li link={setup}>Установка</li>
            <li link={project}>Создание нового проекта</li>
        </Content>
        <Block title="Описание" beginRef={main} link={description}>
            <p>
                <b>Pycharm</b> &mdash; программа для компьютера, позволяющая
                быстро и эффективно писать и выполнять код на языке python.
            </p>
        </Block>
        <Block title="Установка" beginRef={main} link={setup}>
            <ol className="def-list">
                <li>
                    Переходим на &nbsp;
                    <u>
                        <a href="https://www.jetbrains.com/ru-ru/pycharm" target="_blank" rel="noopener noreferrer">www.jetbrains.com/ru-ru/pycharm</a>
                    </u>
                </li>
                <li>
                    <div style={{marginBottom:"-40px"}}>&nbsp;</div>
                    <div className="p">
                        <img src={pycharm1} alt="pycharm" />
                    </div>
                </li>
                <li>
                    <div style={{marginBottom:"-40px"}}>&nbsp;</div>
                    <div className="p">
                        <img src={pycharm2} alt="pycharm" />
                    </div>
                </li>
                <li>
                    <div style={{marginBottom:"-40px"}}>&nbsp;</div>
                    <div className="p">
                        <img src={pycharm3} alt="pycharm" />
                    </div>
                </li>
                <li>
                    <div>Выбираем куда устанавливать.</div>
                    <div className="p">
                        <img src={pycharm4} alt="pycharm" />
                    </div>
                </li>
                <li>
                    <div>Внимание на галочки!</div>
                    <div className="p">
                        <img src={pycharm5} alt="pycharm" />
                    </div>
                </li>
                <li>
                    <div style={{marginBottom:"-40px"}}>&nbsp;</div>
                    <div className="p">
                        <img src={pycharm6} alt="pycharm" />
                    </div>
                </li>
                <li>
                    <div style={{marginBottom:"-40px"}}>&nbsp;</div>
                    <div className="p">
                        <img src={pycharm7} alt="pycharm" />
                    </div>
                </li>
                <li>
                    <div style={{marginBottom:"-40px"}}>&nbsp;</div>
                    <div className="p">
                        <img src={pycharm8} alt="pycharm" />
                    </div>
                </li>
            </ol>
        </Block>
        <Block title="Создание нового проекта" link={project} beginRef={main}>
            <ol>
                <li>
                    Через проводник нужно выбрать на компьютере место, где будет
                    находиться проект и создать там пустую папку.
                </li>
                <li>
                    <div style={{marginBottom:"-40px"}}>&nbsp;</div>
                    <div className="p">
                        <img src={new1} alt="project" />
                    </div>
                </li>
                <li>
                    <div>
                        В пункте Location нужно выбрать приготовленную для проекта
                        пустую папку.
                    </div>
                    <div className="p">
                        <img src={new2} alt="project" />
                    </div>
                </li>
                <li>
                    <div style={{marginBottom:"-40px"}}>&nbsp;</div>
                    <div className="p">
                        <img src={new3} alt="project" />
                    </div>
                </li>
                <li>
                    <div style={{marginBottom:"-40px"}}>&nbsp;</div>
                    <div className="p">
                        <img src={new4} alt="project" />
                    </div>
                </li>
                
            </ol>
        </Block>
    </div>

}