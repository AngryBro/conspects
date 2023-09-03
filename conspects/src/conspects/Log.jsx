import { Block } from "../Block";
import { Props } from "../Props";
import { Title } from "../Title";

export const Log = () => <div>

    <Title>Логарифм</Title>

    <Block title="Определение">
        <div className="center">
        \(\log_a{"{b}"}\) (логарифм по основанию \(a\) от \(b\)) &mdash; это число \(c\), где \( a^c = b,~~a {">"} 0,~~ a \neq 1,~~b {">"} 0,~~c \in \RR \).
        </div>
    </Block>
    <Block title="Свойства">
        <Props>
            <tr>
                <td>\( \log_a{"{a}"} \)</td>
                <td>\(1\)</td>
                <td className="__add">\( \cases{"{a > 0 \\\\ a \\neq 1}"} \)</td>
            </tr>
            <tr>
                <td>\( 1 \)</td>
                <td>\( \log_a{"{a}"} \)</td>
                <td className="__know">\( \cases{"{a > 0 \\\\ a \\neq 1}"} \)</td>
            </tr>
            <tr>
                <td>\( \log_a{"{1}"} \)</td>
                <td>\(0\)</td>
                <td className="__add">\( \cases{"{a > 0 \\\\ a \\neq 1}"} \)</td>
            </tr>
            <tr>
                <td>\( 0 \)</td>
                <td>\( \log_a{"{1}"} \)</td>
                <td className="__know">\( \cases{"{a > 0 \\\\ a \\neq 1}"} \)</td>
            </tr>
            <tr>
                <td>\( \log_a{"{b^c}"} \)</td>
                <td>\( c \cdot \log_a{"{b}"} \)</td>
                <td className="__know">
                    \(b \geqslant 0\), если \(c\) чётное
                </td>
            </tr>
            <tr>
                <td>\( c \cdot \log_a{"{b}"} \)</td>
                <td>\( \log_a{"{b^c}"} \)</td>
                <td className="__add">
                    \(b \geqslant 0\), если \(c\) чётное
                </td>
            </tr>
            <tr>
                <td>\( \log_{"{a^c}{b}"} \)</td>
                <td>\( \displaystyle\frac{"{1}{c}"} \cdot \log_a{"{b}"} \)</td>
                <td className="__know">
                    \(a \geqslant 0\), если \(c\) чётное
                </td>
            </tr>
            <tr>
                <td>\( \displaystyle\frac{"{1}{c}"} \cdot \log_a{"{b}"} \)</td>
                <td>\( \log_{"{a^c}{b}"} \)</td>
                <td className="__add">
                    \(a \geqslant 0\), если \(c\) чётное
                </td>
            </tr>
            <tr>
                <td>\( \log_a{"{b}"} + \log_a{"{c}"} \)</td>
                <td>\( \log_a{"{b \\cdot c}"} \)</td>
                <td className="__add">\( b \geqslant 0 \) либо \( c \geqslant 0 \)</td>
            </tr>
            <tr>
                <td>\( \log_a{"{b \\cdot c}"} \)</td>
                <td>\( \log_a{"{b}"} + \log_a{"{c}"} \)</td>
                <td className="__know">\( b \geqslant 0 \) либо \( c \geqslant 0 \)</td>
            </tr>
            <tr>
                <td>\( \log_a{"{b}"} - \log_a{"{c}"} \)</td>
                <td>\( \displaystyle\log_a{"{\\frac{b}{c}}"} \)</td>
                <td className="__add">\( b \geqslant 0 \) либо \( c \geqslant 0 \)</td>
            </tr>
            <tr>
                <td>\( \displaystyle\log_a{"{\\frac{b}{c}}"} \)</td>
                <td>\( \log_a{"{b}"} - \log_a{"{c}"} \)</td>
                <td className="__know">\( b \geqslant 0 \) либо \( c \geqslant 0 \)</td>
            </tr>
            <tr>
                <td>\( a \)</td>
                <td>\( b^{"{\\log_b{a}}"} \)</td>
                <td className="__know">\( \cases{"{a > 0 \\\\ b > 0 \\\\ b \\neq 1}"} \)</td>
            </tr>
            <tr>
                <td>\( b^{"{\\log_b{a}}"} \)</td>
                <td>\( a \)</td>
                <td className="__add">\( \cases{"{a > 0 \\\\ b > 0 \\\\ b \\neq 1}"} \)</td>
            </tr>
            <tr>
                <td>\( \log_a{"{b}"} \)</td>
                <td>\( \displaystyle\frac{"{\\log_c{b}}{\\log_c{a}}"} \)</td>
                <td className="__know">\( \cases{"{c > 0 \\\\ c \\neq 1}"} \)</td>
            </tr>
            <tr>
                <td>\( \displaystyle\frac{"{\\log_c{b}}{\\log_c{a}}"} \)</td>
                <td>\( \log_a{"{b}"} \)</td>
                <td className="__add">\( \cases{"{c > 0 \\\\ c \\neq 1}"} \)</td>
            </tr>
            <tr>
                <td>\( a^{"{\\log_b{c}}"} \)</td>
                <td>\( c^{"{\\log_b{a}}"} \)</td>
                <td className="__info">Подвох, если \(\log_b{"{c}"}\) или \(\log_b{"{a}"}\) целое</td>
            </tr>
            <tr>
                <td>\( \log_a{"b"} \cdot \log_c{"d"} \)</td>
                <td>\( \log_a{"d"} \cdot \log_c{"b"} \)</td>
                <td className="__always"></td>
            </tr>
        </Props>
    </Block>

</div>