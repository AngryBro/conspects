import { Block } from "../../Block";
import { Title } from "../Title";
import python from "../../img/python.png";

export const Python = () => 

<div>
    <Title>Python</Title>
    <Block title="Описание">
        <p>
            <b>Python</b> &mdash; программа для компьютера, которая выполняет
            код, написанный на языке python. 
        </p>
    </Block>
    <Block title="Установка">
        <ol className="def-list">
            <li>
                Переходим на &nbsp;
                <u>
                    <a href="https://www.python.org/downloads" target="_blank" rel="noopener noreferrer">https://www.python.org/downloads</a>
                </u>
            </li>
            <li>
                <div className="p">Скачиваем последнюю версию</div>
                <div>
                    <img src={python} alt="python download"/>
                </div>
            </li>
            <li>Запускаем установщик.</li>
            <li>Нажимаем галочку <b>Add to PATH</b>.</li>
            <li>Завершаем установку.</li>
        </ol>
    </Block>
</div>