import { useRef } from "react"
import { Title } from "../Title";
import { Content } from "../../Content";
import { Block } from "../../Block";
import { Props } from "../../Props";

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
                    <td>\(\displaystyle a^{"{\\frac{1}{b}}"} \)</td>
                    <td>\( \sqrt[b]{"{a}"} \)</td>
                    <td className="__info">
                        <div className="__know">\(b \in \NN,~ b {">"} 1\)</div>
                        <div className="__add">\(a {">"} 0\)</div>
                    </td>
                </tr>
                <tr>
                    <td>\( \sqrt[b]{"{a}"} \)</td>
                    <td>\(\displaystyle a^{"{\\frac{1}{b}}"} \)</td>
                    <td className="__info">
                        <div className="__know">\(a {">"} 0\)</div>
                        <div className="__add">\(b \in \NN ,~ b {">"} 1\)</div>
                    </td>
                </tr>
            </Props>
        </Block>
        <Block title="Степень с натуральным показателем" beginRef={beginRef} link={Nref}>
            <div className="center">
                \(a^b\) (\(a\) в натуральной степени \(b\)) &mdash; это произведение
                \( \underbrace{"{a \\cdot a \\cdot \\ldots \\cdot a}_{b~ раз}"} \), где
                \( a \in \RR,~~b \in \NN \).
            </div>
        </Block>
        <Block title="Степень с целым показателем" beginRef={beginRef} link={Zref}>
            <div className="center">
                \(a^b\) (\(a\) в целой степени \(b\)) &mdash; это прозведение
                \(\underbrace{"{a \\cdot a \\cdot \\ldots \\cdot a}_{b~ раз}"}\), если \(b {">"} 0\);
                \(~~1\), если \(b = 0\); &nbsp;&nbsp; дробь
                \(\displaystyle\frac{"{1}{a^{-b}}"} \), если \(b {"<"} 0\),
                где \( a \neq 0,~~ b \in \ZZ \).
            </div>
        </Block>
        <Block link={Qref} title="Степень с рациональным показателем" beginRef={beginRef}>
            <div className="center">
                \(a^b\) (\(a\) в рациональной степени \(b\)) &mdash; это
                корень \( \sqrt[n]{"{a^m}"} \), где \( {"a > 0"},~~b = \frac{"{m}{n}"},
                ~~m \in \ZZ,~~n \in \NN
                \).
            </div>
        </Block>
        <Block link={Rref} title="Степень с действительным показателем" beginRef={beginRef}>
            <div className="center">
                \(a^b\) (\(a\) в действительной степени \(b\)) &mdash; это
                предел последовательности \( \displaystyle\lim_{"{n \\rightarrow \\infty}{a^{b_n}}"} \)
                , где \({"a > 0"},~~ b_i \in \QQ,~~ b = \displaystyle\lim_{"{n \\rightarrow \\infty}{b_n}"}
                \).
            </div>
        </Block>

    </div>
}