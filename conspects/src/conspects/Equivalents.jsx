import { useRef } from "react";
import displaystyle from "../displaystyle";
import Hidinglist from "../Hidinglist";

const Equivalents = ({page}) => {

    const equal = useRef();
    const notEqual = useRef();
    const more = useRef();
    const cases = useRef();
    const main = useRef();

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
                    `ax^2+bx+c = 0 ~~~\\overset{a\\neq 0,D\\geqslant 0}{\\LLR}~~~ \\union{x = x_1 \\\\ x=x_2}`,
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
                    'c^a = c^b ~~~\\overset{c=const\\neq 1}{\\Longleftrightarrow}~~~ a = b',
                    `\\log_c{(a)} = \\log_c{(b)} ~~~\\overset{c=const\\neq 1}{\\Longleftrightarrow}~~~
                    \\cases{a=b \\\\ a > 0}`,
                    '\\sqrt[2n]{a}=\\sqrt[2n]{b} \\LR \\cases{a = b \\\\ a \\geqslant 0}',
                    '\\sqrt[2n+1]{a} = \\sqrt[2n+1]{b} \\LR a = b',
                    'a^{2n+1} = b^{2n+1} \\LR a = b'
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
                    ~~~\\overset{a_n\\neq 0}{\\Longleftrightarrow}~~~ \\union{
                        x=y=0 \\\\
                        
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
                    `a\\cdot\\sin{x} = b \\cdot \\cos{x} ~~~\\overset{a\\neq 0}{\\LLR}~~~
                    a \\cdot \\tg{x} = b`,
                    `a\\cdot \\sin^2{x} + b \\cdot \\sin{x}\\cdot \\cos{x} + c\\cdot \\cos^2{x} = 0
                    ~~~\\overset{a\\neq 0}{\\LLR}~~~
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
                    'c^a \\neq c^b ~~~\\overset{c=const\\neq 1}{\\LLR}~~~ a\\neq b',
                    `\\log_c{(a)} \\neq \\log_c{(b)} ~~~\\overset{c=const\\neq 1}{\\LLR}~~~
                    \\cases{a \\neq b \\\\ a>0 \\\\ b>0}`,
                    '\\sqrt[2n]{a} \\neq \\sqrt[2n]{b} \\LR \\cases{a \\neq b \\\\ a\\geqslant 0 \\\\ b \\geqslant 0}',
                    '\\sqrt[2n+1]{a} \\neq \\sqrt[2n+1]{b} \\LR a\\neq b',
                    'a^{2n+1} \\neq b^{2n+1} \\LR a \\neq b'
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
                                    'c^a \\vee c^b ~~~\\overset{c=const>1}{\\LLR}~~~ a \\vee b',
                                    `\\log_c{(a)} \\vee \\log_c{(b)} ~~~\\overset{c=const>1}{\\LLR}~~~
                                    \\cases{a \\vee b \\\\ \\operatorname{min}{(a,b)}>0}`,
                                    `\\sqrt[2n]{a} \\vee \\sqrt[2n]{b} \\LR
                                    \\cases{a \\vee b \\\\ \\operatorname{min}{(a,b)}\\geqslant 0}`,
                                    `\\sqrt[2n+1]{a} \\vee \\sqrt[2n+1]{b} \\LR a \\vee b`,
                                    `a^{2n+1} \\vee b^{2n+1} \\LR a \\vee b`
                                ]}
                            />
                            <Equivalent
                                tex = {`
                                    \\operatorname{УбывающаяФункция}{(a)} \\vee \\operatorname{УбывающаяФункция}{(b)}
                                    \\LR \\cases{a \\land b \\\\ ограничение~на~a \\\\ ограничение~на~b}
                                `}
                                cases = {[
                                    'c^a \\vee c^b ~~~\\overset{c=const<1}{\\LLR}~~~ a \\land b',
                                    `\\log_c{(a)} \\vee \\log_c{(b)} ~~~\\overset{c=const<1}{\\LLR}~~~
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
                tex = {'\\cases{A \\\\ B} ~~~\\overset{A \\LR C}{\\LLR}~~~ \\cases{C \\\\ B}'}
            />
            <Equivalent
                tex = {'\\cases{A \\\\ B} ~~~\\overset{A \\Rightarrow B}{\\LLR}~~~ A'}
            />
            <Equivalent
                tex = {'\\union{A \\\\ B} ~~~\\overset{A \\Rightarrow B}{\\LLR}~~~ B'}
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
                ~~~\\overset{F(x,f(x)) \\Rightarrow
                F(x,const)}{\\LLR}~~~
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
        {cases.length?<Hidinglist
            rerender={false}
            parent={<div className="sub-menu">Показать частные случаи</div>}
            parent1={<div className="sub-menu">Скрыть частные случаи</div>}
            child={
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
            }
        />:<></>}
    </li>
};

export default Equivalents;