import { useRef } from "react"
import { Title } from "../Title";
import { Content } from "../../Content";
import { Block } from "../../Block";

export const SqrEquations = () => {
    const general = useRef();
    const even = useRef();
    const sum0 = useRef();
    const summ0 = useRef();
    const first1 = useRef();
    const tofirst1 = useRef();
    const main = useRef();

    return <div ref={main}>
        <Title>Квадратные уравнения</Title>
        <Content>
            <li link={general}>Общего вида</li>
            <li link={even}>Второй чётный коэффициент</li>
            <li link={sum0}>Сумма коэффициентов 0</li>
            <li link={summ0}>Знкочередующаяся сумма коэффициентов 0</li>
            <li link={first1}>Первый коэффициент 1</li>
            <li link={tofirst1}>Сведение к первому коэффициенту 1</li>
        </Content>
        <Block beginRef={main} link={general} title="Общего вида">
            <div className="bold">Уравнение:</div>
            <div className="p">
                \(
                    ax^2 + bx + c = 0,~~a \neq 0.
                \)
            </div>
            <div className="bold">Решение:</div>
            <div className="p">\(D = b^2 - 4ac = d^2\)</div>
            <div className="p">\( \union{"{x = \\displaystyle\\frac{-b + d}{2a} \\\\ x = \\displaystyle\\frac{-b - d}{2a}}"} \).</div>
        </Block>
        <Block beginRef={main} link={even} title="Второй чётный коэффициент">
        <div className="bold">Уравнение:</div>
            <div className="p">
                \(
                    ax^2 + bx + c = 0,~~a \neq 0.
                \)
            </div>
            <div className="bold">Решение:</div>
            <div className="p">\(\displaystyle \frac{"{D}{4}"} = \left( \frac{"{b}{2}"} \right)^2 - ac \)</div>
            <div className="p">\( \union{"{x = \\displaystyle\\frac{-\\frac{b}{2} + d}{a} \\\\ x = \\displaystyle\\frac{-\\frac{b}{2} - d}{a}}"} \).</div>
        </Block>
        <Block beginRef={main} link={sum0} title="Сумма коэффициентов 0">
            <div className="bold">Уравнение:</div>
            <div className="p">
                \(
                    ax^2 + bx + c = 0,~~a \neq 0,~~ a+b+c = 0.
                \)
            </div>
            <div className="bold">Решение:</div>
            <div className="p">\( \union{"{x = 1 \\\\ x = \\displaystyle\\frac{c}{a}}"} \).</div>
        </Block>
        <Block beginRef={main} link={summ0} title="Знакочередующаяся сумма коэффициентов 0">
            <div className="bold">Уравнение:</div>
            <div className="p">
                \(
                    ax^2 + bx + c = 0,~~a \neq 0,~~ a-b+c = 0.
                \)
            </div>
            <div className="bold">Решение:</div>
            <div className="p">\( \union{"{x = -1 \\\\ x = -\\displaystyle\\frac{c}{a}}"} \).</div>
        </Block>
        <Block beginRef={main} link={first1} title="Первый коэффициент 1">
            <div className="bold">Уравнение:</div>
            <div className="p">
                \(
                    x^2 + bx + c = 0.
                \)
            </div>
            <div className="bold">Решение:</div>
            <div className="p">
                Подобрать любое решение системы \( \cases{"{x_1 \\cdot x_2 = c \\\\ x_1 + x_2 = -b}"} \)
            </div>
            <div className="p">
                \(
                    \union{"{x = x_1 \\\\ x = x_2}"}
                \).
            </div>
        </Block>
        <Block beginRef={main} link={tofirst1} title="Сведение к первому коэффициенту 1">
            <div className="bold">Уравнение:</div>
            <div className="p">
                \(
                    ax^2 + bx + c = 0,~~a \neq 0.
                \)
            </div>
            <div className="bold">Решение:</div>
            <div className="p">
                \( \tilde x^2 + b \tilde x + ac = 0 \)
            </div>
            <div className="p">
                \( \union{"{ \\tilde x = \\tilde x_1 \\\\ \\tilde x = \\tilde x_2 }"} \)
            </div>
            <div className="p">
                \( \union{"{ x = \\displaystyle\\frac{\\tilde x_1}{a} \\\\ x = \\displaystyle\\frac{\\tilde x_2}{a} }"} \).
            </div>
        </Block>
    </div>
}