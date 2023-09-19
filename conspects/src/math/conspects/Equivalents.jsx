import { useRef } from "react";
import { Spoiler } from "../../spoiler";
import { Title } from "../Title";
import { Content } from "../../Content";
import { Block } from "../../Block";
import { Props } from "../../Props";
import { ButtonBigSpoiler } from "../../buttons/ButtonBigSpoiler";
import { Cases } from "../../Cases";

export const Equivalents = () => {

    const equal = useRef();
    const notEqual = useRef();
    const more = useRef();
    const cases = useRef();
    const beginRef = useRef();

    const Equivalent = ({children}) => {
        const main = Array.isArray(children) ? children[0] : children;
        const cases = Array.isArray(children) ? children[1] : <></>;
        return <div>
            <div className="frame">{main}</div>
            {
                !Array.isArray(children) ? <></>
                :
                <div className="equivalents-cases">
                    <Cases children={cases} />
                </div>

            }
        </div>
    }

    return <div ref={beginRef} className="equivalents">
        
        <Title>Равносильные переходы</Title>
        <Content>
            <li link={equal}>Уравнения \( ~\left(~\large = ~\right)\)</li>
            <li link={notEqual}>
                <div className="equivalents-content-container">
                    <div>&laquo;Антиравенства&raquo;</div>
                    <div>\( ~\left(~\large \neq ~\right) \)</div>
                </div>
            </li>
            <li link={more}>
                <div className="equivalents-content-container">
                    <div>Неравенства</div>
                    <div >\( ~\left(~\large {">"},~{"<"},~\geqslant,~\leqslant ~\right) \)</div>
                </div>
            </li>
            <li link={cases}>Логика \(\left(~\large {"\\{"},~{"["} ~\right) \)</li>
        </Content>
        <Block title={"Уравнения \\( ~\\left(~\\large = ~\\right)\\)"} beginRef={beginRef} link={equal}>
            <ol className="def-list">
                <li>
                    <Equivalent>
                        <div className="equivalents-vertical xx-smaller-xx">
                            <div style={{maxWidth:"100%"}} className="">\( {"a_nx^n + a_{n-1}x^{n-1} + \\ldots + a_1x + a_0 = 0 "} \)</div>
                            <div className="equivalents-arrow">\( \Updownarrow \)</div>
                            <div>\( P_1(x) \cdot P_2(x) \cdot \ldots \cdot P_m(x) = 0 \)</div>
                            <div className="equivalents-arrow">\( \Updownarrow \)</div>
                            <div>\( {"\\union{ P_1(x) = 0 \\\\ P_2(x) = 0 \\\\ \\ldots \\\\ P_m(x) = 0 }"} \)</div>
                        </div>
                        <Props>
                            <tr>
                                <td>\(ax^2 + bx + c = 0\)</td>
                                <td>\( \union{"{x = x_1 \\\\ x = x_2}"} \)</td>
                            </tr>
                            <tr>
                                <td>\( x^{"{2n}"} = a^{"{2n}"} \)</td>
                                <td>\( \union{"{x = a \\\\ x = -a}"} \)</td>
                            </tr>
                        </Props>
                    </Equivalent>
                </li>
                <li>
                    <Equivalent>
                        <div className="flex-mobile flex-align">
                            <div>
                                \( \displaystyle\frac{"{a_1 \\cdot a_2 \\cdot \\ldots \\cdot a_n}{b_1 \\cdot b_2 \\cdot \\ldots \\cdot b_m}"} = 0 \)
                            </div>
                            <div className="mobile-arrow">\( \LR \)</div>
                            <div>
                                \({`
                                    \\cases{
                                        \\union{
                                            a_1 = 0 \\\\
                                            a_2 = 0 \\\\
                                            \\ldots \\\\
                                            a_n = 0
                                        } \\\\~\\\\
                                        ограничения~из~a_i \\\\~\\\\
                                        b_1 \\neq 0 \\\\
                                        b_2 \\neq 0 \\\\
                                        \\ldots \\\\
                                        b_m \\neq 0
                                    }
                                `}\)
                            </div>
                        </div>
                        <Props className="x-smaller-xx">
                            <tr>
                                <td>\( a \cdot b = 0 \)</td>
                                <td>\( {`
                                    \\union{
                                        \\cases{
                                            a  = 0 \\\\
                                            ограничения ~из~b
                                        } \\\\
                                        \\cases{
                                            b = 0 \\\\
                                            ограничения~из~a
                                        }
                                    }
                                `} \)</td>
                            </tr>
                            <tr>
                                <td>
                                    \( \displaystyle\frac{"{a}{b}"} = 0 \)
                                </td>
                                <td>
                                    \( \cases{"{a = 0 \\\\ b \\neq 0}"} \)
                                </td>
                            </tr>
                        </Props>
                    </Equivalent>
                </li>
                <li>
                    <Equivalent>
                        <div className="smaller-xx">
                            \( \displaystyle \frac{"{a}{b}"} = \frac{"{c}{d}"} \LR 
                                    \cases{"{a \\cdot d = b \\cdot c \\\\ b \\neq 0 \\\\ d \\neq 0}"}
                             \)
                        </div>
                    </Equivalent>
                </li>
                <li>
                    <Equivalent>
                        <div className="smaller-xx">
                            \(
                                \sqrt[2n]{"{a}"} = b \LR \cases{"{a = b^{2n} \\\\ b \\geqslant 0}"}
                            \)
                        </div>
                        <Props>
                            <tr>
                                <td>\( \sqrt{"{a}"} = b \)</td>
                                <td>\( \cases{"{a = b^2 \\\\ b \\geqslant 0}"} \)</td>
                            </tr>
                        </Props>
                    </Equivalent>
                </li>
                <li>
                    <Equivalent>
                        <div className="equivalents-vertical x-smaller-xx">
                            <div>
                                \(
                                    \monotone{"{(a)}"} = \monotone{"{(b)}"}
                                \)
                            </div>
                            <div className="equivalents-arrow">\(\Updownarrow\)</div>
                            <div>
                                \(
                                    \cases{`{
                                        a = b \\\\
                                        ограничение ~ на ~ a ~ или ~ b
                                    }`}
                                \)
                            </div>
                        </div>
                        <Props>
                            <tr>
                                <td>
                                    \( c^a = c^b \)
                                </td>
                                <td>
                                    \( a = b\)
                                </td>
                                <td className="__know">
                                    \(
                                        \cases{`{
                                            c > 0 \\\\
                                            c \\neq 1
                                        }`}
                                    \)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    \( \log_c{"{a}"} = \log_c{"{b}"} \)
                                </td>
                                <td>
                                    \( \cases{"{a = b \\\\ a > 0}"} \)
                                </td>
                                <td className="__know">
                                    \(
                                        \cases{`{
                                            c > 0 \\\\
                                            c \\neq 1
                                        }`}
                                    \)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    \( \sqrt[c]{"{a}"} = \sqrt[c]{"{b}"} \)
                                </td>
                                <td>
                                    \( \cases{"{a = b \\\\ a \\geqslant 0}"} \)
                                </td>
                                <td className="__know">
                                    \(
                                        \cases{"{c \\in \\NN \\\\ c \\div 2}"}
                                    \)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    \( \sqrt[c]{"{a}"} = \sqrt[c]{"{b}"} \)
                                </td>
                                <td>\( a = b \)</td>
                                <td className="__know">
                                \(
                                        \cases{"{c \\in \\NN \\\\ c \\ndiv 2}"}
                                    \)
                                </td>
                            </tr>
                            <tr>
                                <td>\( a^c = b^c \)</td>
                                <td>\(a = b\)</td>
                                <td className="__know">
                                    \(
                                        \cases{"{c \\in \\NN \\\\ c \\ndiv 2}"}
                                    \)
                                </td>
                            </tr>
                        </Props>
                    </Equivalent>
                </li>
                <li>
                    <Spoiler>
                        <ButtonBigSpoiler opened={false}>Однородные уравнения</ButtonBigSpoiler>
                        <div>
                            <Props mobile={true} className="smaller xxx-smaller-xx">
                                <tr>
                                    <td>\( a \cdot m^x = b \cdot n^x \)</td>
                                    <td>\( a \cdot \displaystyle \left( \frac{"{m}{n}"} \right)^x = b \)</td>
                                    <td className="__always"></td>
                                </tr>
                                <tr>
                                    <td className=" pc-row-m-col">
                                        <div>
                                        \(
                                            a \cdot \left(m^2 \right)^x +
                                            b \cdot (mn)^x ~+
                                            
                                        \)
                                        </div>
                                        <div className="before-plus">
                                        \(
                                             
                                            ~c \cdot \left( n^2 \right)^x = 0
                                        \)
                                        </div>
                                    </td>
                                    <td className="micro-math">
                                        \( \displaystyle
                                            a \cdot \left(\left( \frac{"{m}{n}"} \right)^x\right)^2
                                            + b \cdot \left( \frac{"{m}{n}"} \right)^x 
                                            + c = 0
                                        \)
                                    </td>
                                    <td className="__always"></td>
                                </tr>
                                <tr>
                                    <td>
                                        \(
                                            a \cdot \sin{"{x}"} = b \cdot \cos{"{x}"}
                                        \)
                                    </td>
                                    <td>
                                        \( a \cdot \tg{"{x}"} = b \)
                                    </td>
                                    <td className="__know">\( a \neq 0 \)</td>
                                </tr>
                                <tr>
                                    <td>
                                        \(
                                            a \cdot \sin{"{x}"} = b \cdot \cos{"{x}"}
                                        \)
                                    </td>
                                    <td>
                                        \( a = b \cdot \ctg{"{x}"} \)
                                    </td>
                                    <td className="__know">\( b \neq 0 \)</td>
                                </tr>
                                <tr>
                                    <td className=" pc-row-m-col">
                                        <div>
                                        \(
                                            a\cdot\sin^2{"{x}"}
                                            + b \cdot \sin{"{x}"} \cdot \cos{"{x}"}
                                            ~+
                                        \)
                                        </div>
                                        <div className="before-plus">
                                            \(~c \cdot \cos^2{"{x}"} = 0\)
                                        </div>
                                    </td>
                                    <td className="">
                                        \(
                                            a \cdot \operatorname{"{tg^2}"}{"{x}"}
                                            + b \cdot \tg{"{x}"}
                                            +c = 0    
                                        \)
                                    </td>
                                    <td className="__know">\( a \neq 0 \)</td>
                                </tr>
                                <tr>
                                    <td className=" pc-row-m-col">
                                        <div>
                                        \(
                                            a\cdot\sin^2{"{x}"}
                                            + b \cdot \sin{"{x}"} \cdot \cos{"{x}"}
                                            ~+
                                        \)
                                        </div>
                                        <div className="before-plus">
                                            \(~c \cdot \cos^2{"{x}"} = 0\)
                                        </div>
                                    </td>
                                    <td className="">
                                        \(
                                            a 
                                            + b \cdot \ctg{"{x}"}
                                            +c \cdot \operatorname{"{ctg^2}"}{"{x}"} = 0    
                                        \)
                                    </td>
                                    <td className="__know">\( c \neq 0 \)</td>
                                </tr>
                            </Props>
                        </div>
                        <ButtonBigSpoiler opened={true}>Однородные уравнения</ButtonBigSpoiler>
                    </Spoiler>
                </li>
            </ol>
        </Block>
        <Block title={<div>«Антиравенства»<span>\( ~\left(\large ~\neq ~\right) \)</span></div>} link={notEqual} beginRef={beginRef}>
                <ol className="def-list">
                    <li className="x-smaller-xx">
                        <Equivalent>
                            {`\\(
                                a_1 \\cdot a_2 \\cdot \\ldots \\cdot a_n \\neq 0
                                \\LR
                                \\cases{
                                    a_1 \\neq 0 \\\\
                                    a_2 \\neq 0 \\\\
                                    \\ldots \\\\
                                    a_n \\neq 0
                                }
                            \\)`}
                        </Equivalent>
                    </li>
                    <li className="">
                    <Equivalent>
                        <div className="equivalents-vertical x-smaller-xx">
                            <div>
                                \(
                                    \monotone{"{(a)}"} \neq \monotone{"{(b)}"}
                                \)
                            </div>
                            <div className="equivalents-arrow">\(\Updownarrow\)</div>
                            <div>
                                \(
                                    \cases{`{
                                        a \\neq b \\\\
                                        ограничение ~ на ~ a \\\\
                                        ограничение ~ на ~ b
                                    }`}
                                \)
                            </div>
                        </div>
                        <Props>
                            <tr>
                                <td>
                                    \( c^a \neq c^b \)
                                </td>
                                <td>
                                    \( a \neq b\)
                                </td>
                                <td className="__know">
                                    \(
                                        \cases{`{
                                            c > 0 \\\\
                                            c \\neq 1
                                        }`}
                                    \)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    \( \log_c{"{a}"} \neq \log_c{"{b}"} \)
                                </td>
                                <td>
                                    \( \cases{"{a \\neq b \\\\ a > 0 \\\\ b > 0}"} \)
                                </td>
                                <td className="__know">
                                    \(
                                        \cases{`{
                                            c > 0 \\\\
                                            c \\neq 1
                                        }`}
                                    \)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    \( \sqrt[c]{"{a}"} \neq \sqrt[c]{"{b}"} \)
                                </td>
                                <td>
                                    \( \cases{"{a \\neq b \\\\ a \\geqslant 0 \\\\ b \\geqslant 0}"} \)
                                </td>
                                <td className="__know">
                                    \(
                                        \cases{"{c \\in \\NN \\\\ c \\div 2}"}
                                    \)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    \( \sqrt[c]{"{a}"} \neq \sqrt[c]{"{b}"} \)
                                </td>
                                <td>\( a \neq b \)</td>
                                <td className="__know">
                                \(
                                        \cases{"{c \\in \\NN \\\\ c \\ndiv 2}"}
                                    \)
                                </td>
                            </tr>
                            <tr>
                                <td>\( a^c \neq b^c \)</td>
                                <td>\(a \neq b\)</td>
                                <td className="__know">
                                    \(
                                        \cases{"{c \\in \\NN \\\\ c \\ndiv 2}"}
                                    \)
                                </td>
                            </tr>
                        </Props>
                    </Equivalent>
                </li>
                </ol>
        </Block>
        <Block title={<div>Неравенства<span>{" \\( ~\\left(~\\large >,~<,~\\geqslant,~\\leqslant ~\\right) \\)"}</span> </div> } link={more} beginRef={beginRef}>
                <ol className="def-list x-smaller-xx equivalents-intervals">
                    <li>
                        <Spoiler>
                            <ButtonBigSpoiler opened={false}>Метод интервалов</ButtonBigSpoiler>
                            <div className="frame">
                                <h3>Нужный вид:</h3>
                                <ol>
                                    <li>Справа 0</li>
                                    <li>Слева произведение</li>
                                    <li>Каждый множитель имеет вид {'\\((x - c)\\)'}</li>
                                </ol>
                                <h3>Применение:</h3>
                                <ol>
                                    <li>Рисуется ось {'\\(Ox\\)'}</li>
                                    <li>
                                        Отмечаются точками нули множителей:
                                        <ul>
                                            <li>Если множитель только в числителе и знак неравенства нестрогий
                                                &ndash; точка закрашенная, иначе выколотая
                                            </li>
                                            <li>
                                                Если множитель повторяется чётное число раз &ndash; точка со стрелочкой
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Справа сверху ведётся непрерывная кривая
                                        <ul>
                                            <li>Через точки без стрелочек проходит</li>
                                            <li>От точек со стрелочками отражается</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Расставляются знаки на интервалах
                                        <ul>
                                            <li>Кривая сверху &ndash; знак {'\\(\\large +\\)'}</li>
                                            <li>Кривая снизу &ndash; знак {'\\(\\large -\\)'}</li>
                                        </ul>
                                    </li>
                                    <li>Закрашиваются соответствующие знаку неравенства интервалы</li>
                                    <li>Считается количество закрашенных участков</li>
                                    <li>
                                        Закрашенные участки записываются в виде уравнений или неравенств
                                        <br /> с использованием совокупности, если их больше 1
                                    </li>
                                </ol>
                            </div>
                            <ButtonBigSpoiler opened={true}>Метод интервалов</ButtonBigSpoiler>
                        </Spoiler>
                    </li>
                    <li>
                        <Spoiler recursive={true} containsMath={true}>
                            <ButtonBigSpoiler opened={false}>Снятие функции</ButtonBigSpoiler>
                            <ul className="def-list dot-list xxx-smaller-xx">
                                <li>
                                    <Equivalent>
                                        <div className="equivalents-vertical">
                                            <div>
                                                \(
                                                    \increasing{"{(a)}"} \vee \increasing{"{(b)}"}
                                                \)
                                            </div>
                                            <div className="equivalents-arrow">\(\Updownarrow\)</div>
                                            <div>
                                                \(
                                                    \cases{`{
                                                        a \\vee b \\\\
                                                        ограничение ~ на ~ a \\\\
                                                        ограничение ~ на ~ b 
                                                    }`}
                                                \)
                                            </div>
                                        </div>
                                        <Props>
                                            <tr>
                                                <td>
                                                    \( c^a \vee c^b \)
                                                </td>
                                                <td>
                                                    \( a \vee b\)
                                                </td>
                                                <td className="__know">
                                                    \(
                                                        {"c > 1"}
                                                    \)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    \( \log_c{"{a}"} \vee \log_c{"{b}"} \)
                                                </td>
                                                <td>
                                                    \( \cases{"{a \\vee b \\\\ \\min{(a,b)} > 0}"} \)
                                                </td>
                                                <td className="__know">
                                                    \(
                                                        {"c > 1"}
                                                    \)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    \( \sqrt[c]{"{a}"} \vee \sqrt[c]{"{b}"} \)
                                                </td>
                                                <td>
                                                    \( \cases{"{a \\vee b \\\\ \\min{(a,b)} \\geqslant 0}"} \)
                                                </td>
                                                <td className="__know">
                                                    \(
                                                        \cases{"{c \\in \\NN \\\\ c \\div 2}"}
                                                    \)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    \( \sqrt[c]{"{a}"} \vee \sqrt[c]{"{b}"} \)
                                                </td>
                                                <td>\( a \vee b \)</td>
                                                <td className="__know">
                                                \(
                                                        \cases{"{c \\in \\NN \\\\ c \\ndiv 2}"}
                                                    \)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>\( a^c \vee b^c \)</td>
                                                <td>\(a \vee b\)</td>
                                                <td className="__know">
                                                    \(
                                                        \cases{"{c \\in \\NN \\\\ c \\ndiv 2}"}
                                                    \)
                                                </td>
                                            </tr>
                                        </Props>
                                    </Equivalent>
                                </li>
                                <li>
                                    <Equivalent>
                                        <div className="equivalents-vertical ">
                                            <div>
                                                \(
                                                    \decreasing{"{(a)}"} \vee \decreasing{"{(b)}"}
                                                \)
                                            </div>
                                            <div className="equivalents-arrow">\(\Updownarrow\)</div>
                                            <div>
                                                \(
                                                    \cases{`{
                                                        a \\land b \\\\
                                                        ограничение ~ на ~ a \\\\
                                                        ограничение ~ на ~ b 
                                                    }`}
                                                \)
                                            </div>
                                        </div>
                                        <Props>
                                            <tr>
                                                <td>
                                                    \( c^a \vee c^b \)
                                                </td>
                                                <td>
                                                    \( a \land b\)
                                                </td>
                                                <td className="__know">
                                                    \(
                                                        {"0 < c < 1"}
                                                    \)
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    \( \log_c{"{a}"} \vee \log_c{"{b}"} \)
                                                </td>
                                                <td>
                                                    \( \cases{"{a \\land b \\\\ \\min{(a,b)} > 0}"} \)
                                                </td>
                                                <td className="__know">
                                                    \(
                                                        {"0 < c < 1"}
                                                    \)
                                                </td>
                                            </tr>
                                        </Props>
                                    </Equivalent>
                                </li>
                            </ul>
                            <ButtonBigSpoiler opened={true}>Снятие функции</ButtonBigSpoiler>
                        </Spoiler>
                    </li>
                    <li>
                        <Spoiler>
                            <ButtonBigSpoiler opened={false}><span className="equivalents-tight-text">Метод рационализации</span></ButtonBigSpoiler>
                            <div className="frame">
                                <h3>Нужный вид:</h3>
                                <ol>
                                    <li>Справа 0</li>
                                    <li>Слева множители</li>
                                    <li>
                                        Выбранный множитель представлен в виде
                                        разности одинаковой монотонной функции
                                    </li>
                                </ol>
                                <h3>Применение:</h3>
                                <ul className="def-list dot-list smaller xxxx-smaller-xx">
                                    <li>
                                        <Equivalent>
                                            <div className="equivalents-vertical">
                                                <div>
                                                    {`\\(
                                                        \\left(\\increasing{(a)}-\\increasing{(b)}\\right) \\cdot A \\vee 0
                                                        
                                                    \\)`}
                                                </div>
                                                <div className="equivalents-arrow">\( \Updownarrow \)</div>
                                                <div>
                                                    {`\\(
                                                        \\cases{(a-b)\\cdot A \\vee 0 \\\\ ограничение~на~a \\\\ ограничение~на~b}
                                                    \\)`}
                                                </div>
                                            </div>
                                        </Equivalent>
                                    </li>
                                    <li>
                                        <Equivalent>
                                            <div className="equivalents-vertical math">
                                                <div>
                                                    {`\\(
                                                        \\left(\\decreasing{(a)}-\\decreasing{(b)}\\right) \\cdot A \\vee 0
                                                        
                                                    \\)`}
                                                </div>
                                                <div className="equivalents-arrow">\( \Updownarrow \)</div>
                                                <div>
                                                    {`\\(
                                                        \\cases{(b-a)\\cdot A \\vee 0 \\\\ ограничение~на~a \\\\ ограничение~на~b}
                                                    \\)`}
                                                </div>
                                            </div>
                                        </Equivalent>
                                    </li>
                                </ul>
                            </div>
                            <ButtonBigSpoiler opened={true}><span className="equivalents-tight-text">Метод рационализации</span></ButtonBigSpoiler>
                        </Spoiler>
                    </li>
                </ol>
        </Block>
        <Block title={"Логика \\(\\left(~\\large \\{,~[ ~\\right) \\)"} link={cases} beginRef={beginRef}>
                <Props className="smaller x-smaller-xx">
                    <tr>
                        <td>\( {"\\cases{A \\\\ A}"} \)</td>
                        <td>\(A\)</td>
                        <td className="__always"></td>
                    </tr>
                    <tr>
                        <td>\( {"\\union{A \\\\ A}"} \)</td>
                        <td>\(A\)</td>
                        <td className="__always"></td>
                    </tr>
                    <tr>
                        <td>\({"\\cases{\\cases{A \\\\ B} \\\\ C}"}\)</td>
                        <td>\( {"\\cases{A \\\\ B \\\\ C}"} \)</td>
                        <td className="__always"></td>
                    </tr>
                    <tr>
                        <td>\( {"\\cases{A \\\\ B \\\\ C}"} \)</td>
                        <td>\({"\\cases{\\cases{A \\\\ B} \\\\ C}"}\)</td>
                        <td className="__always"></td>
                    </tr>
                    <tr>
                        <td>\({"\\union{\\union{A \\\\ B} \\\\ C}"}\)</td>
                        <td>\( {"\\union{A \\\\ B \\\\ C}"} \)</td>
                        <td className="__always"></td>
                    </tr>
                    <tr>
                        <td>\( \cases{"{\\union{A \\\\ B} \\\\ C}"} \)</td>
                        <td>\( \union{"{\\cases{A \\\\ C} \\\\ \\cases{B \\\\ C}}"} \)</td>
                        <td className="__always"></td>
                    </tr>
                    <tr>
                        <td>\( ложь \)</td>
                        <td>\(x \in \varnothing\)</td>
                        <td className="__always"></td>
                    </tr>
                    <tr>
                        <td>\(истина\)</td>
                        <td>\(x \in \operatorname{"{ОДЗ}{}"}\)</td>
                        <td className="__always"></td>
                    </tr>
                    <tr>
                        <td>\( \cases{"{A \\\\ x \\in \\varnothing}"} \)</td>
                        <td>\(x \in \varnothing\)</td>
                        <td className="__always"></td>
                    </tr>
                    <tr>
                        <td>\( \cases{"{A \\\\ x \\in \\RR}"} \)</td>
                        <td>\(A\)</td>
                        <td className="__always"></td>
                    </tr>
                    <tr>
                        <td>\( \union{"{A \\\\ x \\in \\varnothing}"} \)</td>
                        <td>\(A\)</td>
                        <td className="__always"></td>
                    </tr>
                    <tr>
                        <td>\( \union{"{A \\\\ x \\in \\RR}"} \)</td>
                        <td>\(x \in \RR\)</td>
                        <td className="__always"></td>
                    </tr>
                    <tr>
                        <td>\( \cases{"{a = b \\\\ F(a)}"} \)</td>
                        <td>\( \cases{"{a = b \\\\ F(b)}"} \)</td>
                        <td className="__always"></td>
                    </tr>
                    <tr>
                        <td>\(F(x,~f(x))\)</td>
                        <td>\(\cases{"{F(x,~const) \\\\ ограничения~из~f(x)}"}\)</td>
                        <td className="__know"><div className="smaller">\(F(x,~f(x)) \Rightarrow F(x,~const)\)</div></td>
                    </tr>
                    <tr>
                        <td>\( \cases{"{A \\\\ B}"} \)</td>
                        <td>\( A \)</td>
                        <td className="__know">\( A \Rightarrow B \)</td>
                    </tr>
                    <tr>
                        <td>\( \union{"{A \\\\ B}"} \)</td>
                        <td>\( B \)</td>
                        <td className="__know">\(A \Rightarrow B\)</td>
                    </tr>
                    <tr>
                        <td>\(A\)</td>
                        <td>
                            \(
                                {`
                                \\union{
                                    \\cases{
                                        случай_1 \\\\
                                        A
                                    } \\\\
                                    \\cases{
                                        случай_2 \\\\
                                        A
                                    } \\\\
                                    \\ldots \\\\
                                    \\cases{
                                        случай_n \\\\
                                        A
                                    }
                                }
                                `}
                            \)
                        </td>
                        <td className="__know">, что случаи все</td>
                    </tr>
                </Props>
        </Block>
    </div>

}
