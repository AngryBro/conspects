import { useRef } from "react"
import { Title } from "../Title";
import { Content } from "../../Content";
import { Block } from "../../Block";
import { SampleTask } from "../SampleTask";

export const DerivativeSample = () => {
    const point = useRef();
    const value = useRef();
    const universal = useRef();
    const main = useRef();

    return <div ref={main}>
        <Title>Исследование гладкой функции</Title>
        <Content>
            <li link={point}>Точки экстремума</li>
            <li link={value}>Наибольшее/наименьшее значение</li>
            <li link={universal}>Универсальный алгоритм</li>
        </Content>
        <Block title="Точки экстремума" link={point} beginRef={main}>
            <div className="frame" style={{width:"100%"}}>
                <SampleTask>
                    <div>Найти точки экстремума функции</div>
                    <div className="center p">\(y=f(x)\)</div>
                    <div>на отрезке \( [a;b] \).</div>
                </SampleTask>
                <ol>
                    <li>Решение системы \(\cases{"{y'= 0 \\\\ x \\in [a;b]}"} \LR \union{"{x = x_1 \\\\ x=x_2 \\\\ \\ldots \\\\ x = x_n}"} \).</li>
                    <li>
                        <div className="p">Если \( y''(x_i) \neq 0 \), то \(x_i\) &ndash; точка экстремума:</div>
                        <ul className="dot-list">
                            <li>
                                Если \( y''(x_i) {" > 0"} \), то \(x_i\) &ndash; точка минимума.
                            </li>
                            <li>
                                Если \( y''(x_i) {" < 0"} \), то \(x_i\) &ndash; точка максимума.
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
        </Block>
        <Block title="Наибольшее/наименьшее значение" link={value} beginRef={main}>
            <div className="frame" style={{width:"100%"}}>
                <SampleTask>
                    <div>Найти наибольшее и наименьшее значения функции</div>
                    <div className="center p">\(y=f(x)\)</div>
                    <div>на отрезке \( [a;b] \).</div>
                </SampleTask>
                <ol>
                    <li>Решение системы \(\cases{"{y'= 0 \\\\ x \\in [a;b]}"} \LR \union{"{x = x_1 \\\\ x=x_2 \\\\ \\ldots \\\\ x = x_n}"} \).</li>
                    <li>
                        <ul className="dot-list">
                            <li>Наименьшее значение функции: \( \min{"{(y(a), y(b), y(x_i))}"} \).</li>
                            <li>Наибольшее значение функции: \( \max{"{(y(a), y(b), y(x_i))}"} \).</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </Block>
        <Block title="Универсальный алгоритм" link={universal} beginRef={main}>
            <div className="frame">
                <SampleTask>
                    <div>Исследовать функцию</div>
                    <div className="p center">\(y = f(x)\)</div>
                    <div>на промежутке \(T\).</div>
                </SampleTask>
                <ol>
                    <li>Поиск области определения.</li>
                    <li>Поиск стационарных точек: \(y'=0 \LR \union{"{x = x_1 \\\\ x=x_2 \\\\ \\ldots \\\\ x = x_n}"}\).</li>
                    <li>Расстановка знаков \(y'\) на всех промежутках области определения.</li>
                    <li>Расстановка убывания/возрастания \(y\) на промежутках.</li>
                </ol>
            </div>
        </Block>
    </div>
}