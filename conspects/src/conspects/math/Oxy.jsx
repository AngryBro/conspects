import { useRef } from "react";
import { Title } from "../../Title";
import { Content } from "../../Content";
import { Block } from "../../Block";
import { Description } from "../../Description";
import { Cases } from "../../Cases";
import { Output } from "../../Output";
import { Formula } from "../../Formula";

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
            <div className="frame">
                <ol className="def-list smaller-xx">
                    <li>
                        Точка \(A\) имеет координаты \(x,~y:~~~A(x,y)\).
                    </li>
                    <li>
                        <div className="flex-mobile flex-align" style={{marginBottom:"10px"}}>
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
                            <div className="mobile-arrow">
                                \(~~\Rightarrow~~ \)
                            </div>
                            <div>
                                \(
                                    {` \\displaystyle
                                    C_i = \\frac{1}{a+b} \\cdot 
                                    (A_i \\cdot b + B_i \\cdot a).
                                    `}    
                                \)
                            </div>
                        </div>
                        <Cases>
                            <p className="flex-mobile flex-align">
                                <div>\(C\) &ndash; середина \(AB\)</div>
                                <div className="mobile-arrow">
                                    \(\Rightarrow\)
                                </div>
                                <div>\(C_i = \frac{"{1}{2}"}(A_i + B_i).\)</div>
                            </p>
                        </Cases>
                    </li>
                </ol>
            </div>
        </Block>
        <Block title="Вектор" link={vector} beginRef={beginRef}>
            <div className="frame smaller-xx">
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
            </div>
        </Block>
        <Block title="Уравнения линий" link={lines} beginRef={beginRef}>
            <ol className="def-list smaller-xx">
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
        <Block title="Шаблоны работы с уравнениями линий" link={templates} beginRef={beginRef}>
            <ol className="def-list smaller-xx">
                <li>
                    <div className="frame">
                        <p>
                            График \(G(x,y)\) проходит через точку \(A:~~~A \in G(x,y)\)
                        </p>
                        <Output>\(G(A)\)</Output>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>
                            Поиск общих точек линий \(G(x,y)\) и \(F(x,y)\)
                        </p>
                        <Output>
                            \( \cases{"{G(x,y) \\\\ F(x,y)}"} \)
                        </Output>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>
                            Прямые \(y = a_1x+b_1\) и \(y = a_2x+b_2\) параллельны или совпадают
                        </p>
                        <Output>\(a_1 = a_2\)</Output>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>
                            Касание линии \(y = f(x)\) и кривой \(y = g(x)\)
                        </p>
                        <Output>
                            \( \cases{"{f(x) = g(x) \\\\ f'(x) = g'(x)}"} \)
                        </Output>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>
                            Касание прямой \(l\) и окружности с центром \(C\) и радиусом \(r\)
                        </p>
                        <Output>
                            \( \rho(C, l) = r \)
                        </Output>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>
                            Касание внешним образом окружностей \((C_1,r_1)\) и \((C_2,r_2)\)
                        </p>
                        <Output>
                            \( \rho(C_1,C_2) = r_1 + r_2 \)
                        </Output>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>
                            Касание внутренним образом окружностей \((C_1,r_1)\) и \((C_2,r_2)\)
                        </p>
                        <Output>
                            \( \rho(C_1,C_2) = |r_1 - r_2| \)
                        </Output>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>
                            Формула расстояния от точки до точки
                        </p>
                        <Formula>
                            <div className="xx-smaller-xx">\( \rho(A,B) = \sqrt{"{(A_x - B_x)^2+(A_y - B_y)^2}"} \)</div>
                            <p>
                            «Ро из точки \(A\) в точку \(B\)» © Oxxxymiron
                            </p>
                        </Formula>
                    </div>
                </li>
                <li>
                    <div className="frame">
                        <p>
                            Формула расстояния от точки до прямой
                        </p>
                        <Formula>
                            <div className="flex-mobile flex-align">
                                <div>
                                    \( \displaystyle
                                    \rho(A, ax+by+c=0)    
                                    \)
                                </div>
                                <div className="mobile-arrow">\( = \)</div>
                                <div>
                                    \( \displaystyle
                                    \frac{"{|aA_x+bA_y+c|}{\\sqrt{a^2+b^2}}"}    
                                    \)
                                </div>
                            </div>
                            
                        </Formula>
                    </div>
                </li>
            </ol>
        </Block>
        <Block title="Неравенства областей" link={areas} beginRef={beginRef}>
            <p>
                <b>Области строятся с учётом ОДЗ выражений.</b>
            </p>
            <ol className="def-list smaller-xx">
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

    </div>
}

