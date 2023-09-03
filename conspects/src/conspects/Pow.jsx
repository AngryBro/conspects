import { useRef } from "react"
import { Title } from "../Title";
import { Content } from "../Content";
import { Block } from "../Block";
import { Props } from "../Props";

export const Pow = () => {
    const propsRef = useRef();
    const Nref = useRef();
    const Zref = useRef();
    const Qref = useRef();
    const Rref = useRef();
    const beginRef = useRef();

    return <div ref={beginRef}>
        <Title>Степень</Title>
        <Content>
            <li link={propsRef}>&laquo;Свойства&raquo; степени</li>
            <li link={Nref}>Степень с натуральным показателем</li>
            <li link={Zref}>Степень с целым показателем</li>
            <li link={Qref}>Степень с рациональным показателем</li>
            <li link={Rref}>Степень с действительным показателем</li>
        </Content>
        <Block beginRef={beginRef} title="Свойства степени">
            <Props>
                <tr>
                    <td>\( a^b \cdot a^c \)</td>
                    <td>\( a^{"{b+c}"} \)</td>
                    <td className="__info">Подвох, если \(b\) или \(c\) дробное</td>
                </tr>
                <tr>
                    <td>\( a^{"{b+c}"} \)</td>
                    <td>\( a^b \cdot a^c \)</td>
                    <td className="__info">Подвох, если \(b\) или \(c\) дробное</td>
                </tr>
                <tr>
                    <td>\( a^c \cdot b^c \)</td>
                    <td>\( (a \cdot b)^c \)</td>
                    <td className="__always"></td>
                </tr>
                <tr>
                    <td>\( (a \cdot b)^c \)</td>
                    <td>\( a^c \cdot b^c \)</td>
                    <td className="__always"></td>
                </tr>
                <tr>
                    <td>\( \displaystyle\frac{"{a^b}{a^c}"} \)</td>
                    <td>\( a^{"{b-c}"} \)</td>
                    <td className="__info">Подвох, если \(b\) или \(c\) дробное</td>
                </tr>
                <tr>
                    <td>\( a^{"{b-c}"} \)</td>
                    <td>\( \displaystyle\frac{"{a^b}{a^c}"} \)</td>
                    <td className="__info">Подвох, если \(b\) или \(c\) дробное</td>
                </tr>
                <tr>
                    <td>\( \displaystyle\frac{"{a^c}{b^c}"} \)</td>
                    <td>\( \left( \displaystyle\frac{"{a}{b}"} \right)^c \)</td>
                    <td className="__always"></td>
                </tr>
                <tr>
                    <td>\( \left( \displaystyle\frac{"{a}{b}"} \right)^c \)</td>
                    <td>\( \displaystyle\frac{"{a^c}{b^c}"} \)</td>
                    <td className="__always"></td>
                </tr>
                <tr>
                    <td>\( \left( a^b \right)^c \)</td>
                    <td>\( a^{"{b \\cdot c}"} \)</td>
                    <td className="__info">Подвох, если \(b\) или \(c\) дробное</td>
                </tr>
                <tr>
                    <td>\( \left( a^b \right)^c \)</td>
                    <td>\( \left( a^c \right)^b \)</td>
                    <td className="__info">Подвох, если \(b\) или \(c\) дробное</td>
                </tr>
                <tr>
                    <td>\( a^{"{b \\cdot c}"} \)</td>
                    <td>\( \left( a^b \right)^c \)</td>
                    <td className="__info">Подвох, если \(b\) или \(c\) дробное</td>
                </tr>
                <tr>
                    <td>\( a^0 \)</td>
                    <td>\( 1 \)</td>
                    <td className="__add">\(a \neq 0\)</td>
                </tr>
                <tr>
                    <td>\( a^{"{-b}"} \)</td>
                    <td>\( \displaystyle\frac{"{1}{a^b}"} \)</td>
                    <td className="__always"></td>
                </tr>
                <tr>
                    <td>\( \displaystyle\frac{"{1}{a^b}"} \)</td>
                    <td>\( a^{"{-b}"} \)</td>
                    <td className="__always"></td>
                </tr>
                <tr>
                    <td>\( a^{"{\\frac{1}{b}}"} \)</td>
                    <td>\( \sqrt[b]{"{a}"} \)</td>
                    <td className="__info">
                        <div className="__know">\(b \in \NN,~ b {">"} 1\)</div>
                        <div className="__add">\(a {">"} 0\)</div>
                    </td>
                </tr>
                <tr>
                    <td>\( \sqrt[b]{"{a}"} \)</td>
                    <td>\( a^{"{\\frac{1}{b}}"} \)</td>
                    <td className="__info">
                        <div className="__know">\(a {">"} 0\)</div>
                        <div className="__add">\(b \in \NN ,~ b {">"} 1\)</div>
                    </td>
                </tr>
            </Props>
        </Block>
        <Block title="Степень с натуральным показателем" beginRef={beginRef} link={Nref}>
            <p>
                Определение:
                $$
                \cases{"{"} a^b = c \\ b \in \NN {"}"}
                \LR
                \cases{"{"}
                    c = \underbrace{"{a \\cdot a \\cdot \\ldots \\cdot a}_{b~ раз}"} \\
                    c \in \RR
                {"}"}
                $$
            </p>
        </Block>
        <Block title="Степень с целым показателем" beginRef={beginRef} link={Zref}>
            <p>
                Определение:
                $$
                \cases{"{"} a^b = c \\ b \in \ZZ {"}"}
                \LR
                \union{"{"}
                    \cases{"{"}
                        b {">"} 0 \\
                        a \neq 0 \\
                        c = a^b
                    {"}"} \\
                    \cases{"{"}
                        b = 0 \\
                        a \neq 0 \\
                        c = 1
                    {"}"} \\
                    \cases{"{"}
                        b {"<"} 0 \\
                        a \neq 0 \\
                        c = \displaystyle\frac{"{1}{a^{-b}}"}
                    {"}"}
                {"}"}
                $$
            </p>
        </Block>
        <Block link={Qref} title="Степень с рациональным показателем" beginRef={beginRef}>
            <p>
                Определение:
                $$
                    \cases{"{"}
                        a^b = c \\
                        b = \frac{"{m}{n}"} \in \QQ \\
                        n \in \NN
                    {"}"} \LR
                    \cases{"{"}
                        c = \sqrt[n]{"{a^m}"} \\
                        a {">"} 0 \\
                        c {">"} 0
                    {"}"}
                $$
            </p>
        </Block>
        <Block link={Rref} title="Степень с действительным показателем" beginRef={beginRef}>
            <p>
                Определение:
                $$
                    \cases{"{"}
                        a^b = c \\
                        b \in \RR
                    {"}"} \LR
                    \cases{"{"}
                        b_i \in \QQ \\
                        b = \displaystyle\lim_{"{n \\rightarrow \\infty}{b_n}"} \\
                        c = \displaystyle\lim_{"{n \\rightarrow \\infty}{a^{b_n}}"} \\
                        a {">"} 0 \\
                        c {">"} 0
                    {"}"}
                $$
            </p>
        </Block>

    </div>
}