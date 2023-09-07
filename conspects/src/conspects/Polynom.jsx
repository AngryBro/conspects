import { useRef } from "react";
import { Content } from "../Content";
import { Title } from "../Title";
import { Block } from "../Block";
import { Props } from "../Props";

export const Polynom = () => {
    
    const defRef = useRef();
    const fsuRef = useRef();
    const multRef = useRef();
    const hornerRef = useRef();
    const torkRef = useRef();
    const beginRef = useRef();

    return <div ref={beginRef}>
        <Title>Полином</Title>
        <Content>
            <li link={defRef}>Определение</li>
            <li link={fsuRef}>Формулы сокращённого умножения</li>
            <li link={multRef}>Общий множитель</li>
            <li link={hornerRef}>Схема Горнера</li>
            <li link={torkRef}>Теорема о рациональных корнях</li>
        </Content> 
        <Block title="Определение" link={defRef} beginRef={beginRef}>
            <p>
            Полином (с одной переменной) степени \(n\) это выражение вида:
                <div className="math">
                    $$ a_0 + a_1 x + a_2 x^2 + \ldots + a_n x^n. $$
                </div>
            </p>
            <p>
                Полином (с \(m\) переменными) степени \(n\) это выражение вида:
                <div className="math">
                    $$ \operatorname{`{sum}{`}\left( a_i \cdot x_1^{`{k_{i,1}}`} \cdot x_2^{`{k_{i,2}}`} \cdot \ldots \cdot x_m^{`{k_{i,m}}`}  \right){"}"}, $$
                </div>
            где <span className="math">\({`k_{i,1} + k_{i,2}`} + \ldots + {`k_{i,m}`} = n.\)</span>
            </p>
        </Block>
        <Block title="Формулы сокращённого умножения" link={fsuRef} beginRef={beginRef}>
            <Props>
                <tr>
                    <td>\( (a \pm b)^2 \)</td>
                    <td>\( a^2 \pm 2ab + b^2 \)</td>
                </tr>
                <tr>
                    <td>\( a^2 \pm 2ab + b^2 \)</td>
                    <td>\( (a \pm b)^2 \)</td>
                </tr>
                <tr>
                    <td>\( a^2 - b^2 \)</td>
                    <td>\( (a-b)(a+b) \)</td>
                </tr>
                <tr>
                    <td>\( (a-b)(a+b) \)</td>
                    <td>\( a^2 - b^2 \)</td>
                </tr>
                <tr>
                    <td>\( (a \pm b)^3 \)</td>
                    <td>\( a^3 \pm b^3 \pm 3ab (a \pm b) \)</td>
                </tr>
                <tr>
                    <td>\( a^3 \pm b^3 \)</td>
                    <td>\( (a \pm b)\left( a^2 \mp ab + b^2 \right) \)</td>
                </tr>
            </Props>
        </Block>
        <Block title="Общий множитель" link={multRef} beginRef={beginRef}>
            <Props>
                <tr>
                    <td>\( b \cdot \left(a_1 + a_2 + \ldots + a_n \right) \)</td>
                    <td>\( b \cdot a_1 + b \cdot a_2 + \ldots + b \cdot a_n \)</td>
                </tr>
                <tr>
                    <td>\( b \cdot a_1 + b \cdot a_2 + \ldots + b \cdot a_n \)</td>
                    <td>\( b \cdot \left(a_1 + a_2 + \ldots + a_n \right) \)</td>
                </tr>
            </Props>
        </Block>
        <Block title="Схема Горнера" link={hornerRef} beginRef={beginRef}>
            <p>
                Дан полином <span className="math">\( P(x) = a_n x^n + a_{`{n-1}`} x^{"{n-1}"} + \ldots \) \( + a_1 x + a_0, \)</span>
                требуется вычислить \(P(b)\).
            </p>
            <p>
                <div className="long-container">
                    <table className="horner-table math">
                        <tbody>
                            <tr className="border">
                                <td>\(x\)</td>
                                <td>\(a_n\)</td>
                                <td>\(a_{"{n-1}"}\)</td>
                                <td>\(a_{"{n-2}"}\)</td>
                                <td></td>
                                <td>\(a_2\)</td>
                                <td>\(a_1\)</td>
                                <td>\(a_0\)</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>\( b \cdot a_n + a_{"{n-1}"} \)</td>
                                <td>\( b \cdot b_{"{n-1}"} + a_{"{n-2}"} \)</td>
                                <td></td>
                                <td></td>
                                <td>\(b \cdot b_2 + a_1\)</td>
                                <td>\(b \cdot b_1 + a_0\)</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td className="rotated">=</td>
                                <td className="rotated">=</td>
                                <td></td>
                                <td></td>
                                <td className="rotated">=</td>
                                <td className="rotated">=</td>
                            </tr>
                            <tr>
                                <td>\(b\)</td>
                                <td>\(a_n\)</td>
                                <td>\( b_{"{n-1}"} \)</td>
                                <td>\( b_{"{n-2}"} \)</td>
                                <td>...</td>
                                <td>\(b_2\)</td>
                                <td>\(b_1\)</td>
                                <td>\( b_0 \)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </p>
            <p>
                \( P(b) = b_0. \)
            </p>
            <p>
                Если \(P(b) = 0\), то:
                <div className="micro-math">
                    $$ P(x) = (x-b) \cdot \left( a_n x^{"{n-1}"} + b_{"{n-1}"}x^{"{n-2}"} + \ldots +  b_2 x + b_1\right). $$
                </div>
            </p>
        </Block>
        <Block title="Теорема о рациональных корнях" link={torkRef} beginRef={beginRef}>
            <p> 
                <div className="math">
                    \( P(x) = a_n x^n + \ldots + a_1x + a_0 \)
                </div>
            </p>
            <p>
                <div className="math">
                    \(
                    \cases{"{"}
                        P\left(\frac{"{m}{n}"}\right) = 0 \\
                        \operatorname{"{НОД}{"}(m,n){"}"} = 1
                    {"}"} \Rightarrow
                    \cases{"{"}
                        a_0 \div m \\
                        a_n \div n
                    {"}"}
                    \)
                </div>
            </p>
        </Block>
    </div>
}