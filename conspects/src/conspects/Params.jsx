import { useRef } from "react";

const Params = ({page}) => {

    const main = useRef();
    const analytic = useRef();

    return page(
    <div>
        <h1 ref={main} onClick={page.index} className="main-menu">Задачи с параметром</h1>
        <ul className="list">
            <li>Замена</li>
            <li onClick={page.scroll(analytic)}>Аналитика</li>
            <li>Графика</li>
            <li>Квадратный трёхчлен</li>
            <li>Симметрия</li>
            <li>Функция</li>
            <li>Оценка</li>
        </ul>
        Конспект пока в процессе. Весь материал в старой версии.
        <h2 onClick={page.scroll(main)} ref={analytic} className="main-menu">Аналитика</h2>
        <div className="frame">
            <h3>Типичная задача:</h3>
            <div>{`Определить сколько решений \\(x\\) имеет выражение \\(
                    F(x, a)
                \\) в зависимости от параметра \\(a\\).`}
            </div>
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
                            <div>{`\\( \\cases{x \\in T \\\\ a \\in A} \\).`}</div>
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
    </div>
)};

export default Params;