import { useRef } from "react"
import { Content } from "../../Content"
import { Title } from "../Title";
import { Block } from "../../Block";

export const TextTask = () => {

    const main = useRef();
    const possible = useRef();
    const impossible = useRef();
    const max = useRef();
    const all = useRef();
    const mult = useRef();
    const sequence = useRef();
    
    return <div ref={main}>
        <Title>Сюжетные задачи</Title>
        <Content>
            <li link={possible}>Доказательство возможности чего-либо</li>
            <li link={impossible}>Доказательство невозможности чего-либо</li>
            <li link={max}>Поиск наибольшего значения величины</li>
            <li link={all}>Поиск всех значений величины</li>
            <li link={mult}>Произведение = число</li>
            <li link={sequence}>Последовательность</li>
            {/* <li link={}>Линейное уравнение в целых числах</li> */}
        </Content>
        <Block title="Доказательство возможности чего-либо" link={possible} beginRef={main}>
            <ol>
                <li>1 пример, когда это возможно.</li>
                <li>Проверка примера.</li>
            </ol>
        </Block>
        <Block title="Доказательство невозможности чего-либо" link={impossible} beginRef={main}>
            <ol>
                <li>
                    Предположение, что это возможно.
                </li>
                <li>
                    Введение и описание переменных \(x_1,~x_2,\ldots ,~x_n\).
                    Одной переменной обозначается одно неизвестное число.
                </li>
                <li>
                    Составление математической модели из введённых переменных \(M(x_1,~x_2, \ldots ,~x_n)\).
                </li>
                <li>
                    Получение \(M(x_1,~x_2, \ldots ,~x_n) \Rightarrow x_i \in \varnothing\) &mdash; противоречие.
                </li>
            </ol>
        </Block>
        <Block title={"Поиск наибольшего значения величины \\(~x\\)"} link={max} beginRef={main}>
            <ol>
                <li>Доказательство возможности \(x = m\).</li>
                <li>Доказательство невозможности \(x {">"} m\).</li>
                <li>Наибольшее значение величины равно \(m\).</li>
            </ol>
        </Block>
        <Block title="Поиск всех значений величины" link={all} beginRef={main}>
            <h4>Способ №1</h4>
            <ol>
                <li>
                    Введение и описание переменных \(x,~x_1,~x_2,\ldots ,~x_n\).
                    Одной переменной обозначается одно неизвестное число.
                    \(x\) &mdash; искомая величина.
                </li>
                <li>
                    Составление математической модели из введённых переменных \(M(x,~x_1,~x_2, \ldots ,~x_n)\).
                </li>
                <li>
                    Получение \(M(x,~x_1,~x_2, \ldots ,~x_n) \Rightarrow x \in X\).
                </li>
            </ol><br/>
            <h4>Способ №2</h4>
            <ol>
                <li>
                    Доказательство возможности равенства величины и каждого найденного значения.
                </li>
                <li>
                    Доказательство невозможности равенства величины и всех остальных значений. 
                </li>
            </ol>
        </Block>
        <Block title="Произведение = число" link={mult} beginRef={main}>
            <div className="frame">
                \(a_1 \cdot a_2 \cdot \ldots \cdot a_n = A\)
            </div>
            <ol>
                <li>Разложение на простые множители: \(A = p_1^{"{\\alpha_1}"} \cdot p_2^{"{\\alpha_2}"} \cdot \ldots \cdot p_k^{"{\\alpha_k}"} \).</li>
                <li>Количество делителей \(A\) равно \( (\alpha_1 + 1) \cdot (\alpha_2 + 1) \cdot\ldots\cdot (\alpha_k + 1) \).</li>
                <li>Все делители числа \(A\): множество \(D\).</li>
                <li>\( A \div a_1,~ a_2 , \ldots ,~ a_n ~\Rightarrow~ a_1,~ a_2 , \ldots ,~ a_n \in D  \).</li>
            </ol>
        </Block>
        <Block title="Последовательность" link={sequence} beginRef={main}>
            <div className="frame">
                \(a_1,~a_2, \ldots ,~a_n\)
            </div>
            <ul>
                <li>
                    Количество чисел &mdash; \(n\).
                </li>
                <li>
                    Если нет речи про порядок, то \( {"a_1 \\leqslant a_2 \\leqslant \\ldots \\leqslant a_n"} \).<br/>
                    <div className="frame-border">
                    \(\min{"{(a_i)}"} \cdot n \leqslant a_1 + a_2 + \ldots + a_n \leqslant \max{"{(a_i)}"} \cdot n\).
                    </div>
                </li>
                <li>
                    Если нет речи про порядок и числа различные, то \( {"a_1 < a_2 < \\ldots < a_n"} \).
                </li>
                <li>
                    Если \(d = \min{"{(a_{i+1}-a_i)}"} \), то
                    <div className="frame-border">
                    \( a_1 + a_2 + \ldots + a_n \geqslant a_1 + (a_1 + d) + (a_1 + 2d) + \ldots + (a_1 + (n-1)d) \).
                    </div>
                    <div className="frame-border">
                    \( a_1 + a_2 + \ldots + a_n \leqslant a_n + (a_n - d) + (a_n - 2d) + \ldots + (a_n - (n-1)d) \).
                    </div>
                </li>
                <li>
                    Если \(a_1,~a_2, \ldots ,~a_n \in {"\\{s_1,~s_2,~s_3 \\ldots\\}"} \), то
                    <div className="frame-border">
                    \( a_1 + a_2 + \ldots + a_n \geqslant s_1 + s_2 + \ldots + s_n \).
                    </div>
                </li>
                <li>
                    Если \(a_1,~a_2, \ldots ,~a_n \in {"\\{s_1,~s_2,~s_3 \\ldots\\}"},~~s_1 \geqslant 0 \), то
                    <div className="frame-border">
                    \( a_1 + a_2 + \ldots + a_n \geqslant s_1 + s_2 + \ldots + s_k,~~k \leqslant n \).
                    </div>
                </li>
                <li>
                    Если \(a_1,~a_2, \ldots ,~a_n \in {"\\{\\ldots,~s_3,~s_2,~s_1\\}"} \), то
                    <div className="frame-border">
                    \( a_1 + a_2 + \ldots + a_n \leqslant s_1 + s_2 + \ldots + s_n \).
                    </div>
                </li>
                <li>
                    Если \(a_1,~a_2, \ldots ,~a_n \in {"\\{\\ldots,~s_3,~s_2,~s_1\\}"},~~s_i \geqslant 0 \), то
                    <div className="frame-border">
                    \( a_1 + a_2 + \ldots + a_n \leqslant s_1 + s_2 + \ldots + s_k,~~k \geqslant n \).
                    </div>
                </li>
            </ul>
        </Block>
    </div>
}