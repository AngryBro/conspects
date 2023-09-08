import { useRef } from "react";
import { Spoiler } from "../spoiler";
import { Title } from "../Title";
import { Content } from "../Content";
import { Block } from "../Block";
import { ButtonSpoiler } from "../buttons/ButtonSpoiler";
import { Props } from "../Props";
import { ButtonBigSpoiler } from "../buttons/ButtonBigSpoiler";

export const Equivalents = () => {

    const equal = useRef();
    const notEqual = useRef();
    const more = useRef();
    const cases = useRef();
    const beginRef = useRef();

    const Equivalent = ({children}) => {
        const main = Array.isArray(children) ? children[0] : children;
        const cases = Array.isArray(children) ? children[1] : <></>;
        return <div>
            <div className="frame">{main}</div>
            {
                !Array.isArray(children) ? <></>
                :
                <div className="equivalents-cases">
                    <Spoiler>
                        <ButtonSpoiler opened={false}>Показать частные случаи</ButtonSpoiler>
                        {cases}
                        <ButtonSpoiler opened={true}>Скрыть частные случаи</ButtonSpoiler>
                    </Spoiler>
                </div>

            }
        </div>
    }

    return <div ref={beginRef}>
        
        <Title>Равносильные переходы</Title>
        <Content>
            <li link={equal}>Уравнения \( \left(~\large = ~\right)\)</li>
            <li link={notEqual}>&laquo;Антиравенства&raquo; \( \left(~\large \neq ~\right) \)</li>
            <li link={more}><span>Неравенства</span> <span>\( \left(~\large {">"},~{"<"},~\geqslant,~\leqslant ~\right) \)</span></li>
            <li link={cases}>Логика \(\left(~\large {"\\{"},~{"["} ~\right) \)</li>
        </Content>
        <Block title={"Уравнения \\( \\left(~\\large = ~\\right)\\)"} beginRef={beginRef} link={equal}>
            <ol className="def-list">
                <li>
                    <Equivalent>
                        <div className="equivalents-vertical mini-math">
                            <div style={{maxWidth:"100%"}} className="mini-math">\( {"a_nx^n + a_{n-1}x^{n-1} + \\ldots + a_1x + a_0 = 0 "} \)</div>
                            <div className="equivalents-arrow">\( \Updownarrow \)</div>
                            <div>\( P_1(x) \cdot P_2(x) \cdot \ldots \cdot P_m(x) = 0 \)</div>
                            <div className="equivalents-arrow">\( \Updownarrow \)</div>
                            <div>\( {"\\union{ P_1(x) = 0 \\\\ P_2(x) = 0 \\\\ \\ldots \\\\ P_m(x) = 0 }"} \)</div>
                        </div>
                        <Props>
                            <tr>
                                <td>\(ax^2 + bx + c = 0\)</td>
                                <td>\( \union{"{x = x_1 \\\\ x = x_2}"} \)</td>
                            </tr>
                            <tr>
                                <td>\( x^{"{2n}"} = a^{"{2n}"} \)</td>
                                <td>\( \union{"{x = a \\\\ x = -a}"} \)</td>
                            </tr>
                        </Props>
                    </Equivalent>
                </li>
                <li>
                    <Equivalent>
                        <div className="equivalents-vertical-mobile math">
                            <div>
                                \( \displaystyle\frac{"{a_1 \\cdot a_2 \\cdot \\ldots \\cdot a_n}{b_1 \\cdot b_2 \\cdot \\ldots \\cdot b_m}"} = 0 \)
                            </div>
                            <div className="equivalents-arrow">\( \LR \)</div>
                            <div>
                                \({`
                                    \\cases{
                                        \\union{
                                            a_1 = 0 \\\\
                                            a_2 = 0 \\\\
                                            \\ldots \\\\
                                            a_n = 0
                                        } \\\\~\\\\
                                        ограничения~из~a_i \\\\~\\\\
                                        b_1 \\neq 0 \\\\
                                        b_2 \\neq 0 \\\\
                                        \\ldots \\\\
                                        b_m \\neq 0
                                    }
                                `}\)
                            </div>
                        </div>
                        <Props>
                            <tr>
                                <td>\( a \cdot b = 0 \)</td>
                                <td>\( {`
                                    \\union{
                                        \\cases{
                                            a  = 0 \\\\
                                            ограничения ~из~b
                                        } \\\\
                                        \\cases{
                                            b = 0 \\\\
                                            ограничения~из~a
                                        }
                                    }
                                `} \)</td>
                            </tr>
                            <tr>
                                <td>
                                    \( \displaystyle\frac{"{a}{b}"} = 0 \)
                                </td>
                                <td>
                                    \( \cases{"{a = 0 \\\\ b \\neq 0}"} \)
                                </td>
                            </tr>
                        </Props>
                    </Equivalent>
                </li>
                <li>
                    <Equivalent>
                        <div className="math">
                            \( \displaystyle \frac{"{a}{b}"} = \frac{"{c}{d}"} \LR 
                                    \cases{"{a \\cdot d = b \\cdot c \\\\ b \\neq 0 \\\\ d \\neq 0}"}
                             \)
                        </div>
                    </Equivalent>
                </li>
                <li>
                    <Equivalent>
                        <div>
                            \(
                                \sqrt[2n]{"{a}"} = b \LR \cases{"{a = b^{2n} \\\\ b \\geqslant 0}"}
                            \)
                        </div>
                        <Props>
                            <tr>
                                <td>\( \sqrt{"{a}"} = b \)</td>
                                <td>\( \cases{"{a = b^2 \\\\ b \\geqslant 0}"} \)</td>
                            </tr>
                        </Props>
                    </Equivalent>
                </li>
                <li>
                    <Equivalent>
                        <div className="equivalents-vertical micro-math">
                            <div>
                                \(
                                    \monotone{"{(a)}"} = \monotone{"{(b)}"}
                                \)
                            </div>
                            <div className="equivalents-arrow">\(\Updownarrow\)</div>
                            <div>
                                \(
                                    \cases{`{
                                        a = b \\\\
                                        ограничение ~ на ~ a ~ или ~ b
                                    }`}
                                \)
                            </div>
                        </div>
                        <Props>
                            <tr>
                                <td>
                                    \( c^a = c^b \)
                                </td>
                                <td>
                                    \( a = b\)
                                </td>
                                <td className="__know">
                                    \(
                                        \cases{`{
                                            c > 0 \\\\
                                            c \\neq 1
                                        }`}
                                    \)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    \( \log_c{"{a}"} = \log_c{"{b}"} \)
                                </td>
                                <td>
                                    \( \cases{"{a = b \\\\ a > 0}"} \)
                                </td>
                                <td className="__know">
                                    \(
                                        \cases{`{
                                            c > 0 \\\\
                                            c \\neq 1
                                        }`}
                                    \)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    \( \sqrt[c]{"{a}"} = \sqrt[c]{"{b}"} \)
                                </td>
                                <td>
                                    \( \cases{"{a = b \\\\ a \\geqslant 0}"} \)
                                </td>
                                <td className="__know">
                                    \(
                                        \cases{"{c \\in \\NN \\\\ c \\div 2}"}
                                    \)
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    \( \sqrt[c]{"{a}"} = \sqrt[c]{"{b}"} \)
                                </td>
                                <td>\( a = b \)</td>
                                <td className="__know">
                                \(
                                        \cases{"{c \\in \\NN \\\\ c \\ndiv 2}"}
                                    \)
                                </td>
                            </tr>
                            <tr>
                                <td>\( a^c = b^c \)</td>
                                <td>\(a = b\)</td>
                                <td className="__know">
                                    \(
                                        \cases{"{c \\in \\NN \\\\ c \\ndiv 2}"}
                                    \)
                                </td>
                            </tr>
                        </Props>
                    </Equivalent>
                </li>
                <li>
                    <Spoiler>
                        <ButtonBigSpoiler opened={false}>Однородные уравнения</ButtonBigSpoiler>
                        <div style={{transform: "scaleX(0.7) scaleY(0.7)", transformOrigin:"left top"}}>
                            <Props>
                                <tr>
                                    <td>\( a \cdot m^x = b \cdot n^x \)</td>
                                    <td>\( a \cdot \displaystyle \left( \frac{"{m}{n}"} \right)^x = b \)</td>
                                    <td className="__always"></td>
                                </tr>
                                <tr>
                                    <td>\(
                                            a \cdot \left(m^2 \right)^x +
                                            b \cdot (mn)^x +
                                            c \cdot \left( n^2 \right)^x = 0
                                        \)</td>
                                    <td>
                                        \( \displaystyle
                                            a \cdot \left(\left( \frac{"{m}{n}"} \right)^x\right)^2
                                            + b \cdot \left( \frac{"{m}{n}"} \right)^x 
                                            + c = 0
                                        \)
                                    </td>
                                    <td className="__always"></td>
                                </tr>
                                <tr>
                                    <td>
                                        \(
                                            a \cdot \sin{"{x}"} = b \cdot \cos{"{x}"}
                                        \)
                                    </td>
                                    <td>
                                        \( a \cdot \tg{"{x}"} = b \)
                                    </td>
                                    <td className="__know">\( a \neq 0 \)</td>
                                </tr>
                                <tr>
                                    <td>
                                        \(
                                            a \cdot \sin{"{x}"} = b \cdot \cos{"{x}"}
                                        \)
                                    </td>
                                    <td>
                                        \( a = b \cdot \ctg{"{x}"} \)
                                    </td>
                                    <td className="__know">\( b \neq 0 \)</td>
                                </tr>
                                <tr>
                                    <td>
                                        \(
                                            a\cdot\sin^2{"{x}"}
                                            + b \cdot \sin{"{x}"} \cdot \cos{"{x}"}
                                            + c \cdot \cos^2{"{x}"} = 0
                                        \)
                                    </td>
                                    <td>
                                        \(
                                            a \cdot \operatorname{"{tg^2}"}{"{x}"}
                                            + b \cdot \tg{"{x}"}
                                            +c = 0    
                                        \)
                                    </td>
                                    <td className="__know">\( a \neq 0 \)</td>
                                </tr>
                                <tr>
                                    <td>
                                        \(
                                            a\cdot\sin^2{"{x}"}
                                            + b \cdot \sin{"{x}"} \cdot \cos{"{x}"}
                                            + c \cdot \cos^2{"{x}"} = 0
                                        \)
                                    </td>
                                    <td>
                                        \(
                                            a 
                                            + b \cdot \ctg{"{x}"}
                                            +c \cdot \operatorname{"{ctg^2}"}{"{x}"} = 0    
                                        \)
                                    </td>
                                    <td className="__know">\( c \neq 0 \)</td>
                                </tr>
                            </Props>
                        </div>
                        <ButtonBigSpoiler opened={true}>Однородные уравнения</ButtonBigSpoiler>
                    </Spoiler>
                </li>
            </ol>
        </Block>
        <Block title={"«Антиравенства» \\( \\left(~\\large \\neq ~\\right) \\)"} link={notEqual} beginRef={beginRef}>
                <ol>
                    <li className="math">
                        <Equivalent>
                            {`\\(
                                a_1 \\cdot a_2 \\cdot \\ldots \\cdot a_n \\neq 0
                                \\LR
                                \\cases{
                                    a_1 \\neq 0 \\\\
                                    a_2 \\neq 0 \\\\
                                    \\ldots \\\\
                                    a_n \\neq 0
                                }
                            \\)`}
                        </Equivalent>
                    </li>
                </ol>
        </Block>
        <Block title={"Неравенства \\( \\left(~\\large >,~<,~\\geqslant,~\\leqslant ~\\right) \\)"} link={more} beginRef={beginRef}>

        </Block>
        <Block title={"Логика \\(\\left(~\\large \\{,~[ ~\\right) \\)"} link={cases} beginRef={beginRef}>

        </Block>
    </div>

}

    /*
    return page(
    <div>
        <h1 className="main-menu" ref={main} onClick={page.index}>Равносильные переходы</h1>
        <ul className="list">
            <li onClick={page.scroll(equal)}>{'\\( \\LARGE = \\)'}</li>
            <li onClick={page.scroll(notEqual)}>{'\\( \\LARGE \\neq \\)'}</li>
            <li onClick={page.scroll(more)}>{'\\( \\LARGE > \\normalsize,~ \\LARGE< \\normalsize,~ \\LARGE \\geqslant \\normalsize,~ \\LARGE \\leqslant \\)'}</li>
            <li onClick={page.scroll(cases)}>{'\\( \\LARGE \\{ \\normalsize,~ \\LARGE [ \\)'}</li>
        </ul>
        <h2 onClick={page.scroll(main)} ref={equal} className="main-menu">{'\\( \\Huge = \\)'}</h2>
        <ol>
            <Equivalent
                tex={`
                    a_nx^n + a_{n-1}x^{n-1}+\\ldots + a_1x+a_0=0 \\LR <br>
                    \\LR P_1(x) \\cdot P_2(x) \\cdot \\ldots \\cdot P_m(x) = 0 \\LR
                    \\union{P_1(x)=0 \\\\ P_2(x)=0 \\\\ \\ldots \\\\ P_m(x)=0}
                `}
                cases={[
                    `ax^2+bx+c = 0 ~~\\overset{a\\neq 0,D\\geqslant 0}{\\LLR}~~ \\union{x = x_1 \\\\ x=x_2}`,
                    'x^{2n} = a^{2n} \\LR \\union{x=a\\\\ x = -a}'
                ]}
            />
            <Equivalent
                tex={`
                    a_1 \\cdot a_2 \\cdot \\ldots \\cdot a_n = 0 \\LR
                    \\cases{
                        \\union{
                            a_1 = 0\\\\
                            a_2 = 0 \\\\
                            \\ldots \\\\
                            a_n = 0
                        }\\\\
                        ограничения~из~a_1,~a_2,\\ldots ,~a_n
                    }
                `}
                cases={[
                    `
                        a \\cdot b = 0 \\LR 
                        \\union{
                            \\cases{
                                a = 0 \\\\
                                ограничения~из~b
                            } \\\\
                            \\cases{
                                b=0 \\\\
                                ограничения~из~a
                            }
                        }
                    `
                ]}
            />
            <Equivalent
                tex={`
                    \\frac{a}{b} = \\frac{c}{d} \\LR
                    \\cases{a \\cdot d = b \\cdot c \\\\ b \\neq 0 \\\\ d \\neq 0}
                `}
                cases={[
                    '\\frac{a}{b} = 0 \\LR \\cases{a=0\\\\ b\\neq 0}'
                ]}
            />
            <Equivalent
                tex = {`
                    \\operatorname{МонотоннаяФункция}{(a)} = \\operatorname{МонотоннаяФункция}{(b)}
                    \\LR \\cases{
                        a = b \\\\
                        ограничение~на~a~или~b
                    }
                `}
                cases = {[
                    'c^a = c^b ~~\\overset{c=const\\neq 1}{\\Longleftrightarrow}~~ a = b',
                    `\\log_c{(a)} = \\log_c{(b)} ~~\\overset{c=const\\neq 1}{\\Longleftrightarrow}~~
                    \\cases{a=b \\\\ a > 0}`,
                    '\\sqrt[2n]{a}=\\sqrt[2n]{b} \\LR \\cases{a = b \\\\ a \\geqslant 0}',
                    '\\sqrt[2n+1]{a} = \\sqrt[2n+1]{b} \\LR a = b',
                    'a^{2n+1} = b^{2n+1} ~~\\overset{n>1}{\\LLR}~~ a = b'
                ]}
            />
            <Equivalent
                tex = {'\\sqrt[2n]{a} = b \\LR \\cases{a = b^{2n} \\\\ b \\geqslant 0}'}
                cases={[
                    '\\sqrt{a} = b \\LR \\cases{a = b^2 \\\\ b \\geqslant 0}'
                ]}
            />
            <Equivalent
                tex = {displaystyle(`
                    a_nx^n + a_{n-1}x^{n-1}y^1+a_{n-2}x^{n-2}y^2+\\ldots +
                    a_2x^2y^{n-2}+a_1x^1y^{n-1}+a_0y^n = 0 \\LR <br>
                    ~~\\overset{a_n\\neq 0}{\\Longleftrightarrow}~~ \\union{
                        (x,y) = (0,0) \\\\
                        
                            a_n\\left(\\frac{x}{y}\\right)^n + 
                            a_{n-1}\\left(\\frac{x}{y}\\right)^{n-1} + \\ldots +
                            a_1 \\left(\\frac{x}{y}\\right)^1 + a_0 = 0
                        
                    }
                `)}
                cases = {[
                    'a \\cdot m^x = b \\cdot n^x \\LR a \\cdot \\left(\\frac{m}{n}\\right)^x = b',
                    `a \\cdot \\left(m^2\\right)^x + b \\cdot (mn)^x + c \\cdot \\left(n^2\\right)^x = 0
                    \\LR
                    a \\cdot \\left(\\left(\\frac{m}{n}\\right)^x\\right)^2 + 
                    b \\cdot \\left(\\frac{m}{n}\\right)^x + c = 0`,
                    `a\\cdot\\sin{x} = b \\cdot \\cos{x} ~~\\overset{a\\neq 0}{\\LLR}~~
                    a \\cdot \\tg{x} = b`,
                    `a\\cdot \\sin^2{x} + b \\cdot \\sin{x}\\cdot \\cos{x} + c\\cdot \\cos^2{x} = 0
                    ~~\\overset{a\\neq 0}{\\LLR}~~
                    a\\cdot \\operatorname{tg^2}{x} + b \\cdot \\tg{x} + c = 0`
                ]}
            />
        </ol>
        <h2 onClick={page.scroll(main)} ref={notEqual} className="main-menu">{'\\(\\Huge \\neq \\)'}</h2>
        <ol>
            <Equivalent
                tex = {`
                    a_1 \\cdot a_2 \\cdot \\ldots \\cdot a_n \\neq 0 \\LR
                    \\cases{a_1 \\neq 0 \\\\ a_2 \\neq 0 \\\\ \\ldots \\\\ a_n \\neq 0}
                `}
            />
            <Equivalent
                tex = {`
                    \\operatorname{МонотоннаяФункция}{(a)} \\neq \\operatorname{МонотоннаяФункция}{(b)}
                    \\LR \\cases{a \\neq b \\\\ ограничение~на~a \\\\ ограничение~на~b}
                `}
                cases = {[
                    'c^a \\neq c^b ~~\\overset{c=const\\neq 1}{\\LLR}~~ a\\neq b',
                    `\\log_c{(a)} \\neq \\log_c{(b)} ~~\\overset{c=const\\neq 1}{\\LLR}~~
                    \\cases{a \\neq b \\\\ a>0 \\\\ b>0}`,
                    '\\sqrt[2n]{a} \\neq \\sqrt[2n]{b} \\LR \\cases{a \\neq b \\\\ a\\geqslant 0 \\\\ b \\geqslant 0}',
                    '\\sqrt[2n+1]{a} \\neq \\sqrt[2n+1]{b} \\LR a\\neq b',
                    'a^{2n+1} \\neq b^{2n+1} ~~\\overset{n>1}{\\LLR}~~ a \\neq b'
                ]}
            />
        </ol>
        <h2 onClick={page.scroll(main)} ref={more} className="main-menu">{'\\(\\Huge >,<,\\geqslant , \\leqslant\\)'}</h2>
        <ol>
            <li>
                <Hidinglist
                    parent = {<Method name='Метод интервалов'/>}
                    child = {
                        <div className="frame">
                            <h3>Нужный вид:</h3>
                            <ol>
                                <li>Справа 0</li>
                                <li>Слева произведение</li>
                                <li>Каждый множитель имеет вид {'\\((x - c)\\)'}</li>
                            </ol>
                            <h3>Применение:</h3>
                            <ol>
                                <li>Рисуется ось {'\\(Ox\\)'}</li>
                                <li>
                                    Отмечаются точками нули множителей:
                                    <ul>
                                        <li>Если множитель только в числителе и знак неравенства нестрогий
                                            &ndash; точка закрашенная, иначе выколотая
                                        </li>
                                        <li>
                                            Если множитель повторяется чётное число раз &ndash; точка со стрелочкой
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Справа сверху ведётся непрерывная кривая
                                    <ul>
                                        <li>Через точки без стрелочек проходит</li>
                                        <li>От точек со стрелочками отражается</li>
                                    </ul>
                                </li>
                                <li>
                                    Расставляются знаки на интервалах
                                    <ul>
                                        <li>Кривая сверху &ndash; знак {'\\(\\large +\\)'}</li>
                                        <li>Кривая снизу &ndash; знак {'\\(\\large -\\)'}</li>
                                    </ul>
                                </li>
                                <li>Закрашиваются соответствующие знаку неравенства интервалы</li>
                                <li>Считается количество закрашенных участков</li>
                                <li>
                                    Закрашенные участки записываются в виде уравнений или неравенств
                                    <br /> с использованием совокупности, если их больше 1
                                </li>
                            </ol>
                        </div>
                    }
                />
            </li>
            <li>
                <Hidinglist
                    parent = {<Method name='Снятие функции' />}
                    child = {
                        <ul>
                            <Equivalent
                                tex = {`
                                    \\operatorname{ВозрастающаяФункция}{(a)} \\vee \\operatorname{ВозрастающаяФункция}{(b)}
                                    \\LR \\cases{a \\vee b \\\\ ограничение~на~a \\\\ ограничение~на~b}
                                `}
                                cases = {[
                                    'c^a \\vee c^b ~~\\overset{c=const>1}{\\LLR}~~ a \\vee b',
                                    `\\log_c{(a)} \\vee \\log_c{(b)} ~~\\overset{c=const>1}{\\LLR}~~
                                    \\cases{a \\vee b \\\\ \\operatorname{min}{(a,b)}>0}`,
                                    `\\sqrt[2n]{a} \\vee \\sqrt[2n]{b} \\LR
                                    \\cases{a \\vee b \\\\ \\operatorname{min}{(a,b)}\\geqslant 0}`,
                                    `\\sqrt[2n+1]{a} \\vee \\sqrt[2n+1]{b} \\LR a \\vee b`,
                                    `a^{2n+1} \\vee b^{2n+1} ~~\\overset{n>1}{\\LLR}~~ a \\vee b`
                                ]}
                            />
                            <Equivalent
                                tex = {`
                                    \\operatorname{УбывающаяФункция}{(a)} \\vee \\operatorname{УбывающаяФункция}{(b)}
                                    \\LR \\cases{a \\land b \\\\ ограничение~на~a \\\\ ограничение~на~b}
                                `}
                                cases = {[
                                    'c^a \\vee c^b ~~\\overset{c=const<1}{\\LLR}~~ a \\land b',
                                    `\\log_c{(a)} \\vee \\log_c{(b)} ~~\\overset{c=const<1}{\\LLR}~~
                                    \\cases{a \\land b \\\\ \\operatorname{min}{(a,b)}>0}`
                                ]}
                            />
                        </ul>
                    }
                />
            </li>
            <li>
                <Hidinglist
                    parent = {<Method name='Метод рационализации'/>}
                    child = {
                        <div className="frame">
                            <h3>Нужный вид:</h3>
                            <ol>
                                <li>Справа 0</li>
                                <li>Слева множители</li>
                                <li>
                                    Выбранный множитель представлен в виде
                                    <br />разности одинаковой монотонной функции
                                </li>
                            </ol>
                            <h3>Применение:</h3>
                            <ul>
                                <Equivalent
                                    tex = {`
                                        \\left(\\operatorname{ВозрастающаяФункция}{(a)}-\\operatorname{ВозрастающаяФункция}{(b)}\\right) \\cdot A \\vee 0
                                        \\LR \\cases{(a-b)\\cdot A \\vee 0 \\\\ ограничение~на~a \\\\ ограничение~на~b}
                                    `}
                                />
                                <Equivalent
                                    tex = {`
                                        \\left(\\operatorname{УбывающаяФункция}{(a)}-\\operatorname{УбывающаяФункция}{(b)}\\right) \\cdot A \\vee 0
                                        \\LR \\cases{(b-a)\\cdot A \\vee 0 \\\\ ограничение~на~a \\\\ ограничение~на~b}
                                    `}
                                />
                            </ul>
                        </div>
                    }
                />
            </li>
        </ol>
        <h2 onClick={page.scroll(main)} ref={cases} className="main-menu">{'\\(\\Huge \\{,[ \\)'}</h2>
        <ol>
            <Equivalent
                tex = {'\\cases{A \\\\ A} \\LR A'}
            />
            <Equivalent
                tex = {'\\union{A \\\\ A} \\LR A'}
            />
            <Equivalent
                tex = {'\\cases{\\cases{A \\\\ B} \\\\ C} \\LR \\cases{A \\\\ B \\\\ C}'}
            />
            <Equivalent
                tex = {'\\union{\\union{A \\\\ B} \\\\ C} \\LR \\union{A\\\\ B\\\\ C}'}
            />
            <Equivalent
                tex = {`
                    \\cases{
                        \\union{
                            A \\\\ B
                        } \\\\
                        C
                    } \\LR
                    \\union{
                        \\cases{A \\\\ C} \\\\
                        \\cases{B \\\\ C} 
                    }
                `}
            />
            <Equivalent
                tex = {'\\cases{a=b \\\\ \\operatorname{F}{(a)}} \\LR \\cases{a=b \\\\ \\operatorname{F}{(b)}}'}
            />
            <Equivalent
                tex = {'\\cases{A \\\\ B} ~~\\overset{A \\LR C}{\\LLR}~~ \\cases{C \\\\ B}'}
            />
            <Equivalent
                tex = {'\\cases{A \\\\ B} ~~\\overset{A \\Rightarrow B}{\\LLR}~~ A'}
            />
            <Equivalent
                tex = {'\\union{A \\\\ B} ~~\\overset{A \\Rightarrow B}{\\LLR}~~ B'}
            />
            <Equivalent
                tex = {'\\cases{A \\\\ x \\in \\RR} \\LR A'}
            />
            <Equivalent
                tex = {'\\cases{A \\\\ x \\in \\varnothing} \\LR x\\in \\varnothing'}
            />
            <Equivalent
                tex = {'\\union{A \\\\ x \\in \\RR} \\LR x \\in \\RR'}
            />
            <Equivalent
                tex = {'\\union{A \\\\ x \\in \\varnothing} \\LR A'}
            />
            <Equivalent
                tex = {'ложь \\LR x\\in \\varnothing'}
            />
            <Equivalent
                tex = {'истина \\LR ограничения'}
                cases = {[
                    'истина~без~ограничений \\LR x\\in \\RR'
                ]}
            />
            <Equivalent
                tex = {`F(x, f(x))
                ~~\\overset{F(x,f(x)) \\Rightarrow
                F(x,const)}{\\LLR}~~
                \\cases{
                    F(x,const) \\\\
                    ограничения~из~f(x)
                }`}
            />
            <Equivalent
                tex = {`
                    A \\LR
                    \\union{
                        \\cases{
                            случай_1 \\\\
                            A
                        }\\\\
                        \\cases{
                            случай_2 \\\\
                            A
                        }\\\\
                        \\ldots \\\\
                        \\cases{
                            случай_n \\\\
                            A
                        }
                    }
                `}
            />
        </ol>
        <div style={{height:'400px'}}></div>
    </div>
);
}

const Method = ({name}) => <div className="sub-menu" style={{fontSize:'25pt', marginBottom:'30px'}}>{name}</div>

const Equivalent = ({tex, cases = []}) => {

    const parse = tex => {
        var array = displaystyle(tex).split('<br>');
        return array.map((str, index) =>
            <div key={index} style={index===array.length-1?{}:{marginBottom:'20px'}}>
                {`\\(${str}\\)`}
            </div>    
        )
    };

    return <li>
        <div className="frame">
            {
                parse(tex)
            }
        </div>
        {cases.length?
        <Spoiler>
            <div className="sub-menu">Показать частные случаи</div>
            <ul>
                {
                    cases.map((case_, index) =>
                        <li key={index}>
                            <div className="frame">
                                {parse(case_)}
                            </div>
                        </li>    
                    )
                }
            </ul>
            <div className="sub-menu">Скрыть частные случаи</div>
        </Spoiler>
        :<></>}
    </li>
};

*/