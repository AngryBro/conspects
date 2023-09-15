import { useRef } from "react"
import { Title } from "../../Title";
import {Content} from "../../Content";
import { Block } from "../../Block";
import { Props } from "../../Props";

export const Trigonometry = () => {
    const defs = useRef();
    const formulas = useRef();
    const angleTable = useRef();
    const ghost = useRef();
    const circle = useRef();
    const equation = useRef();
    const beginRef = useRef();

    return <div ref={beginRef}>
        <Title>Тригонометрия</Title>
        <Content>
            <li link={defs}>Определения</li>
            <li link={angleTable}>Табличные углы</li>
            <li link={circle}><span className="trigonometry-circle">окружность</span></li>
            <li link={ghost}>Формула приведения</li>
            <li link={formulas}>Свойства</li>
            <li link={equation}>Простейшие уравнения</li>
        </Content>
        <Block title="Определения" beginRef={beginRef} link={defs}>
            <ol className="def-list x-smaller-xx">
                <li>
                \(\sin{"{\\alpha}"}\) (синус острого угла \(\alpha\) в прямоугольном треугольнике)
                &mdash; это дробь \( \displaystyle\frac{"{противолежащий~катет}{гипотенуза}"} \). 
                </li>
                <li>
                \(\cos{"{\\alpha}"}\) (косинус острого угла \(\alpha\) в прямоугольном треугольнике)
                &mdash; это дробь \( \displaystyle\frac{"{прилежащий~катет}{гипотенуза}"} \). 
                </li>
                <li>
                \(\tg{"{\\alpha}"}\) (тангенс острого угла \(\alpha\) в прямоугольном треугольнике)
                &mdash; это дробь \( \displaystyle\frac{"{противолежащий~катет}{прилежащий~катет}"} \). 
                </li>
                <li>
                \(\ctg{"{\\alpha}"}\) (котангенс острого угла \(\alpha\) в прямоугольном треугольнике)
                &mdash; это дробь \( \displaystyle\frac{"{прилежащий~катет}{противолежащий~катет}"} \). 
                </li>
                <li>
                    1 радиан &mdash; это величина центрального угла, опирающегося на дугу,
                    длина которой равна радиусу окружности 
                </li>
                <li>
                    \( \cos{"{a}"},~\sin{"{a}"} \) (косинус числа \(a\), синус числа \(a\) )
                    &mdash; это координаты точки на тригонометрической окружности, в которой находится число \(a\).
                </li>
                <li>
                    \(\tg{"{a}"}\) (тангенс числа \(a\)) &mdash; это дробь \(\displaystyle\frac{"{\\sin{a}}{\\cos{a}}"}\).
                </li>
                <li>
                    \(\ctg{"{a}"}\) (котангенс числа \(a\)) &mdash; это дробь \(\displaystyle\frac{"{\\cos{a}}{\\sin{a}}"}\).
                </li>
            </ol>
        </Block>
        <Block title="Табличные углы" link={angleTable} beginRef={beginRef}>
            <table className="angle-table smaller-xx">
                <tbody>
                    <tr>
                        <td>Градусы</td>
                        <td>\(\degree{"{30}"}\)</td>
                        <td>\(\degree{"{45}"}\)</td>
                        <td>\(\degree{"{60}"}\)</td>
                    </tr>
                    <tr>
                        <td>Радианы</td>
                        <td>\(\displaystyle\frac{"{\\pi}{6}"}\)</td>
                        <td>\(\displaystyle\frac{"{\\pi}{4}"}\)</td>
                        <td>\(\displaystyle\frac{"{\\pi}{3}"}\)</td>
                    </tr>
                    <tr>
                        <td>\(\sin\)</td>
                        <td>\( \displaystyle\frac{"{1}{2}"} \)</td>
                        <td>\( \displaystyle\frac{"{1}{\\sqrt{2}}"} \)</td>
                        <td>\( \displaystyle\frac{"{\\sqrt{3}}{2}"} \)</td>
                    </tr>
                    <tr>
                        <td>\(\cos\)</td>
                        <td>\( \displaystyle\frac{"{\\sqrt{3}}{2}"} \)</td>
                        <td>\( \displaystyle\frac{"{1}{\\sqrt{2}}"} \)</td>
                        <td>\( \displaystyle\frac{"{1}{2}"} \)</td>
                    </tr>
                    <tr>
                        <td>\(\tg{"{}"}\)</td>
                        <td>\( \displaystyle\frac{"{1}{\\sqrt{3}}"} \)</td>
                        <td>\( 1 \)</td>
                        <td>\( \sqrt{"{3}"} \)</td>
                    </tr>
                    <tr>
                        <td>\(\ctg{"{}"}\)</td>
                        <td>\( \sqrt{"{3}"} \)</td>
                        <td>\( 1 \)</td>
                        <td>\( \displaystyle\frac{"{1}{\\sqrt{3}}"} \)</td>
                    </tr>
                </tbody>
            </table>
        </Block>
        <Block title="Тригонометрическая окружность" beginRef={beginRef} link={circle}>
            <ul className="def-list">
                <li>Центр (0; 0), радиус 1.</li>
                <li>Начало отсчёта &ndash; число 0, точка (1; 0).</li>
                <li>Направление &laquo;вперёд&raquo; &ndash; против часовой стрелки.</li>
                <li>Длина окружности \(2\pi\).</li>
                <li>Центральный угол равен дуге, на которую опирается.</li>
            </ul>
        </Block>
        <Block title="Формула приведения" link={ghost} beginRef={beginRef}>

        </Block>
        <Block title="Свойства" link={formulas} beginRef={beginRef}>
            <Props className="x-smaller-xx">
                <tr>
                    <td>\(\sin^2{"{a}"} + \cos^2{"{b}"}\)</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>\(\sin^2{"{a}"} + \cos^2{"{b}"}\)</td>
                </tr>
                <tr>
                    <td>\(\sin^2{"{a}"}\)</td>
                    <td>\( 1 - \cos^2{"{a}"} \)</td>
                </tr>
                <tr>
                    <td>\(\cos^2{"{b}"}\)</td>
                    <td>\( 1 - \sin^2{"{a}"} \)</td>
                </tr>
                <tr>
                    <td>\( \sin{"{a}"} \)</td>
                    <td>\( 2 \cdot \sin{"{\\frac{a}{2}}"} \cdot \cos{"{\\frac{a}{2}}"}\)</td>
                </tr>
                <tr>
                    <td>\( 2 \cdot \sin{"{a}"} \cdot \cos{"{a}"} \)</td>
                    <td>\( \sin{"{2a}"} \)</td>
                </tr>
                <tr>
                    <td>\( \cos{"{a}"} \)</td>
                    <td>\( \cos^2{"{\\frac{a}{2}}"} - \sin^2{"{\\frac{a}{2}}"} \)</td>
                </tr>
                <tr>
                    <td>\( \cos{"{a}"} \)</td>
                    <td>\( 1 - 2\sin^2{"{\\frac{a}{2}}"} \)</td>
                </tr>
                <tr>
                    <td>\( \cos{"{a}"} \)</td>
                    <td>\( 2\cos^2{"{\\frac{a}{2}}"} - 1 \)</td>
                </tr>
                <tr>
                    <td>\( \cos^2{"{a}"} - \sin^2{"{a}"} \)</td>
                    <td>\( \cos{"{2a}"} \)</td>
                    
                </tr>
                <tr>
                    
                    <td>\( 1 - 2\sin^2{"{a}"} \)</td>
                    <td>\( \cos{"{2a}"} \)</td>
                </tr>
                <tr>
                    
                    <td>\( 2\cos^2{"{a}"} - 1 \)</td>
                    <td>\( \cos{"{2a}"} \)</td>
                </tr>
                <tr>
                    
                    <td>\( \sin^2{"{a}"} \)</td>
                    <td>\( \displaystyle\frac{"{1-\\cos{2a}}{2}"} \)</td>
                </tr>
                <tr>
                    
                    <td>\( \cos^2{"{a}"} \)</td>
                    <td>\( \displaystyle\frac{"{1+\\cos{2a}}{2}"} \)</td>
                </tr>
                <tr>
                    <td>\( \sin{"{(a \\pm b)}"} \)</td>
                    <td className="mini-math">\( \sin{"{a}"} \cdot \cos{"{b}"} \pm \cos{"{a}"} \cdot \sin{"{b}"} \)</td>
                </tr>
                <tr>
                    <td className="mini-math">\( \sin{"{a}"} \cdot \cos{"{b}"} \pm \cos{"{a}"} \cdot \sin{"{b}"} \)</td>
                    <td>\( \sin{"{(a \\pm b)}"} \)</td>
                </tr>
                <tr>
                    <td>\( \cos{"{(a \\pm b)}"} \)</td>
                    <td className="mini-math">\( \cos{"{a}"} \cdot \cos{"{b}"} \mp \sin{"{a}"} \cdot \sin{"{b}"} \)</td>
                </tr>
                <tr>
                    <td className="mini-math">\( \cos{"{a}"} \cdot \cos{"{b}"} \pm \sin{"{a}"} \cdot \sin{"{b}"} \)</td>
                    <td>\( \cos{"{(a \\mp b)}"} \)</td>
                </tr>
            </Props>
        </Block>
        <Block title="Простейшие уравнения" link={equation} beginRef={beginRef}>
            
        </Block>
    </div>
    

}