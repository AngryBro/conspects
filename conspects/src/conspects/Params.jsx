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
            {/* <div> */}
                <Task
                    text={`Определить сколько решений \\(x\\) имеет выражение<br>\\(
                        <center>F(x, a)
                    \\)<br>в зависимости от параметра \\(a\\).`}
                />
            {/* </div> */}
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
                    <div>Поиск условий наличия решений у каждого выражения {page.tex('G_i(x,a)')}.</div>
                    <div>{`\\(G_i(x,a)\\)`} может выглядеть одним из следующих образов:</div>
                    <ul>
                        <li>
                            <div>{`\\( \\cases{x = x_i(a) \\\\ a \\in A} \\).`}</div>
                            <div>Тогда пишется:</div>
                            <div>
                                {`\\((i):~~x_i = x_i(a)\\) является решением при \\(a \\in A\\).`}
                            </div>
                        </li>
                        <li>
                            <div>{`\\( \\cases{x \\in T \\\\ a \\in A} ~~~,\\) где \\(~~T ~- \\) бесконечное множество.`}</div>
                            <div>Тогда пишется:</div>
                            <div>
                                {`\\((i):~~\\) При \\(a \\in A\\) решений бесконечно.`}
                            </div>
                        </li>
                        <li>
                            <div>{`\\(\\cases{\\cases{x^2 + px + q = 0 \\\\ a\\in A}~~~(i.1) \\\\ f(x,a) \\neq 0}\\), где \\(f(x,a)\\) не имеет ограничений.`}</div>
                            <div>Тогда пишется:</div>
                            <div>
                                {`\\((i):~~ x_{i_1,i_2}\\) возможные решения \\((i.1)\\).`}
                            </div>
                            <div>Существуют при {page.tex('\\cases{D \\geq 0 \\\\ a\\in A}')}.</div>
                            <div>Совпадают при {page.tex('\\cases{D = 0 \\\\ a\\in A}')}</div>
                            <div>Найдём значения {page.tex('a')}, при которых {page.tex('f(x,a) = 0')}</div>
                            <div>{page.tex('\\cases{x^2 + px + q = 0 \\\\ a\\in A \\\\ f(x,a)=0}')}</div>
                        </li>
                    </ul>
                </li>
                <li>
                    <div>Поиск совпадений решений {page.tex('x_i')}:</div>
                    <div>{`\\(x_i = x_j\\) при \\(a\\), являющихся решением системы из \\((i)\\) и \\((j)\\):`}</div>
                    <div>{page.tex('\\cases{G_i(x,a) \\\\ G_j(x,a)}')}</div>
                </li>
                <li>С помощью числовых прямых строится итоговая прямая с зависимостью количества решений от {page.tex('a')}.</li>
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