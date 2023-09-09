import { useRef } from "react"
import { Title } from "../Title";
import { Content } from "../Content";
import { Block } from "../Block";
import { Props } from "../Props";

export const Sqrt = () => {
    const oddRef = useRef();
    const evenRef = useRef();
    const beginRef = useRef();

    return <div ref={beginRef}>
        <Title>Корень</Title>
        <Content>
            <li link={evenRef}>Корень чётной степени</li>
            <li link={oddRef}>Корень нечётной степени</li>
        </Content>
        <Block link={evenRef} beginRef={beginRef} title="Определение корня чётной степени" >
            <div className="center smaller-xx">
                \(\sqrt[b]{"{a}"}\) (корень степени \(b\) из \(a\)) &mdash; это число \(c\),
                где \({"c^b = a,~~a \\geqslant 0,~~b"}\) &ndash; натуральное чётное, \(c \geqslant 0\).
            </div>
        </Block>
        <Block beginRef={beginRef} title="Свойства корня чётной степени">
            <Props>
                <tr>
                    <td>\( \sqrt[c]{"{a \\cdot b}"} \)</td>
                    <td>\( \sqrt[c]{"{a}"} \cdot \sqrt[c]{"{b}"} \)</td>
                    <td className="__know">
                        \( \cases{"{a \\geqslant 0 \\\\ b \\geqslant 0}"} \)
                        либо \( a {">"} 0 \) либо \( b {"{>}"} 0 \)
                    </td>
                </tr>
                <tr>
                    <td>\( \sqrt[c]{"{a}"} \cdot \sqrt[c]{"{b}"} \)</td>
                    <td>\( \sqrt[c]{"{a \\cdot b}"} \)</td>
                    <td className="__info">
                        <div className="__always">, если \(a {">"} 0\) либо \(b {">"} 0\)</div>
                        <div className="__add">\( \cases{"{a \\geqslant 0 \\\\ b \\geqslant 0}"} \)</div>
                    </td>
                </tr>
                <tr>
                    <td>\( \displaystyle\sqrt[c]{"{\\frac{a}{b}}"} \)</td>
                    <td>\( \displaystyle\frac{"{\\sqrt[c]{a}}{\\sqrt[c]{b}}"} \)</td>
                    <td className="__know">
                        \( a {">"} 0 \) либо \( b \geqslant 0 \)
                    </td>
                </tr>
                <tr>
                    <td>\( \displaystyle\frac{"{\\sqrt[c]{a}}{\\sqrt[c]{b}}"} \)</td>
                    <td>\( \displaystyle\sqrt[c]{"{\\frac{a}{b}}"} \)</td>
                    <td className="__info">
                        <div className="__always">, если \(a {">"} 0\) либо \(b \geqslant 0\)</div>
                        <div className="__add">\( \cases{"{a \\geqslant 0 \\\\ b \\geqslant 0}"} \)</div>
                    </td>
                </tr>
                <tr>
                    <td>\( \left(\sqrt[b]{"{a}"}\right)^b \)</td>
                    <td>\( a \)</td>
                    <td className="__add">\( a \geqslant 0 \)</td>
                </tr>
                <tr>
                    <td>\( a \)</td>
                    <td>\( \left(\sqrt[b]{"{a}"}\right)^b \)</td>
                    <td className="__know">\( a \geqslant 0 \)</td>
                </tr>
                <tr>
                    <td>\( \sqrt[b]{"{a^b}"} \)</td>
                    <td>\( |a| \)</td>
                    <td className="__always"></td>
                </tr>
                <tr>
                    <td>\( \sqrt[c]{"{\\sqrt[b]{a}}"} \)</td>
                    <td>\( \sqrt[c \cdot b]{"{a}"} \)</td>
                    <td className="__always"></td>
                </tr>
            </Props>
        </Block>
        <Block link={oddRef} beginRef={beginRef} title="Определение корня нечётной степени" >
            <div className="center">
                \(\sqrt[b]{"{a}"}\) (корень степени \(b\) из \(a\)) &mdash; это число \(c\),
                где \({"c^b = a,~~b"}\) &ndash; натуральное нечётное.
            </div>
        </Block>
        <Block beginRef={beginRef} title="Свойства корня нечётной степени">
            <Props>
                <tr>
                    <td>\( \sqrt[c]{"{a \\cdot b}"} \)</td>
                    <td>\( \sqrt[c]{"{a}"} \cdot \sqrt[c]{"{b}"} \)</td>
                </tr>
                <tr>
                    <td>\( \sqrt[c]{"{a}"} \cdot \sqrt[c]{"{b}"} \)</td>
                    <td>\( \sqrt[c]{"{a \\cdot b}"} \)</td>
                </tr>
                <tr>
                    <td>\( \displaystyle\sqrt[c]{"{\\frac{a}{b}}"} \)</td>
                    <td>\( \displaystyle\frac{"{\\sqrt[c]{a}}{\\sqrt[c]{b}}"} \)</td>
                </tr>
                <tr>
                    <td>\( \displaystyle\frac{"{\\sqrt[c]{a}}{\\sqrt[c]{b}}"} \)</td>
                    <td>\( \displaystyle\sqrt[c]{"{\\frac{a}{b}}"} \)</td>
                </tr>
                <tr>
                    <td>\( \left(\sqrt[b]{"{a}"}\right)^b \)</td>
                    <td>\( a \)</td>
                </tr>
                <tr>
                    <td>\( a \)</td>
                    <td>\( \left(\sqrt[b]{"{a}"}\right)^b \)</td>
                </tr>
                <tr>
                    <td>\( \sqrt[b]{"{a^b}"} \)</td>
                    <td>\( a \)</td>
                </tr>
                <tr>
                    <td>\( \sqrt[c]{"{\\sqrt[b]{a}}"} \)</td>
                    <td>\( \sqrt[c \cdot b]{"{a}"} \)</td>
                </tr>
            </Props>
        </Block>
    </div>
}