import { useRef } from "react"
import { Title } from "../Title";
import { Content } from "../../Content";
import { Block } from "../../Block";
import { General } from "../../General";

export const Probability = () => {
    
    const main = useRef();
    const statistic = useRef();
    const classic = useRef();
    const not = useRef();
    const or = useRef();
    const and = useRef();
    const full = useRef();
    const bernully = useRef();
    const bias = useRef();
    const conditional = useRef();
    const defs = useRef();
    
    return <div ref={main}>
        <Title>Теория вероятностей</Title>
        <Content>
            <li link={defs}>Обозначения и определения</li>
            <li link={statistic}>Статистическое определение</li>
            <li link={classic}>Классическое определение</li>
            <li link={not}>Противоположное событие</li>
            <li link={or}>Объединение событий</li>
            <li link={and}>Пересечение событий</li>
            <li link={conditional}>Условная вероятность</li>
            <li link={bias}>Формула Байеса</li>
            <li link={full}>Формула полной вероятности</li>
            <li link={bernully}>Формула Бернулли</li>
        </Content>
        <Block title="Обозначения и определения" link={defs} beginRef={main}>
            <div className="frame">
                <ul>
                    <li><b>Испытание</b> &mdash; действие, в результате которого могут возникать случайные события.</li>
                    <li>\(P(A)\) &mdash; вероятность события \(A\).</li>
                    <li>\(\overline{"{A}"}\) &mdash; событие, противоположное событию \(A\).</li>
                    <li>\(A \cup B\) &mdash; событие, при котором происходит хотя бы одно из событий \(A\) или \(B\).</li>
                    <li>\(A \cap B\) &mdash; событие при котором происходят все события и \(A\) и \(B\).</li>
                    <li>\( C_n^k = \displaystyle \frac{"{n!}{(n-k)!k!}"} \) &mdash; количество способов выбрать \(k\) элементов из \(n\).</li>
                </ul>
            </div>
        </Block>
        <Block title="Статистическое определение" link={statistic} beginRef={main}>
            <div className="frame">
                \( P(A) \approx \displaystyle F(A) = \frac{"{m}{n}"} \)
            </div>
            <ul>
                <li>\(F(A)\) &mdash; частота события \(A\).</li>
                <li>\(n\) &mdash; фактическое количество раз проведения испытания.</li>
                <li>\(m\) &mdash; фактическое количество раз появления события \(A\).</li>
            </ul>
        </Block>
        <Block title="Классическое определение" link={classic} beginRef={main}>
            <div className="frame">
                \( P(A) = \displaystyle \frac{"{m}{n}"} \)
            </div>
            <ul>
                <li>\(n = |U|\) &mdash; количество равновозможных исходов испытания \(U\).</li>
                <li>\(m = |A|\) &mdash; количество тех исходов, из которых состоит событие \(A\).</li>
                <li>\(P(\varnothing) = 0\).</li>
                <li>\(P(U) = 1\).</li>
                <li>\( 0 \leqslant P(A) \leqslant 1 \).</li>
            </ul>
        </Block>
        <Block title="Противоположное событие" link={not} beginRef={main}>
            <div className="frame">
                \(P \left(\overline{"{A}"}\right) = 1 - P(A)\)
            </div>
        </Block>
        <Block title="Объединение событий" link={or} beginRef={main}>
        <div className="frame">
                <p className="p">
                    \( P(A \cup B) = P(A) + P(B) - P(A \cap B) \)
                </p>
                <General>
                    <div className="p">
                        \(\small P(A_1 \cup A_2 \cup \ldots \cup A_n) = 
                        P(A_1) + P(A_2) + \ldots + P(A_n) -
                        \)
                    </div>
                    <div className="p">
                        \( \small
                         - P(A_1 \cap A_2) - P(A_1 \cap A_3) - \ldots - P(A_{"{n-1}"} \cap A_n) +
                        \)
                    </div>
                    <div className="p">
                        \( \small
                        + P(A_1 \cap A_2 \cap A_3) + \ldots + P(A_{"{n-2}"} \cap A_{"{n-1}"} \cap A_n)+
                        \ldots \)
                    </div>
                    <div className="p">
                        \(\small + (-1)^{"{n+1}"} \cdot P(A_1 \cap A_2 \cap \ldots \cap A_n) \)
                    </div>
                </General>
            </div>
        </Block>
        <Block title="Пересечение событий" link={and} beginRef={main}>
            <div className="frame">
                <p className="p">
                    \( P(A \cap B) = P(A) \cdot P(B|A) \)
                </p>
                <General>
                    <p className="p">
                        \( \small
                            P(A_1 \cap A_2 \cap \ldots \cap A_n) = 
                            P(A_1) \cdot P(A_2|A_1) \cdot P(A_3|A_1 \cap A_2)
                            \cdot \ldots \cdot
                            P(A_n|A_1 \cap A_2 \cap \ldots \cap A_{"{n-1}"})    
                        \)
                    </p>
                </General>
            </div>
        </Block>
        <Block title="Условная вероятность" link={conditional} beginRef={main}>
            <div className="frame">
                \(P(A|B)\) &mdash; вероятность события \(A\), если событие \(B\) считается случившимся.
            </div>
            <ul>
                <li>\( P(A|B) = \displaystyle \frac{"{|A \\cap B|}{|B|}"} \)</li>
                <li>\( P(A|B) = \displaystyle \frac{"{P(A \\cap B)}{P(B)}"} \)</li>
            </ul>
        </Block>
        <Block title="Формула Байеса" link={bias} beginRef={main}>
            <div className="frame">
                \(
                   \displaystyle P(A|B) = \frac{"{P(A) \\cdot P(B|A)}{P(B)}"}    
                \)
            </div>
        </Block>
        <Block title="Формула полной вероятности" link={full} beginRef={main}>
            <div className="frame">
                \(
                    P(A) = P(H_1) \cdot P(A|H_1) + P(H_2) \cdot P(A|H_2) + \ldots + 
                    P(H_n) \cdot P(A|H_n)
                \)
            </div>
            <ul>
                <li>\(H_i\) &mdash; все возможные непересекающиеся гипотезы.</li>
            </ul>
        </Block>
        <Block title="Формула Бернулли" link={bernully} beginRef={main}>
            <div className="frame">
                \( P(A) = C_n^k \cdot p^k \cdot (1 - p)^{"{n-k}"} \)
            </div>
            <ul>
                <li>Испытание повторяется \(n\) раз с неизменными начальными данными.</li>
                <li>\(A\) &mdash; событие \(B\) произошло \(k\) раз (без учёта порядка).</li>
                <li>\(P(B) = p\).</li>
            </ul>
        </Block>
    </div>
}