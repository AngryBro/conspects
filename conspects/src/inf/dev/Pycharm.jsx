import { Block } from "../../Block";
import { Title } from "../Title";
import pycharm1 from "../../img/1pycharm.png";
import pycharm2 from "../../img/2pycharm.png";
import pycharm3 from "../../img/3pycharm.png";
import pycharm4 from "../../img/4pycharm.png";
import pycharm5 from "../../img/5pycharm.png";
import pycharm6 from "../../img/6pycharm.png";
import pycharm7 from "../../img/7pycharm.png";
import pycharm8 from "../../img/8pycharm.png";

export const Pycharm = () =>

<div>
    <Title>Pycharm</Title>
    <Block title="Описание">
        <p>
            <b>Pycharm</b> &mdash; программа для компьютера, позволяющая
            быстро и эффективно писать и выполнять код на языке python.
        </p>
    </Block>
    <Block title="Установка">
        <ol className="def-list">
            <li>
                Переходим на &nbsp;
                <u>
                    <a href="www.jetbrains.com/ru-ru/pycharm" target="_blank" rel="noopener noreferrer">www.jetbrains.com/ru-ru/pycharm</a>
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
</div>