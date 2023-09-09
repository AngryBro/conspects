import {useRef} from "react";
import { Title } from "../Title";
import { Content } from "../Content";
import { Block } from "../Block";
import { Cases } from "../Cases";
import { Research } from "../Research";
import { useNavigate } from "../static-router";


const Task = ({children}) =>

<div className="frame params-task">
    {children}
</div>

const ResearchCase = ({children}) =>

<div>
    <div style={{marginBottom:"10px"}}>{children[0]}</div>
    <Research>
        <p>Пишется:</p>
        <div className="frame-border">
            <div className="flex">
                <div>\((i):\)</div>
                <div className="margin-top">
                    {children[1]}
                </div>
            </div>
        </div>
        {children.slice(2)}
    </Research>
</div>

export const Params = () => {

    const main = useRef();
    const analytic = useRef();
    const parabole = useRef();
    const change = useRef();
    const graph = useRef();
    const symmetry = useRef();
    const func = useRef();
    const evaluate = useRef();
    const win = useNavigate(true);

    return <div ref={main} className="params smaller-xx">
        <Title>Задачи с параметром</Title>
        <Content>
            <li link={analytic}>Аналитика</li>
            <li link={graph}>Графика</li>
            <li link={parabole}>Настройка параболы</li>
            <li link={symmetry}>Симметрия</li>
            <li link={change}>Замена</li>
            <li link={func}>Функция</li>
            <li link={evaluate}>Оценка</li>
        </Content>

        <Block title="Аналитика" beginRef={main} link={analytic}>
            <div className="frame">
                <h4>Идея метода:</h4>
                    <ul>
                        <li>
                            <div>Выражение решается алгебраическими преобразованиями, как если бы не было параметра.</div>
                            <div>Цель преобразований &ndash; найти неизвестное.</div>
                        </li>
                        <li>Исходя из вопроса задачи и найденных решений, ищутся значения параметра.</li>
                    </ul>
                    <h4>Типичная задача:</h4>
                    <Task>
                        <div>Определить сколько решений \(x\) имеет выражение</div>
                        <div className="center">\( F(x,a) \)</div>
                        <div>в зависимости от параметра \(a\).</div>
                    </Task>
                    <h4>Решение:</h4>
                    <ol className="def-list">
                        <li>
                            Преобразование
                            <span className="mini-math">
                            {`\\(F(x, a) ~~~(*) \\LR
                                \\union{
                                    G_1(x,a)~~~(1) \\\\
                                    G_2(x,a)~~~(2) \\\\
                                    \\ldots \\\\
                                    G_n(x, a)~~~(n)
                                }
                            \\)`}
                            </span>
                            .
                        </li>
                        <li>
                            <div>Каждое выражение \(G_i(x,a)\) рассматривается отдельно.</div>
                            <div>
                            В общем виде оно имеет вид:
                            \(
                                {`
                                \\cases{
                                    \\cases{
                                        H(x,a) \\\\
                                        a \\in A
                                    }~~(i.1) \\\\
                                    f(x,a) \\neq 0
                                } ~~~(i)
                                `}    
                            \)
                            </div>
                            <p>
                                Ищутся \(C_k(a)\) &ndash; условия наличия ровно \(k\) решений
                                у \(H(x,a)\) для всех положительных возможных \(k\).
                            </p>
                            <p>Далее пишется:</p>
                            <div className="frame-border">
                                <div className="flex">
                                    <div>\((i):\)</div>
                                    <div>
                                        <div className="flex margin-top">
                                            <div>\((i.1):\)</div>
                                            <div>
                                                <div className="margin-top">
                                                    \(k\) решений при
                                                    \( {"\\cases{ C_{k}(a) \\\\ a \\in A }"} \)
                                                </div>
                                                <div>В остальных случаях нет решений.</div>
                                            </div>
                                        </div>
                                        <p>
                                            Найдём \(a\), при которых \(f(x,a) = 0:\)
                                        </p>
                                        <div>
                                            \({`\\cases{ H(x,a) \\\\ a \\in A \\\\ f(x,a) =0 }`}\)
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Количество найденных на последнем шаге решений вычитается
                                из найденного ранее количества.
                            </p>
                            <Cases recursive={true} containsMath={true}>
                                <ol>
                                    <li>
                                        <ResearchCase>
                                            <div>\( \cases{"{x = f(a) \\\\ a \\in A}"}~~(i) \)</div>
                                            <div>
                                                <div>
                                                    1 решение при \(a \in A\).
                                                </div>
                                                <p>
                                                    В остальных случаях нет решений.
                                                </p>
                                            </div>
                                        </ResearchCase>
                                    </li>
                                    <li>
                                        <ResearchCase>
                                            <div>
                                                \( \cases{"{x \\in T \\\\ a \\in A}"}~~(i),~~~~ \)
                                                где \(T\) &ndash; бесконечное множество
                                            </div>
                                            <div>
                                                <div>
                                                    \(\infty\) решений при \(a \in A\).
                                                </div>
                                                <p>
                                                    В остальных случаях нет решений.
                                                </p>
                                            </div>
                                            <p>Не участвует в поиске общих решений.</p>
                                        </ResearchCase>
                                    </li>
                                    <li className="xx-smaller-xx">
                                        <ResearchCase>
                                            <div>
                                                \(
                                                    {`
                                                        \\cases{
                                                            \\cases{
                                                                \\alpha x^2 + \\beta x + \\gamma = 0 \\\\
                                                                a \\in A \\\\
                                                                y = g(x, a)
                                                            } \\\\
                                                            f(x,a) \\neq 0
                                                        }
                                                    `}
                                                \)
                                            </div>
                                            <div>
                                                <div className="flex">
                                                    <div>\((i.1):~\)</div>
                                                    <div>
                                                        <div><span>\(\alpha x^2 + \beta x + \gamma = 0~\)</span>
                                                        при \(\alpha = 0\) линейное; при \(\alpha \neq 0\)
                                                        квадратное, \(D = \beta^2 - 4\alpha\gamma\).</div>
                                                        <p>
                                                            \(\infty\) решений при
                                                            \(
                                                                {`
                                                                    \\cases{
                                                                        \\alpha = 0 \\\\
                                                                        \\beta = 0 \\\\
                                                                        \\gamma = 0 \\\\
                                                                        a \\in A
                                                                    }
                                                                `}    
                                                            \)
                                                        </p>
                                                        <p>
                                                            2 решения при
                                                            \(
                                                                {`
                                                                    \\cases{
                                                                        \\alpha \\neq 0 \\\\
                                                                        D > 0 \\\\
                                                                        a \\in A
                                                                    }
                                                                `}    
                                                            \)
                                                        </p>
                                                        <p>
                                                            1 решение при
                                                            \(
                                                                {`
                                                                    \\union{
                                                                        \\cases{
                                                                            \\alpha \\neq 0 \\\\
                                                                            D = 0 \\\\
                                                                            a \\in A
                                                                        }\\\\
                                                                        \\cases{
                                                                            \\alpha = 0 \\\\
                                                                            \\beta \\neq 0 \\\\
                                                                            a \\in A
                                                                        }
                                                                    }
                                                                `}    
                                                            \)
                                                        </p>
                                                        <p>
                                                            В остальных случаях нет решений.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>
                                                        Найдем \(a\), при которых \(f(x,a) = 0:\)
                                                    </p>
                                                    <div>
                                                        \(
                                                        {`
                                                            \\cases{
                                                                \\alpha x^2 + \\beta x + \\gamma = 0 \\\\
                                                                a \\in A \\\\
                                                                f(x,a) = 0
                                                            }
                                                        `}    
                                                        \)
                                                    </div>
                                                </div>
                                            </div>
                                        </ResearchCase>
                                    </li>
                                </ol>
                            </Cases>
                        </li>
                        <li>
                            <div>Поиск попарных совпадений решений, пишется:</div>
                            <div className="frame-border margin-top x-smaller-xx">
                                <div>Общие решение \((i)\) и \((j)\):</div>
                                <div>
                                    \( \cases{"{G_i(x,a) \\\\ G_j(x,a)}"} \)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>
                            Для каждого выражения \((1),~ (2),\ldots,~ (n)\)
                            строится ось 
                            с количеством решений. Общие решения соединяются.
                            </div>
                        </li>
                        <li>
                            Для исходного выражения \((*)\) строится ось \(a\) с итоговым количеством решений.
                        </li>
                    </ol>
            </div>
        </Block>
        <Block title="Графика" beginRef={main} link={graph}>
            <div className="frame">
            <h4>Идея метода:</h4>
                <ul>
                    <li>
                        Выражениям ставятся в соответствие графики на <span onClick={() => win("/oxy")}>координатной плоскости</span>.
                    </li>
                    <li>
                        При различных зачениях параметра графики выражений с параметрами выглядят по-разному.
                    </li>
                    <li>
                        Ищутся такие значения параметра, чтобы график выглядел определённым образом.
                    </li>
                </ul>
                <h4>Типичная задача:</h4>
                <Task>
                    <div>Определить сколько решений \((x,y)\) имеет выражение</div>
                    <div className="center">\( F(x,y,a) \)</div>
                    <div>в зависимости от параметра \(a\).</div>
                </Task>
                <h4>Решение:</h4>
                <ol className="def-list">
                    <li>
                        Преобразование <span className="x-smaller-xx">{`\\(F(x,y,a) \\LR \\cases{G(x,y)~~~~~~~(1) \\\\ A(x,y,a)~~~~(2)} \\)`}</span>.
                    </li>
                    <li>
                        Описание и построение графика (1).
                    </li>
                    <li>
                        Описание графика (2) с пояснением что зависит от {`\\(a\\)`}.
                    </li>
                    <li>
                        Построение на черновике графика (2) при {`\\(a = -100\\)`}.
                    </li>
                    <li>
                        <div>Медленное увеличение {`\\(a\\)`}, с отслеживанием изменения графика (2),</div>
                        <div>моменты изменения количества общих точек с графиком (1) фиксируются, нумеруются,</div>
                        <div>в каждом находится значение {`\\(a\\)`}, подписывается количество решений.</div>
                    </li>
                    <li>
                        На оси зависимости количества решений от {`\\(a\\)`} указывается количество решений.
                    </li>
                </ol>
            </div>                              
        </Block>
        <Block title="Настройка параболы" beginRef={main} link={parabole}>
            <div className="frame">
            <h4>Идея метода:</h4>
                <ul>
                    <li>
                        В координатной плоскости график полинома второй степени &ndash; парабола.
                    </li>
                    <li>
                        <div>
                            Расположение параболы относительно точек на оси абсцисс зависит от:
                            <ol>
                                <li>Первого коэффициента;</li>
                                <li>Дискриминанта;</li>
                                <li>Вершины;</li>
                                <li>Значения в граничных точках.</li>
                            </ol>
                        </div>
                    </li>
                    <li>
                        Ищется и задаётся удовлетворяющее условию положение параболы.
                    </li>
                </ul>
                <h4>Типичная задача:</h4>
                <Task>
                    <div>Определить при каких условиях решения выражения</div>
                    <div className="center">
                        \( \alpha x^2 + \beta x + \gamma \vee 0 \)
                    </div>
                    <div>расположены нужным образом на множествах, ограниченных числами \(x_i\).</div>
                </Task>
                <h4>Решение:</h4>
                <ol className="def-list">
                    <li>Рассматривается случай (1): {'\\(\\alpha = 0\\)'}</li>
                    <li>Обозначается случай (2): {'\\(\\alpha \\neq 0\\)'}</li>
                    <li>
                        <div>Пишется:</div>
                            <div className="frame-border x-smaller-xx">
                                <ul className="dot-list">
                                    <li>{'\\(f(x) = \\alpha x^2 + \\beta x + \\gamma ~-\\) парабола'}</li>
                                    <li>{'\\(D = \\beta^2 - 4\\alpha\\gamma\\)'}</li>
                                    <li>{'Вершина \\(\\displaystyle x_в = \\frac{-\\beta}{2\\alpha}\\)'}</li>
                                    <li>{'\\(f(x_i) = \\alpha x_i^2+\\beta x_i+\\gamma\\)'}</li>
                                </ul>
                            </div>
                    </li>
                    <li>
                        <div>Рассматриваются случаи:</div>
                        <p>(2.1) {'\\(D<0;~~\\)'}определяется при каких {'\\(\\alpha\\)'} выполняется нужное условие</p>
                        <p>(2.2) {'\\(D=0;~~\\)'}определяется при каких {'\\(x_в,~\\alpha\\)'} выполняется нужное условие</p>
                        <div>
                            (2.3) {'\\(D>0:\\)'}
                            <p style={{marginLeft:'30px'}}>
                                (2.3.1) {'\\(x_в \\vee x_i;~~\\)'}определяется при каких {'\\(\\alpha\\cdot f(x_i)\\)'} выполняется нужное условие
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>Для получения ответа решается совокупность из найденных случаев.</div>
                    </li>
                    
                </ol>
                <p>
                    <div>Для рассмотрения случаев используется информация:</div>
                    <ul className="dot-list">
                        <li>
                            <div>{'\\(\\alpha >0~~-\\) ветви параболы вверх'}</div>
                            <div>{'\\(\\alpha <0~~-\\) ветви параболы вниз'}</div>
                        </li>
                        <li>
                            <div>{'\\(D<0~~-\\) парабола не имеет общих точек с осью абсцисс'}</div>
                            <div>{'\\(D=0~~-\\) парабола касается оси абсцисс в вершине'}</div>
                            <div>{'\\(D>0~~-\\) парабола пересекает ось абсцисс'}</div>
                        </li>
                        <li>
                            <div>{'\\(\\alpha\\cdot f(x_i)<0~~-\\) ветвь параболы под точкой \\(x_i\\)'}</div>
                            <div>{'\\(\\alpha\\cdot f(x_i)>0~~-\\) ветвь параболы над точкой \\(x_i\\)'}</div>
                            <div>{'\\(\\alpha\\cdot f(x_i)=0~~-\\) ветвь параболы проходит через точку \\(x_i\\)'}</div>
                        </li>
                    </ul>
                </p>
            </div>
        </Block>
        <Block title="Симметрия" beginRef={main} link={symmetry}>
            <div className="frame">
                <h4>Идея метода:</h4>
                <ul>
                    <li>
                        Замечается, что решения выражения существуют только группами.
                    </li>
                    <li>
                        Находится вид группы, исходя из которого находятся значения параметра.
                    </li>
                </ul>
                <h4>Типичная задача:</h4>
                <Task>
                    <div>Определить при каких значениях параметра \(a\) выражение</div>
                    <div className="center">\(F(x,a)\)</div>
                    <div>имеет ровно \(n\) решений.</div>
                </Task>
                <h4>Решение:</h4>
                <ol className="def-list">
                    <li>
                        <div>Поиск таких выражений {`\\(f(x)\\)`}, чтобы {'\\(F(f(x),a) \\LR F(x,a)\\)'}.</div>
                        <p>Пишется:</p>
                        <div className="frame-border x-smaller-xx">
                            <div>Если {'\\(x~-\\)'} решение, то {'\\(f_1(x),f_2(x),\\ldots, f_k(x)~-\\)'} тоже решения,</div>
                            <div>так как {`\\(F(x,a) \\LR F(f_i(x), a)\\)`}.</div>
                        </div>
                        <p>
                            Важно проверить, что \(f_i(f_j(x)) = f_m(x)\), где \(1 \leqslant m \leqslant k\).
                        </p>
                    </li>
                    <li>
                        <div className="frame-border x-smaller-xx">
                            <div>Количество решений <span className="xx-smaller-xx">{`\\(x,~f_1(x),~f_2(x),\\ldots,f_k(x):~~k+1\\)`}</span>,</div>
                            <div>требуется {'\\(n\\)'} решений, и {'\\(n \\ndiv (k+1)~\\Rightarrow\\)'} какие-то решения совпадают.</div>
                        </div>
                    </li>
                    <li>
                        <p>Поиск попарных совпадений решений, пишется:</p>
                        <div className="frame-border">
                            <div>Совпадения решений:</div>
                            <div>{'\\(i)~~\\cases{ F(x,a)\\\\ x = f_i(x) }\\)'}</div>
                        </div>
                    </li>
                    <li>
                        <div>При каждом найденном на предыдущем шаге {'\\(a\\)'} решается {'\\(F(x,a)\\)'}.</div>
                        <div>Те {'\\(a\\)'}, при которых решений ровно {'\\(n\\)'}, добавляются в ответ. </div>
                    </li>
                </ol>
            </div>
        </Block>
        <Block title="Замена" beginRef={main} link={change}>
            <div className="frame">
                <ol className="def-list">
                    <li>
                        <h4>Замена для преобразований</h4>
                        <div className="frame-border x-smaller-xx">
                            {`\\(
                            F(x, a, f(x,a)) \\overset{t=f(x,a)}{\\LLR}
                            F(x,a,t) 
                            \\)`}
                        </div>
                        <ul className="dot-list">
                            <li>Используется только для преобразований.</li>
                            <li>Обратная замена выполняется после преобразований.</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Переход к новой неизвестной</h4>
                        <div className="frame-border flex-mobile">
                            <div>
                                <div>{`\\(F(f(x,a),a)\\)`}</div>
                                <p>Замена: {`\\(t = f(x,a)\\)`}</p>
                                <div>{`\\(F(t,a)\\)`}</div>
                            </div>
                            <div>
                            <table className="params-change-table">
                                    <tbody>
                                        <tr>
                                            <th>Множество {'\\(t\\)'}</th>
                                            <th>Информация про {'\\(x\\)'}</th>
                                        </tr>
                                        <tr>
                                            <td>{'\\(T_1\\)'}</td>
                                            <td>{'\\(I_1\\)'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'\\(T_2\\)'}</td>
                                            <td>{'\\(I_2\\)'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'\\(\\ldots\\)'}</td>
                                            <td>{'\\(\\ldots\\)'}</td>
                                        </tr>
                                        <tr>
                                            <td>{'\\(T_n\\)'}</td>
                                            <td>{'\\(I_n\\)'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <ul className="dot-list">
                            <li>Используется для приведения выражения в более простой вид.</li>
                            <li>Обратная замена не выполняется.</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Переход к новому параметру</h4>
                        <div className="frame-border">
                        {'\\(F(x,f(a)) ~~~\\overset{b = f(a)}{\\LLR}~~~F(x,b)\\)'}
                        </div>
                        <ul className="dot-list">
                            <li>
                                Используется для упрощения выражений с параметром.
                            </li>
                            <li>
                                Обратная замена выполняется в самом конце решения после нахождения нового параметра.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4>Добавление/исключение неизвестной</h4>
                        <div className="frame-border x-smaller-xx">
                        {'\\(F(x,f(x,a),a) ;~~ \\cases{F(x,y,a) \\\\ y=f(x,a)}\\)'}
                        </div>
                        <ul className="dot-list">
                            <li>Переход <b>не равносильный</b>, сохраняется количество решений.</li>
                            <li>Частый вариант использования &ndash; добавление второй неизвестной для графического решения.</li>
                            <li>Обратная замена не выполняется.</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </Block>
        <Block title="Функция" beginRef={main} link={func}>
            <div className="frame">
                <h4>Выделяется и исследуется функция:</h4>
                <ul>
                    <li>
                        График выражения {`\\(y=f(x,a)\\)`} можно построить исследовав функцию {`\\(\\varphi(x)=f(x,a)\\)`}.
                    </li>
                    <li>
                        Для выражения {`\\(f(u) \\vee f(v)\\)`} применим переход, если {`\\(f(x)\\)`} монтонная функция.
                    </li>
                    <li>
                        {`\\(y=f(x) \\LR \\cases{y=f(x)\\\\ y \\in E(f)}~~\\)`}, где {`\\(E(f)~-\\)`} область значений функции.
                    </li>
                </ul>
            </div>
        </Block>
        <Block title="Оценка" beginRef={main} link={evaluate}>
            <div className="frame">
                <h4>В систему к выражению дописываются выражения-следствия:</h4>
                <ul>
                    <li>
                        {`\\(u^{2n} \\geq 0\\)`}
                    </li>
                    <li>
                        {`\\(|u| \\geq 0\\)`}
                    </li>
                    <li>
                        {`\\(-1 \\leq \\sin{u} \\leq 1\\)`}
                    </li>
                    <li>
                        {`\\(-1 \\leq \\cos{u} \\leq 1\\)`}
                    </li>
                </ul>
            </div>
        </Block>

    </div>
}