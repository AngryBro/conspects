import { useRef } from "react";

const Params = ({page}) => {

    const main = useRef();
    const analytic = useRef();
    const parabole = useRef();
    
    return page(
    <div>
        <h1 ref={main} onClick={page.index} className="main-menu">Задачи с параметром</h1>
        <ul className="list">
            <li>Замена</li>
            {/* <li onClick={page.scroll(analytic)}>Аналитика</li> */}
            <li onClick={page.scroll(analytic)}>Аналитика</li>
            <li>Графика</li>
            <li onClick={page.scroll(parabole)}>Настройка параболы</li>
            <li>Симметрия</li>
            <li>Функция</li>
            <li>Оценка</li>
        </ul>
        Конспект пока в процессе. Весь материал в старой версии.
        <h2 onClick={page.scroll(main)} ref={analytic} className="main-menu">Аналитика</h2>
        <div className="frame">
            <h3>Типичная задача:</h3>
                <Task
                    text={`Определить сколько решений \\(x\\) имеет выражение<br>\\(
                        <center>F(x, a)
                    \\)<br>в зависимости от параметра \\(a\\).`}
                />
            <h3>Решение:</h3>
            <ol>
                <li>
                    Преобразование {`\\(F(x, a) \\LR
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
                    <ul>
                        <li>
                            <div>{`\\( \\cases{x = x(a) \\\\ a \\in A} \\).`}</div>
                            <div>Тогда пишется:</div>
                            <div className="flex line">
                                <div>{`\\((i):~~\\)`}</div> <div>
                                    <div>1 решение при {`\\(a \\in A\\)`}</div>
                                    <div>Нет решений при {`\\(a \\not\\in A\\)`}</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>{`\\( \\cases{x \\in X \\\\ a \\in A} ~~~,\\) где \\(~~X ~- \\) бесконечное множество.`}</div>
                            <div>Тогда пишется:</div>
                            <div>
                                <div className="flex line">
                                    <div>{`\\((i):~~\\)`}</div>
                                    <div>
                                        <div>Бесконечно решений при {`\\(a \\in A\\)`}</div>
                                        <div>Нет решений при {`\\(a \\not\\in A\\)`}</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>{`\\(\\cases{\\cases{\\alpha x^2 + \\beta x + \\gamma = 0 \\\\ a\\in A}~~~(i.1) \\\\ f(x,a) \\neq 0}\\), где \\(f(x,a)\\) не имеет ограничений.`}</div>
                            <div>Тогда пишется:</div>
                            <div className="flex line">
                                <div>{`\\((i.1):~~\\)`}</div>
                                <div>
                                    <div>
                                        При {`\\(\\alpha = 0:~~\\cases{
                                        \\beta x + \\gamma = 0 \\\\
                                        a \\in A \\\\
                                        \\alpha = 0
                                        }\\)`}
                                    </div>
                                    <div>
                                        При {`\\(\\alpha \\neq 0:~~\\alpha x^2 + \\beta x + \\gamma = 0 ~-\\)`} квадратное уравнение, {`\\(D=D(a)\\)`}
                                    </div>
                                    <div>
                                        2 решения при {`\\(\\cases{D>0 \\\\ a \\in A \\\\ \\alpha \\neq 0}\\)`}
                                    </div>
                                    <div>
                                        1 решение при {`\\(\\cases{D=0 \\\\ a \\in A\\\\ \\alpha \\neq 0}\\)`}
                                    </div>
                                    <div>
                                        0 решений при {`\\(\\cases{D<0 \\\\ a \\in A\\\\ \\alpha \\neq 0}\\)`}
                                    </div>
                                    <div>
                                        Найдём {`\\(a\\)`}, при которых {`\\(f(x,a)=0\\)`}:
                                    </div>
                                    <div>{`\\(\\cases{\\alpha x^2 + \\beta x + \\gamma = 0 \\\\ a\\in A \\\\ f(x,a)=0}\\)`}</div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>{`\\(G(x, a)\\)`}</div>
                            Поиск зависимости количества решений от {`\\(a\\)`} другим способом.
                        </li>
                    </ul>
                </li>
                <li>
                    <div>Поиск совпадений решений, пишется:</div>
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
                    Для исходного выражения строится ось {`\\(a\\)`} с итоговым количеством решений.
                </li>
            </ol>
        </div>
        <h2 ref={parabole} onClick={page.scroll(main)} className="main-menu">Настройка параболы</h2>
        <div className="frame">
            <h3>Типичная задача:</h3>
                <Task
                    text = {`Определить при каких условиях решения выражения<br>\\(
                        <center>ax^2 + bx + c \\vee 0
                    \\)<br>расположены нужным образом на множествах, ограниченных числами \\(x_i\\).`}
                />
            <h3>Решение:</h3>
            <ol>
                <li>Рассматривается случай (1): {'\\(a = 0\\)'}</li>
                <li>Обозначается случай (2): {'\\(a \\neq 0\\)'}</li>
                <li>
                    <div>Пишется:</div>
                        <ul>
                            <li>{'\\(f(x) = ax^2 + bx+c ~-\\) парабола'}</li>
                            <li>{'\\(D = b^2 - 4ac\\)'}</li>
                            <li>{'Вершина \\(x_в = \\frac{-b}{2a}\\)'}</li>
                            <li>{'\\(f(x_i) = ax_i^2+bx_i+c\\)'}</li>
                        </ul>
                </li>
                <li>
                    <div>Рассматриваются случаи:</div>
                    <div>(2.1) {'\\(D<0;~~\\)'}определяется при каких {'\\(a\\)'} выполняется нужное условие</div>
                    <div>(2.2) {'\\(D=0;~~\\)'}определяется при каких {'\\(x_в,~a\\)'} выполняется нужное условие</div>
                    <div>
                        (2.3) {'\\(D>0\\)'}
                        <div style={{marginLeft:'30px'}}>
                            (2.3.1) {'\\(x_в \\vee x_i;~~\\)'}определяется при каких {'\\(a\\cdot f(x_i)\\)'} выполняется нужное условие
                        </div>
                    </div>
                </li>
                <li>
                    <div>Для рассмотрения случаев используется информация:</div>
                    <ul>
                        <li>
                            <div>{'\\(a>0~~-\\) ветви параболы вверх'}</div>
                            <div>{'\\(a<0~~-\\) ветви параболы вниз'}</div>
                        </li>
                        <li>
                            <div>{'\\(D<0~~-\\) парабола не имеет общих точек с осью абсцисс'}</div>
                            <div>{'\\(D=0~~-\\) парабола касается оси абсцисс в вершине'}</div>
                            <div>{'\\(D>0~~-\\) парабола пересекает осью абсцисс'}</div>
                        </li>
                        <li>
                            <div>{'\\(a\\cdot f(x_i)<0~~-\\) парабола под точкой \\(x_i\\)'}</div>
                            <div>{'\\(a\\cdot f(x_i)>0~~-\\) парабола над точкой \\(x_i\\)'}</div>
                            <div>{'\\(a\\cdot f(x_i)=0~~-\\) парабола проходит через точку \\(x_i\\)'}</div>
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    </div>
)};

const Task = ({text}) => (
    <div className="param-task">
        {
            text.split('<br>').map(str => 
            <div style={{display:'flex', justifyContent:str.indexOf('<center>')===-1?'start':'center'}}>
                <div style={{width:'fit-content'}}>{str.replace('<center>','')}</div>
            </div>
            )
        }
    </div>
);

export default Params;