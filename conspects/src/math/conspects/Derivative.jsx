import { useRef } from "react"
import { Title } from "../Title";
import { Content } from "../../Content";
import { Block } from "../../Block";
import { Props } from "../../Props";
import { Cases } from "../../Cases";

export const Derivative = () => {


    const def = useRef();
    const table = useRef();
    const physic = useRef();
    const points = useRef();
    const geometry = useRef();
    const func = useRef();
    const integral = useRef();
    const main = useRef();

    return <div ref={main}>
        <Title>Производная</Title>
        <Content>
            <li link={def}>Определение</li>
            <li link={func}>Связь с функцией</li>
            <li link={points}>Типы точек</li>
            <li link={physic}>Физический смысл</li>
            <li link={geometry}>Геометрический смысл</li>
            <li link={integral}>Первообразная и интеграл</li>
            <li link={table}>Таблица производных</li>
        </Content>

        <Block link={def} title="Определение" beginRef={main}>
            \(f'_x(x_0)\) (производная функции \(f\) по переменной \(x\) в точке \(x_0\)) &mdash; это предел
            \( \displaystyle \lim_{"{x_1 \\rightarrow x_0}{\\frac{f(x_1) - f(x_0)}{x_1-x_0}}"} \).
        </Block>
        <Block link={func} title="Связь с функцией" beginRef={main}>
            <ul>
                <li>\( f'(x) \geqslant 0\) при \(x \in (x_1,x_2) \LR f(x) \nearrow\) при \(x \in [x_1,x_2]\).</li>
                <li>\( f'(x) \leqslant 0\) при \(x \in (x_1,x_2) \LR f(x) \searrow\) при \(x \in [x_1,x_2]\).</li>
            </ul>
        </Block>
        <Block link={points} title="Типы точек" beginRef={main}>
            <ul>
                <li>Стационарная точка &mdash; точка, в которой производная равна 0.</li>
                <li>Точка минимума &mdash; точка, значение функции в которой меньше, чем в соседних точках.</li>
                <li>Точка максимума &mdash; точка, значение функции в которой больше, чем в соседних точках.</li>
                <li>Точка экстремума &mdash; точка минимума или точка максимума.</li>
            </ul>
        </Block>
        <Block link={physic} title="Физический смысл" beginRef={main}>
            <table className="regular-table">
                <tbody>
                    <tr>
                        <th>Время</th>
                        <th>Путь</th>
                        <th>Скорость</th>
                    </tr>
                    <tr>
                        <td>\(t\)</td>
                        <td>\(x(t)\)</td>
                        <td>\(x'_t(t)\)</td>
                    </tr>
                </tbody>
            </table>
        </Block>
        <Block link={geometry} title="Геометрический смысл" beginRef={main}>
            <p>
                Кривая \(y = f(x)\) касается линии \(y = \varphi(x)\) в точке \(x_0\):
            </p><br/>
            <p>
                \(
                    \cases{"{f(x) = \\varphi(x) \\\\ f'_x(x) = \\varphi'_x(x) \\\\ x = x_0}"}
                \)
            </p>
            <div className="p">
                <Cases one={1}>
                    <div className="frame-border">
                        <p>
                            Кривая \(y = f(x)\) касается прямой \( y = ax+b \) в точке \(x_0\):
                        </p><br />
                        <p>
                            \( f'_x(x_0) = a \)
                        </p>
                    </div>
                </Cases>
            </div>
        </Block>
        <Block link={integral} title="Первообразная и интеграл" beginRef={main}>
            <p>
                Первообразная функции \(f(x)\) &mdash; функция \(F(x)\), где 
                \(f(x) = F'_x(x) \).
            </p>
            <br />
            <p>
                \(\displaystyle S_{"{[x_1,x_2]}"} = \int_{"{x_1}^{x_2}"}f(x)dx = F(x_2) -F(x_1) \).
            </p>
        </Block>
        <Block link={table} title="Таблица производных" beginRef={main}>
            <Props>
                <tr>
                    <td>\(C'_x\)</td>
                    <td>\(0\)</td>
                </tr>
                <tr>
                    <td>\(x'_x\)</td>
                    <td>\(1\)</td>
                </tr>
                <tr>
                    <td>\((C_1 \cdot y + C_2 \cdot z)'_x\)</td>
                    <td>\(C_1 \cdot y'_x + C_2 \cdot z'_x\)</td>
                </tr>
                <tr>
                    <td>\( \left(y^C\right)' \)</td>
                    <td>\( C \cdot y^{"{C-1}"} \cdot y' \)</td>
                </tr>
                <tr>
                    <td>\( \left(C^y\right)' \)</td>
                    <td>\( C^y \cdot \ln{"{C}"} \cdot y' \)</td>
                </tr>
                <tr>
                    <td>\( (y \cdot z)' \)</td>
                    <td>\( y' \cdot z + z' \cdot y \)</td>
                </tr>
                <tr>
                    <td>\( \displaystyle \left(\frac{"{y}{z}"}\right)' \)</td>
                    <td>\( \displaystyle \frac{"{y' \\cdot z - z' \\cdot y}{z^2}"} \)</td>
                </tr>
                <tr>
                    <td>\( (\log_C{"{y}"})' \)</td>
                    <td>\( \displaystyle \frac{"{y'}{y \\cdot \\ln{C}}"} \)</td>
                </tr>
                <tr>
                    <td>\( (\sin{"{y}"})' \)</td>
                    <td>\( \cos{"{y}"} \cdot y' \)</td>
                </tr>
                <tr>
                    <td>\( (\cos{"{y}"})' \)</td>
                    <td>\( -\sin{"{y}"} \cdot y' \)</td>
                </tr>
                <tr>
                    <td>\( (\tg{"{y}"})' \)</td>
                    <td>\( \left(\tgsqr{"{y}"}+1\right) \cdot y' \)</td>
                </tr>
                <tr>
                    <td>\( (\ctg{"{y}"})' \)</td>
                    <td>\( \left(-\ctgsqr{"{y}"}-1\right) \cdot y' \)</td>
                </tr>
            </Props>
        </Block>
    </div>
}