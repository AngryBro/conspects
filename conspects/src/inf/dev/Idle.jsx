import { Block } from "../../Block";
import { Title } from "../Title";
import idle1 from "../../img/idle/1.PNG";
import idle2 from "../../img/idle/2.PNG";
import idle3 from "../../img/idle/3.PNG";
import idle4 from "../../img/idle/4.PNG";

export const Idle = () =>

<div className="instruction">
    <Title>Idle</Title>
    <Block title="Описание">
        <p>
            <b>Idle</b> &mdash; программа для компьютера, позволяющая писать и редактировать код на языке python.
        </p>
        <p>
            Idle автоматически устанавливается на компьютер при установке python.
        </p>
    </Block>
    <Block title="Создание нового проекта">
        <ol>
            <li>
                Через проводник нужно выбрать на компьютере место, где будет
                находиться проект и создать там пустую папку.
            </li>
            <li>
                <div>
                    В пуске нужно найти Idle.
                </div>
                <div className="p">
                    <img src={idle1} alt="idle" />
                </div>
            </li>
            <li>
                <div style={{marginBottom:"-40px"}}>&nbsp;</div>
                <div className="p">
                    <img src={idle2} alt="idle" />
                </div>
            </li>
            <li>
                <div>
                    Новый файл нужно сохранить в папку с проектом.
                </div>
                <div className="p">
                    <img src={idle3} alt="idle" />
                </div>
            </li>
            <li>
                <div style={{marginBottom:"-40px"}}>&nbsp;</div>
                <div className="p">
                    <img src={idle4} alt="idle" />
                </div>
            </li>
            <li>
                <div className="p">
                    Чтобы открыть созданный ранее файл, нужно его найти
                    в File Open.
                </div>
            </li>
        </ol>
    </Block>
</div>