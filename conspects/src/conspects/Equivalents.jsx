import displaystyle from "../displaystyle";
import OpenList from "../OpenList";

const Equivalents = ({page}) => page(
    <div>
        <h1 className="main-menu" onClick={page.index}>Равносильные переходы</h1>
        <ul className="list">
            <li>{'\\( \\LARGE = \\)'}</li>
            <li>{'\\( \\LARGE \\neq \\)'}</li>
            <li>{'\\( \\LARGE > \\normalsize,~ \\LARGE< \\normalsize,~ \\LARGE \\geq \\normalsize,~ \\LARGE \\leq \\)'}</li>
            <li>{'\\( \\LARGE \\{ \\normalsize,~ \\LARGE [ \\)'}</li>
        </ul>
        <h2 className="main-menu">{'\\( \\Huge = \\)'}</h2>
        <ol>
            <Equivalent
                tex={`
                    a_nx^n + a_{n-1}x^{n-1}+\\ldots + a_1x+a_0=0 \\LR <br>
                    \\LR P_1(x) \\cdot P_2(x) \\cdot \\ldots \\cdot P_m(x) = 0 \\LR
                    \\union{P_1(x)=0 \\\\ P_2(x)=0 \\\\ \\ldots \\\\ P_m(x)=0}
                `}
            />
            <Equivalent
                tex={`
                    a_1 \\cdot a_2 \\cdot \\ldots \\cdot a_n \\LR
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
                    '\\sqrt[2n]{a}=\\sqrt[2n]{b} \\LR \\cases{a = b \\\\ a \\geq 0}',
                    '\\sqrt[2n+1]{a} = \\sqrt[2n+1]{b} \\LR a = b',
                    'a^{2n+1} = b^{2n+1} \\LR a = b'
                ]}
            />
            <Equivalent
                tex = {'\\sqrt[2n]{a} = b \\LR \\cases{a = b^{2n} \\\\ b \\geq 0}'}
                cases={[
                    '\\sqrt{a} = b \\LR \\cases{a = b^2 \\\\ b \\geq 0}'
                ]}
            />
            <Equivalent
                tex = {displaystyle(`
                    a_nx^n + a_{n-1}x^{n-1}y^1+a_{n-2}x^{n-2}y^2+\\ldots +
                    a_2x^2y^{n-2}+a_1x^1y^{n-1}+a_0y^n = 0 \\LR <br>
                    ~~~\\overset{a_na_0\\neq 0}{\\Longleftrightarrow}~~~ \\union{
                        \\cases{
                            y = 0 \\\\
                            x = 0
                        }\\\\
                        \\cases{
                            y \\neq 0 \\\\
                            a_n\\left(\\frac{x}{y}\\right)^n + 
                            a_{n-1}\\left(\\frac{x}{y}\\right)^{n-1} + \\ldots +
                            a_1 \\left(\\frac{x}{y}\\right)^1 + a_0 = 0
                        }
                    }
                `)}
                cases = {[
                    'a \\cdot m^x = b \\cdot n^x ~~~\\overset{ab \\neq 0}{\\LLR}~~~ a \\cdot \\left(\\frac{m}{n}\\right)^x = b',
                    `a \\cdot \\left(m^2\\right)^x + b \\cdot (mn)^x + c \\cdot \\left(n^2\\right)^x = 0
                    ~~~\\overset{ac\\neq 0}{\\LLR}~~~
                    a \\cdot \\left(\\left(\\frac{m}{n}\\right)^x\\right)^2 + 
                    b \\cdot \\left(\\frac{m}{n}\\right)^x + c = 0`,
                    `a\\cdot\\sin{x} = b \\cdot \\cos{x} ~~~\\overset{ab\\neq 0}{\\LLR}~~~
                    a \\cdot \\tg{x} = b`,
                    `a\\cdot \\sin^2{x} + b \\cdot \\sin{x}\\cdot \\cos{x} + c\\cdot`
                ]}
            />
        </ol>
    </div>
);

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
        {cases.length?<OpenList
            header={<div className="sub-menu">Частные случаи</div>}
            list={
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