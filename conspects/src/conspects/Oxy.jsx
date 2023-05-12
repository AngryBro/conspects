import { useRef } from "react";
import Hidinglist from "../Hidinglist";

const Oxy = ({page}) => {

    const main = useRef();
    const lines = useRef();
    const areas = useRef();
    const templates = useRef();

    return page(
    <div>
        <h1 className="main-menu" ref={main} onClick={page.index}>Координатная плоскость {`\\(Oxy\\)`}</h1>
        <ul className="list">
            <li onClick={page.scroll(lines)}>Уравнения линий и их описания</li>
            <li onClick={page.scroll(areas)}>Неравенства областей и их описания</li>
            <li onClick={page.scroll(templates)}>Шаблоны работы с уравнениями линий</li>
        </ul>
        <h2 onClick={page.scroll(main)} ref={lines} className="main-menu">Уравнения линий</h2>
        <ol>
            <li>
                <div className="frame">
                    <div>Прямая: {`\\(~~~\\alpha x+ \\beta y+\\gamma=0\\)`}</div>
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>Невертикальная прямая: {`\\(~~~y = \\alpha(x-\\beta)+\\gamma\\)`}</div>
                    <div>
                        <Description
                            block={
                                <ul className="margin-list">
                                    <li>Прямая, содержит {`\\((\\beta;~\\gamma)\\)`}, {`\\(\\alpha~-\\)`} угловой коэффициент.</li>
                                </ul>
                            }
                        />
                    </div>
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>Вертикальная прямая: {`\\(~~~x=\\alpha\\)`}</div>
                    <div>
                        <Description
                            block={
                                <ul>
                                    <li>Вертикальная прямая, содержит {`\\((\\alpha;~0)\\)`}.</li>
                                </ul>  
                            }
                        />
                    </div>
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>
                        Парабола или прямая:  {`\\(~~~y = \\alpha(x-\\beta)^2 + \\gamma\\)`}.
                    </div>
                    <div>
                        <Description
                            block={
                                <ul>
                                    <li>При {`\\(\\alpha = 0\\)`} горизонтальная прямая {`\\(y=\\gamma\\)`}.</li>
                                    <li>При {`\\(\\alpha = 0\\)`} парабола, вершина {`\\((\\beta;~\\gamma)\\)`}, от {`\\(\\alpha\\)`} зависит направление ветвей.</li>
                                </ul>
                            }
                        />
                    </div>
                    
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>
                        Окружность или точка или пустое множество: {`\\(~~~(x-\\alpha)^2+(y-\\beta)^2=\\gamma\\)`}
                    </div>
                    <Description
                    block={
                        <ul>
                            <li>При {`\\(\\gamma > 0\\)`} окружность, центр {`\\((\\alpha;~\\beta)\\)`}, радиус {`\\(\\sqrt{\\gamma}\\)`}.</li>        
                            <li>При {`\\(\\gamma = 0\\)`} точка {`\\((\\alpha;~\\beta)\\)`}.</li>
                            <li>При {`\\(\\gamma < 0\\)`} пустое множество.</li>
                        </ul>
                    }
                    />
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>
                        Угол: {`\\(~~~y=\\alpha |x-\\beta| + \\gamma\\)`}
                    </div>
                    <Description
                        block={
                            <ul>
                                <li>
                                    Угол, вершина {`\\((\\beta;~\\gamma)\\)`}, стороны параллельны
                                    {`\\(~y=\\alpha x,~y=-\\alpha x\\)`}, направление сторон зависит от {`\\(\\alpha\\)`}.
                                </li>
                                <li>
                                    Левая сторона угла: {`\\(~~~\\cases{y=-\\alpha (x-\\beta) + \\gamma \\\\ x \\leqslant \\beta} \\)`}
                                </li>
                                <li>
                                    Правая сторона угла: {`\\(~~~\\cases{y=\\alpha (x-\\beta) + \\gamma \\\\ x \\geqslant \\beta} \\)`}
                                </li>
                            </ul>
                        }
                    />
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>
                        Гипербола или прямая: {`\\(~~~y = \\displaystyle\\frac{\\alpha}{x - \\beta} + \\gamma\\)`}
                    </div>
                    <Description
                        block={
                            <ul>
                                <li>
                                    При {`\\(\\alpha \\neq 0\\)`} гипербола, центр {`\\((\\beta;~\\gamma)\\)`}, от {`\\(\\alpha\\)`} зависит расстояние между ветвями.
                                </li>
                                <li>
                                    При {`\\(\\alpha = 0\\)`} горизонтальная прямая {`\\(y=\\gamma\\)`} без точки {`\\((\\beta;~\\gamma)\\)`}.
                                </li>
                            </ul>
                        }
                    />
                </div>
            </li>
        </ol>
        <h2 onClick={page.scroll(main)} ref={areas} className="main-menu">Неравенства областей</h2>
        <ol>
            <li>
                <div className="frame">
                    {`\\(y \\geqslant f(x)~~~-\\)`} область выше графика {`\\(y = f(x)\\)`} (включительно).
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>{`\\(f(x,y) \\neq 0~~~-\\)`} плоскость без графика {`\\(f(x,y)=0\\)`}.</div>
                    <div><i>Примечание:</i> область строится с учётом ограничений {`\\(f(x,y)\\)`}.</div>
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>{`\\(f(x,y) \\vee 0~~~-\\)`} область, граница {`\\(f(x,y) = 0\\)`}.</div>
                    <div><i>Примечание:</i> область строится с учётом ограничений {`\\(f(x,y)\\)`}.</div>
                </div>
            </li>
        </ol>
        <h2 className="main-menu" onClick={page.scroll(main)} ref={templates}>Шаблоны работы с линиями</h2>
        <ol>
            <li>
                <div className="frame">
                    <div>График {`\\(G(x,y)\\)`} проходит через точку {`\\(A\\)`}: {`\\(~~~A \\in G(x,y)\\)`}</div>
                    <Then block={`\\(G(A)\\)`} />
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>Поиск общих точек линий {`\\(G(x,y)\\)`} и {`\\(F(x,y)\\)`}</div>
                    <Then block={`\\(\\cases{G(x,y) \\\\ F(x,y)}\\)`} />
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>
                        Прямые {`\\(y = \\alpha_1(x-\\beta_1) + \\gamma_1~~\\)`} и 
                        {`\\(~~y = \\alpha_2(x-\\beta_2) + \\gamma_2~~\\)`} параллельны или совпадают 
                    </div>
                    <Then block={`\\(\\alpha_1 = \\alpha_2\\)`}/>
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>Касание линии {`\\(y=f(x)\\)`} и кривой {`\\(y=g(x)\\)`}</div>
                    <Then block={`\\(\\cases{f(x) = g(x) \\\\ f'(x) = g'(x)}\\)`}/>
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>
                        Касание прямой {`\\(l~\\)`}
                        и окружности с центром {`\\(C\\)`} и радиусом {`\\(r\\)`}
                    </div>
                    <Then block={`\\(\\rho\\left(C, l\\right) = r\\)`}/>
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>Касание внешним образом окружностей {`\\((C_1,r_1)\\)`} и {`\\((C_2,r_2)\\)`}</div>
                    <Then block={`\\(\\rho(C_1,C_2) = r_1 + r_2\\)`}/>
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>Касание внутренним образом окружностей {`\\((C_1,r_1)\\)`} и {`\\((C_2,r_2)\\)`}</div>
                    <Then block={`\\(\\rho(C_1,C_2) = |r_1 - r_2|\\)`}/>
                </div>
            </li>
            <li>
                <div className="frame">
                    <div style={{width:'500px'}}>Формула расстояния от точки до точки</div>
                    <Formula
                        block={
                            <>
                                <div>{`\\(\\rho(A,B) = \\sqrt{(A_x - B_x)^2+(A_y - B_y)^2}\\)`}</div>
                                <div style={{marginTop:'50px'}}>
                                    &laquo;Ро из точки {`\\(A\\)`} в точку {`\\(B\\)`}&raquo; &nbsp;&nbsp; &copy; Oxxxymiron
                                </div>
                            </>
                        }
                    />
                </div>
            </li>
            <li>
                <div className="frame">
                    <div>Формула расстояния от точки до прямой</div>
                    <Formula block={`\\(\\rho(A,~~ \\alpha x + \\beta y + \\gamma = 0) = \\displaystyle\\frac{|\\alpha A_x + \\beta A_y + \\gamma|}{\\sqrt{\\alpha^2 + \\beta^2}}\\)`}/>
                </div>
            </li>
        </ol>
        <div style={{height:'500px'}}></div>
    </div>
);
}

const Description = ({block}) => (
    <Showsmth smth={'описание'} block={block} />
);

const Then = ({block}) => (
    <Showsmth smth={'вывод'} block={block} />
);

const Formula = ({block}) => <Showsmth smth={'формулу'} block={block} />

const Showsmth = ({block, smth}) => (
    <Hidinglist
        parent={<div className="sub-menu">Показать {smth}</div>}
        parent1={<div className="sub-menu">Скрыть {smth}</div>}
        child={<div>{block}</div>}
    />
);

export default Oxy;