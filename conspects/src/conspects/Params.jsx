import {useRef} from "react";
import Hidinglist from "../Hidinglist";

const Params = ({page}) => {

    const main = useRef();
    const analytic = useRef();
    const parabole = useRef();
    const change = useRef();
    const graph = useRef();
    const symmetry = useRef();
    const func = useRef();
    const evaluate = useRef();

    return page(
    <div>
        <h1 ref={main} onClick={page.index} className="main-menu">Задачи с параметром</h1>
        <ul className="list">
            <li onClick={page.scroll(analytic)}>Аналитика</li>
            <li onClick={page.scroll(graph)}>Графика</li>
            <li onClick={page.scroll(parabole)}>Настройка параболы</li>
            <li onClick={page.scroll(symmetry)}>Симметрия</li>
            <li onClick={page.scroll(change)}>Замена</li>
            <li onClick={page.scroll(func)}>Функция</li>
            <li onClick={page.scroll(evaluate)}>Оценка</li>
        </ul>
        <h2 onClick={page.scroll(main)} ref={analytic} className="main-menu">Аналитика</h2>
        <div className="frame">
            <h3>Идея метода:</h3>
            <ul>
                <li>
                    <div>Выражение решается алгебраическими преобразованиями, как если бы не было параметра.</div>
                    <div>Цель преобразований &ndash; найти неизвестное.</div>
                </li>
                <li>Исходя из вопроса задачи и найденных решений, ищутся значения параметра.</li>
            </ul>
            <h3>Типичная задача:</h3>
                <Task
                    text={`Определить сколько решений \\(x\\) имеет выражение<br>\\(
                        <center>F(x, a)
                    \\)<br>в зависимости от параметра \\(a\\).`}
                />
            <h3>Решение:</h3>
            <ol>
                <li>
                    Преобразование {`\\(F(x, a) ~~~(*) \\LR
                        \\union{
                            G_1(x,a)~~~(1) \\\\
                            G_2(x,a)~~~(2) \\\\
                            \\ldots \\\\
                            G_n(x, a)~~~(n)
                        }
                    \\)`}.
                </li>
                <li>
                    <div>Поиск зависимости количества решений от {`\\(a\\)`} у каждого выражения {page.tex('G_i(x,a)')}.</div>
                    <div>{`\\(G_i(x,a)\\)`} может выглядеть одним из следующих образов:</div>
                    <ul className="margin-bottom-list">
                    <li>
                            <div>{`\\(\\cases{\\cases{H(x,a) \\\\ a \\in A}~~(i.1) \\\\ f(x,a) \\neq 0}~~~\\)`}, где {'\\(f(x,a)\\)'} не имеет ограничений.</div>
                            <Hidden
                            block={<div>
                            <div>Ищутся {`\\(C_k(a)~-\\)`} условия наличия ровно {`\\(k\\)`} решений у {`\\(H(x,a)\\)`}.</div>
                            <div>Пишется:</div>
                            <div className="line flex">
                                <div>{`\\((i):~\\)`}</div>
                                <div>
                                <div className="flex">
                                    <div>{`\\((i.1):~\\)`}</div>
                                    <div>
                                        <div>{`\\(\\infty\\) решений при: \\(\\cases{C_{\\infty}(a) \\\\ a \\in A}\\)`}</div>
                                        <div>{`\\(n\\) решений при: \\(\\cases{C_n(a) \\\\ a \\in A}\\)`}</div>
                                        <div>{`\\((n-1)\\) решений при: \\(\\cases{C_{n-1}(a) \\\\ a \\in A}\\)`}</div>
                                        <div>...</div>
                                        <div>{`2 решения при: \\(\\cases{C_2(a) \\\\ a \\in A}\\)`}</div>
                                        <div>{`1 решение при: \\(\\cases{C_1(a) \\\\ a \\in A}\\)`}</div>
                                        <div>{`0 решений при: \\(\\union{C_0(a) \\\\ a \\not\\in A}\\)`}</div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        Найдём {`\\(a\\)`}, при которых {`\\(f(x,a)=0\\)`}:
                                    </div>
                                    <div>{`\\(\\cases{H(x,a) \\\\ a\\in A \\\\ f(x,a)=0}\\)`}</div>
                                </div>
                                </div>
                            </div>
                            <div>Количество найденных на последнем шаге решений вычитается из ранее найденного.</div>
                            </div>}
                            />
                        </li>
                        <li>
                            <div>{`\\( \\cases{x = x(a) \\\\ a \\in A} \\).`}</div>
                            <Hidden
                            block={<div>
                            <div>Пишется:</div>
                            <div className="flex line">
                                <div>{`\\((i):~~\\)`}</div> <div>
                                    <div>1 решение при {`\\(a \\in A\\)`}</div>
                                    <div>0 решений при {`\\(a \\not\\in A\\)`}</div>
                                </div>
                            </div>
                            </div>}
                            />
                        </li>
                        <li>
                            <div>{`\\( \\cases{x \\in X \\\\ a \\in A} ~~~,\\) где \\(X ~- \\) бесконечное множество.`}</div>
                            <Hidden
                            block={<div>
                            <div>Пишется:</div>
                            <div>
                                <div className="flex line">
                                    <div>{`\\((i):~~\\)`}</div>
                                    <div>
                                        <div>{'\\(\\infty\\)'} решений при {`\\(a \\in A\\)`}</div>
                                        <div>0 решений при {`\\(a \\not\\in A\\)`}</div>
                                    </div>
                                </div>
                                <div>Не участвует в поиске общих решений.</div>
                            </div>
                            </div>}
                            />
                        </li>
                        <li>
                            <div>{`\\(\\cases{\\cases{\\alpha x^2 + \\beta x + \\gamma = 0 \\\\ a\\in A}~~~(i.1) \\\\ f(x,a) \\neq 0}\\), где \\(f(x,a)\\) не имеет ограничений.`}</div>
                            <Hidden
                            block={<div>
                            <div>Пишется:</div>
                            <div className="flex line">
                            <div>{`\\((i):~~\\)`}</div>
                            <div>
                                <div style={{display:'flex'}}>
                                <div>{`\\((i.1):~~\\)`}</div>
                                <div>
                                    <div>
                                        При {`\\(\\alpha = 0 \\LR a \\in A_0:~~\\cases{
                                        \\beta x + \\gamma = 0 \\\\
                                        a \\in A \\\\
                                        \\alpha = 0
                                        }\\)`}
                                    </div>
                                    <div>
                                        При {`\\(\\alpha \\neq 0:~~\\alpha x^2 + \\beta x + \\gamma = 0 ~-\\)`} квадратное уравнение, 
                                        {`\\(~D=\\beta^2 - 4\\alpha\\gamma\\)`}
                                    </div>
                                    <div>
                                        2 решения при {`\\(\\cases{D>0 \\\\ a \\in A \\\\ \\alpha \\neq 0}\\)`}
                                    </div>
                                    <div>
                                        1 решение при {`\\(\\cases{D=0 \\\\ a \\in A\\\\ \\alpha \\neq 0}\\)`}
                                    </div>
                                    <div>
                                        0 решений при {`\\(\\union{\\cases{D<0 \\\\ \\alpha \\neq 0} \\\\ a\\not\\in A}\\)`}
                                    </div>
                                </div>
                                </div>
                                <div>
                                    Найдём {`\\(a\\)`}, при которых {`\\(f(x,a)=0\\)`}:
                                </div>
                                <div>{`\\(\\cases{\\alpha x^2 + \\beta x + \\gamma = 0 \\\\ a\\in A \\\\ f(x,a)=0}\\)`}</div>
                            </div>
                            </div>
                            </div>}
                            />
                        </li>
                        <li>
                            <div>{`\\(\\cases{\\cases{\\alpha x^2 + \\beta x + \\gamma = 0 \\\\ a\\in A}~~~(i.1) \\\\ f(x,a) \\neq 0}\\), где \\(f(x,a)\\) не имеет ограничений.`}</div>
                            <Hidden
                            block={<div>
                            <div>Пишется:</div>
                            <div className="flex line">
                            <div>{`\\((i):~~\\)`}</div>
                            <div>
                                <div style={{display:'flex'}}>
                                <div>{`\\((i.1):~~\\)`}</div>
                                <div>
                                    <div>
                                        {'\\(\\alpha x^2 + \\beta x + \\gamma = 0~-\\)'} при {`\\(\\alpha=0\\)`} линейное; при {'\\(\\alpha\\neq 0\\)'} квадратное, {'\\(D=\\beta^2-4\\alpha\\gamma\\)'}.
                                    </div>
                                    <div>
                                        {'\\(\\infty\\)'} решений при: {`\\(
                                            \\cases{
                                                \\alpha = 0 \\\\
                                                \\beta = 0 \\\\
                                                \\gamma = 0 \\\\
                                                a\\in A
                                            }
                                        \\)`}
                                    </div>
                                    <div>
                                        2 решения при: {`\\(
                                            \\cases{
                                                \\alpha \\neq 0 \\\\
                                                D > 0 \\\\
                                                a \\in A
                                            }
                                        \\)`}
                                    </div>
                                    <div>
                                        1 решение при: {`\\(
                                            \\union{
                                                \\cases{
                                                    \\alpha = 0 \\\\
                                                    \\beta \\neq 0 \\\\
                                                    a \\in A
                                                } \\\\
                                                \\cases{
                                                    \\alpha \\neq 0 \\\\
                                                    D = 0 \\\\
                                                    a \\in A
                                                }
                                            }
                                        \\)`}
                                    </div>
                                    <div>
                                        0 решений при: {`\\(
                                            \\union{
                                                \\cases{
                                                    \\alpha = 0 \\\\
                                                    \\beta = 0 \\\\
                                                    \\gamma \\neq 0
                                                }\\\\
                                                \\cases{
                                                    \\alpha \\neq 0 \\\\
                                                    D < 0
                                                }\\\\
                                                a \\not\\in A
                                            }
                                        \\)`}
                                    </div>
                                </div>
                                </div>
                                <div>
                                    Найдём {`\\(a\\)`}, при которых {`\\(f(x,a)=0\\)`}:
                                </div>
                                <div>{`\\(\\cases{\\alpha x^2 + \\beta x + \\gamma = 0 \\\\ a\\in A \\\\ f(x,a)=0}\\)`}</div>
                            </div>
                            </div>
                            </div>}
                            />
                        </li>
                    </ul>
                </li>
                <li>
                    <div>Поиск попарных совпадений решений, пишется:</div>
                    <div className="line">
                        <div>Общие решения ({`\\(i\\)`}) и ({`\\(j\\)`}):</div>
                        <div>{page.tex('\\cases{G_i(x,a) \\\\ G_j(x,a)}')}</div>
                    </div>
                </li>
                <li>
                    Для каждого выражения (1), (2),..., ({`\\(n\\)`})
                    строится ось {`\\(a\\)`} с количеством решений. Общие решения соединяются.
                </li>
                <li>
                    Для исходного выражения {`\\((*)\\)`} строится ось {`\\(a\\)`} с итоговым количеством решений.
                </li>
            </ol>
        </div>
        <h2 ref={graph} onClick={page.scroll(main)} className="main-menu">Графика</h2>
        <div className="frame">
        <h3>Идея метода:</h3>
            <ul>
                <li>
                    Выражениям ставятся в соответствие графики на <div className="inline-link" onClick={page.window("Oxy")}>координатной плоскости</div>.
                </li>
                <li>
                    При различных зачениях параметра графики выражений с параметрами выглядят по-разному.
                </li>
                <li>
                    Ищутся такие значения параметра, чтобы график выглядел определённым образом.
                </li>
            </ul>
            <h3>Типичная задача:</h3>
            <Task
                text={`
                    Определить сколько решений \\((x,y)\\) имеет выражение<br>
                    <center>\\(F(x,y,a)\\)<br>
                    в зависимости от параметра \\(a\\).
                `}
            />
            <h3>Решение:</h3>
            <ol className="margin-bottom-list">
                <li>
                    Преобразование {`\\(F(x,y,a) \\LR \\cases{G(x,y)~~~~~~~(1) \\\\ A(x,y,a)~~~~(2)} \\)`}.
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
        <h2 ref={parabole} onClick={page.scroll(main)} className="main-menu">Настройка параболы</h2>
        <div className="frame">
        <h3>Идея метода:</h3>
            <ul>
                <li>
                    В координатной плоскости график квадратного трёхчлена &ndash; парабола.
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
            <h3>Типичная задача:</h3>
                <Task
                    text = {`Определить при каких условиях решения выражения<br>\\(
                        <center>\\alpha x^2 + \\beta x + \\gamma \\vee 0
                    \\)<br>расположены нужным образом на множествах, ограниченных числами \\(x_i\\).`}
                />
            <h3>Решение:</h3>
            <ol>
                <li>Рассматривается случай (1): {'\\(\\alpha = 0\\)'}</li>
                <li>Обозначается случай (2): {'\\(\\alpha \\neq 0\\)'}</li>
                <li>
                    <div>Пишется:</div>
                        <ul>
                            <li>{'\\(f(x) = \\alpha x^2 + \\beta x + \\gamma ~-\\) парабола'}</li>
                            <li>{'\\(D = \\beta^2 - 4\\alpha\\gamma\\)'}</li>
                            <li>{'Вершина \\(x_в = \\frac{-\\beta}{2\\alpha}\\)'}</li>
                            <li>{'\\(f(x_i) = \\alpha x_i^2+\\beta x_i+\\gamma\\)'}</li>
                        </ul>
                </li>
                <li>
                    <div>Рассматриваются случаи:</div>
                    <div>(2.1) {'\\(D<0;~~\\)'}определяется при каких {'\\(\\alpha\\)'} выполняется нужное условие</div>
                    <div>(2.2) {'\\(D=0;~~\\)'}определяется при каких {'\\(x_в,~\\alpha\\)'} выполняется нужное условие</div>
                    <div>
                        (2.3) {'\\(D>0\\)'}
                        <div style={{marginLeft:'30px'}}>
                            (2.3.1) {'\\(x_в \\vee x_i;~~\\)'}определяется при каких {'\\(\\alpha\\cdot f(x_i)\\)'} выполняется нужное условие
                        </div>
                    </div>
                </li>
                <li>
                    <div>Для получения ответа решается совокупность из найденных случаев.</div>
                </li>
                <li>
                    <div>Для рассмотрения случаев используется информация:</div>
                    <ul>
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
                </li>
            </ol>
        </div>
        <h2 ref={symmetry} onClick={page.scroll(main)} className="main-menu">Симметрия</h2>
        <div className="frame">
            <h3>Идея метода:</h3>
            <ul>
                <li>
                    Замечается, что решения выражения существуют только группами.
                </li>
                <li>
                    Находится вид группы, исходя из которого находятся значения параметра.
                </li>
            </ul>
            <h3>Типичная задача:</h3>
            <Task
                text={`
                Определить при каких значениях параметра \\(a\\) выражение<br>
                <center>\\(F(x,a)\\)<br>
                имеет ровно \\(n\\) решений.
                `}
            />
            <h3>Решение:</h3>
            <ol>
                <li>
                    <div>Поиск таких выражений {`\\(f(x)\\)`}, чтобы {'\\(F(f(x),a) \\LR F(x,a)\\)'}. Пишется:</div>
                    <div className="line">
                        <div>Если {'\\(x~-\\)'} решение, то {'\\(f_1(x),f_2(x),\\ldots, f_k(x)~-\\)'} тоже решения,</div>
                        <div>так как {`\\(F(x,a) \\LR F(f_i(x), a)\\)`}.</div>
                    </div>
                </li>
                <li>
                    <div className="line">
                        <div>Количество решений {`\\(x,~f_1(x),~f_2(x),\\ldots,f_k(x):~~k+1\\)`},</div>
                        <div>требуется {'\\(n\\)'} решений, и {'\\(n \\ndiv (k+1)~\\Rightarrow\\)'} какие-то решения совпадают.</div>
                    </div>
                </li>
                <li>
                    <div>Поиск попарных совпадений решений, пишется:</div>
                    <div className="line">
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
        <h2 ref={change} onClick={page.scroll(main)} className="main-menu">Замена</h2>
        <div className="frame">
            <ol>
                <li>
                    <h3>Замена для преобразований</h3>
                    <div className="line">
                        {`\\(
                           F(x, a, f(x,a)) \\overset{t=f(x,a)}{\\LLR}
                           F(x,a,t) 
                        \\)`}
                    </div>
                    <ul>
                        <li>Используется только для преобразований.</li>
                        <li>Обратная замена выполняется после преобразований.</li>
                    </ul>
                </li>
                <li style={{marginTop:'50px'}}>
                    <h3>Переход к новой неизвестной</h3>
                    <div className="line flex">
                        <div>
                            <div>{`\\(F(f(x,a),a)\\)`}</div>
                            <div>Замена: {`\\(t = f(x,a)\\)`}</div>
                            <div>{`\\(F(t,a)\\)`}</div>
                        </div>
                        <div>
                        <table style={{fontSize:'15pt', marginLeft:'10px'}}>
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
                    <ul>
                        <li>Используется для приведения выражения в более простой вид.</li>
                        <li>Обратная замена не выполняется.</li>
                    </ul>
                </li>
                <li style={{marginTop:'50px'}}>
                    <h3>Переход к новому параметру</h3>
                    <div className="line">
                    {'\\(F(x,f(a)) ~~~\\overset{b = f(a)}{\\LLR}~~~F(x,b)\\)'}
                    </div>
                    <ul>
                        <li>
                            Используется для упрощения выражений с параметром.
                        </li>
                        <li>
                            Обратная замена выполняется в самом конце решения после нахождения нового параметра.
                        </li>
                    </ul>
                </li>
                <li style={{marginTop:'50px'}}>
                    <h3>Добавление/исключение неизвестной</h3>
                    <div className="line">
                    {'\\(F(x,f(x,a),a) \\Leftarrow \\cases{F(x,y,a) \\\\ y=f(x,a)}\\)'}
                    </div>
                    <ul>
                        <li>Переход не равносильный, сохраняется количество решений.</li>
                        <li>Используется часто: добавление второй неизвестной для графического решения.</li>
                        <li>Используется редко: исключение неизвестной для решения не аналитическим способом.</li>
                        <li>Обратная замена не выполняется.</li>
                    </ul>
                </li>
            </ol>
        </div>
        <h2 ref={func} onClick={page.scroll(main)} className="main-menu">Функция</h2>
        <div className="frame">
            <h3>Выделяется и исследуется функция:</h3>
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
        <h2 ref={evaluate} onClick={page.scroll(main)} className="main-menu">Оценка</h2>
        <div className="frame">
            <h3>В систему к выражению дописываются выражения-следствия:</h3>
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
    </div>
)};

const Task = ({text}) => (
    <div className="param-task">
        <div style={{marginTop:'-5px',marginBottom:'-10px'}}>
        {
            text.split('<br>').map((str, i) => 
            <div key={i} style={{display:'flex', justifyContent:str.indexOf('<center>')===-1?'start':'center'}}>
                <div style={{width:'fit-content'}}>{str.replace('<center>','')}</div>
            </div>
            )
        }
        </div>
    </div>
);
const Hidden = ({block}) => {
    
    return <Hidinglist
        parent={
            <div className="sub-menu">Показать исследование</div>
        }
        parent1={
            <div className="sub-menu">Скрыть исследование</div>
        }
        rerender={false}
        child={block}
    />
};

export default Params;