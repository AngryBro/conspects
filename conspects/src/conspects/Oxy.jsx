import { useRef } from "react";
import { Title } from "../Title";
import { Content } from "../Content";
import { Block } from "../Block";
import { Description } from "../Description";
import { Cases } from "../Cases";

export const Oxy = () => {

    const beginRef = useRef();
    const point = useRef();
    const vector = useRef();
    const lines = useRef();
    const areas = useRef();
    const templates = useRef();

    return <div ref={beginRef} className="oxy">
        <Title docTitle="Координаты Oxy">Координатная плоскость \(Oxy\)</Title>
        <Content>
            <li link={point}>Точка</li>
            <li link={vector}>Вектор</li>
            <li link={lines}>Уравнения линий</li>
            <li link={areas}>Неравенства областей</li>
            <li link={templates}>Шаблоны работы с уравнениями линий</li>
        </Content>
        <Block title="Точка" link={point} beginRef={beginRef}>
            <ol className="def-list">
                <li>
                    Точка \(A\) имеет координаты \(x,~y:~~~A(x,y)\).
                </li>
                <li>
                    <div className="flex-mobile flex-align">
                        <div>
                            \(
                                {` \\displaystyle
                                \\cases{
                                    C \\in AB  \\\\
                                    AC~:~CB = a~:~b
                                }
                                `}    
                            \)
                        </div>
                        <div>
                            \(~~\Rightarrow~~ \)
                        </div>
                        <div>
                            \(
                                {` \\displaystyle
                                C_i = \\frac{1}{a+b} \\cdot 
                                (A_i \\cdot b + B_i \\cdot a)
                                `}    
                            \)
                        </div>
                    </div>
                </li>
            </ol>
        </Block>
        <Block title="Вектор" link={vector} beginRef={beginRef}>
            <ol className="def-list">
                <li>Вектор \(\veca\) имеет координаты \(x,~y:~~~a{"\\{x,~y\\}"}\).</li>
                <li>Вектор с началом в точке \(A\) и концом в точке \(B:~~~\vector{"{AB}"}\).</li>
                <li>\( \vector{"{AB}"}_i = B_i - A_i \).</li>
                <li>\( \veca \parallel k \cdot \veca, \) где \(k\) &ndash; целое число.</li>
                <li>Скалярное произведение векторов: \(\veca \cdot \vecb = a_x \cdot b_x + a_y \cdot b_y \).</li>
                <li>Длина вектора: \( \left|\veca\right| = \sqrt{"{\\veca^2}"} \).</li>
                <li>
                    Угол между векторами: \( \displaystyle \cos{"{\\angle\\left(\\veca,\\vecb\\right)}"} 
                        = \frac{"{\\veca \\cdot \\vecb}{\\left|\\veca\\right| \\cdot \\left|\\vecb\\right|}"}
                    \).
                </li>
            </ol>
        </Block>
        <Block title="Уравнения линий" link={lines} beginRef={beginRef}>
            <ol className="def-list">
                <li>
                    <div className="frame">
                        <div>Прямая: \(~~~ax+by+c=0\)</div>  
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>Невертикальная прямая: \(~~~y = a(x-b)+c\)</p>
                        <Description>
                            <ul className="dot-list">
                                <li>Прямая, содержит точку \((b,c)\), \(a\) &ndash; угловой коэффициент.</li>
                            </ul>
                            <p>
                                <div>Уравнение можно получить по двум точкам \(A,~B\).</div>
                                <div>\(\displaystyle a =  \frac{"{A_y - B_y}{A_x - B_x}"},~~\)
                                \( (b,c) = A \).</div>
                            </p>
                        </Description>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>Вертикальная прямая: \(~~~x = a\)</p>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>Парабола или прямая: \(~~~y = a(x-b)^2 + c\)</p>
                        <Description>
                            <ul className="dot-list">
                                <li>При \(a \neq 0\) парабола, вершина \((b,c)\), от \(a\) зависит направление ветвей.</li>
                                <li>При \(a = 0\) горизонтальная прямая \(y = c\).</li>
                            </ul>
                        </Description>
                    </div>
                    
                </li>
                <li>
                    <div className="frame">
                        <p>Парабола или прямая: \(~~~y = a(x-b)(x-c)\)</p>
                        <Description>
                            <ul className="dot-list">
                                <li>При \(a \neq 0\) парабола, содержит точки \((b,0),~(c,0)\), от \(a\) зависит направление ветвей.</li>
                                <li>При \(a = 0\) горизонтальная прямая \(y = 0\).</li>
                            </ul>
                        </Description>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>Окружность или точка или пустое множество: \(~~~(x-a)^2+(y-b)^2=c\) </p>
                        <Description>
                            <ul className="dot-list">
                                <li>
                                    При \(c {">"} 0\) окружность, центр \((a,b)\), радиус \(\sqrt{"{c}"}\).
                                </li>
                                <li>
                                    При \(c = 0\) точка \((a,b)\).
                                </li>
                                <li>
                                    При \(c ~{"{<}"}~ 0 \) пустое множество.
                                </li>
                            </ul>
                        </Description>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>Угол: \(~~~y = a|x-b|+c\) </p>
                        <Description>
                            <ul className="dot-list">
                                <li>Угол, вершина \((b,c)\), стороны параллельны \(y = ax,~y=-ax\).</li>
                                <li>
                                    Левая сторона: \(~~~\cases{"{y = -a(x-b)+c \\\\ x \\leqslant b}"}\).
                                </li>
                                <li>
                                    Правая сторона: \(~~~\cases{"{y = a(x-b)+c \\\\ x \\geqslant b}"}\).
                                </li>
                            </ul>
                        </Description>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>Гипербола: \(\displaystyle y = \frac{"{a}{x - b}"} + c \)</p>
                        <Description>
                            <ul className="dot-list">
                                <li>При \(a \neq 0\) гипербола, центр \((b,c)\).</li>
                            </ul>
                        </Description>
                    </div>
                </li>
            </ol>
        </Block>
        <Block title="Неравенства областей" link={areas} beginRef={beginRef}>
            <p>
                <b>Области строятся с учётом ОДЗ выражений.</b>
            </p>
            <ol className="def-list">
                <li>
                    <div className="frame">
                        <p>
                            \(y \vee f(x)\) &ndash; область выше / ниже графика \(y=f(x)\) включительно / не включительно.
                        </p>
                        <Cases>
                            <p>
                                <ul className="dot-list">
                                    <li>
                                        \(x \vee f(y)\) &ndash; область правее / левее
                                        графика \(x = f(y)\) включительно / не включительно.
                                    </li>
                                    <li>
                                        \(y {"{~>~}"} f(x)\) &ndash; область выше графика \(y=f(x)\).
                                    </li>
                                    <li>
                                        \(y \leqslant f(x)\) &ndash; область ниже графика \(y=f(x)\) включительно.
                                    </li>
                                    <li>
                                        \(x \geqslant f(y)\) &ndash; область правее графика
                                        \(x = f(y)\) включительно.
                                    </li>
                                    <li>
                                        \(f(x) {"{~<~}"} y ~\leqslant~ g(x) \) &ndash; область между графиками
                                        \(y=f(x)\) и \(y = g(x)\) включительно.
                                    </li>
                                </ul>
                            </p>
                        </Cases>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>
                            \(f(x,y) \neq 0\) &ndash; плоскость без графика \(f(x,y) = 0\).
                        </p>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>
                            \(f(x,y) \vee 0\) &ndash; область, граница \(f(x,y)=0\) включительно / не включительно.
                        </p>
                        <p>
                        Граница делит плоскость на несколько частей, из каждой берётся пробная точка,
                        и подставляется в левую часть неравенства. Если получилось \(\vee~ 0\),
                        то часть плоскости, из которой взята точка, закрашивается, иначе нет.
                        </p>
                    </div>
                </li>
            </ol>
        </Block>
        <Block title="Шаблоны работы с уравнениями линий" link={templates} beginRef={beginRef}>

        </Block>

    </div>
}

/*
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
                                    Левая сторона угла: {`\\(~~~\\cases{y=-\\alpha (x-\\beta) + \\gamma \\\\ x \\leqslant \\beta} \\)`}.
                                </li>
                                <li>
                                    Правая сторона угла: {`\\(~~~\\cases{y=\\alpha (x-\\beta) + \\gamma \\\\ x \\geqslant \\beta} \\)`}.
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
                    <div>{`\\(y \\vee f(x)~~~-\\)`} область выше / ниже графика {`\\(y = f(x)\\)`} (включительно / не включительно).</div>
                    <Cases
                        block={
                            <ul>
                                <li>{`\\(y > f(x)~~~-\\)`} область выше графика {`\\(y=f(x)\\)`}.</li>
                                <li>{`\\(y \\leqslant f(x)~~~-\\)`} область ниже графика {`\\(y=f(x)\\)`} (включительно).</li>
                                <li>{`\\(x \\geqslant f(y)~~~-\\)`} область правее графика {`\\(x=f(y)\\)`} (включительно).</li>
                                <li>{`\\(x < f(y)~~~-\\)`} область левее графика  {`\\(x=f(y)\\)`}.</li>
                                <li>{`\\(f(y) \\leqslant x < g(y)~~~-\\)`} область между графиками {`\\(x=f(y)\\)`} (включительно) и {`\\(x=g(y)\\)`}.</li>
                            </ul>
                        }
                    />
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
                    <div>{`\\(f(x,y) \\vee 0~~~-\\)`} область, граница {`\\(f(x,y) = 0\\)`} (включительно / не включительно).</div>
                    <div>Граница делит плоскость на несколько частей, из каждой берётся пробная точка,</div>
                    <div>и подставляется в левую часть неравенства. Если получилось {`\\(\\vee~ 0\\)`},</div>
                    <div>то часть плоскости, из которой взята точка, закрашивается, иначе нет.</div>
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
*/
