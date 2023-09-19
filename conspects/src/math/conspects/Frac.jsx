import { Block } from "../../Block";
import { Props } from "../../Props";
import { Title } from "../Title";

export const Frac = () => {


    return <div>
        <Title>Дробь</Title>
        <Block title="Определение">
            <div className="center">
                \( \displaystyle\frac{"{a}{b}"} \) (\(a\) делённое на \(b\)) &mdash; это число \(c\),
                где \( c \cdot b = a,~~a \in \RR, ~~ b \neq 0,~~c \in \RR \).
            </div>
        </Block>
        <Block title="Свойства">
            <Props>
                <tr>
                    <td>\(\displaystyle  \frac{"{a \\cdot c}{b \\cdot c}"}\)</td>
                    <td>\(\displaystyle \frac{"{a}{b}"} \)</td>
                    <td className="__add">\(c \neq 0\)</td>
                </tr>    
                <tr>
                    <td>\(\displaystyle \frac{"{a}{b}"} \)</td>
                    <td>\(\displaystyle \frac{"{a \\cdot c}{b \\cdot c}"}\)</td>
                    <td className="__know">\(c \neq 0\)</td>
                </tr>
                <tr>
                    <td>\( (~) : \displaystyle\frac{"{a}{b}"} \)</td>
                    <td>\( (~) \cdot \displaystyle\frac{"{b}{a}"} \)</td>
                    <td className="__add">\(b \neq 0\)</td>
                </tr>
                <tr>
                    <td>\( \displaystyle\frac{"{a}{c}"} \pm \displaystyle\frac{"{b}{c}"} \)</td>
                    <td>\( \displaystyle\frac{"{a \\pm b}{c}"} \)</td>
                    <td className="__always"></td>
                </tr>
                <tr>
                    <td>\( \displaystyle\frac{"{a \\pm b}{c}"} \)</td>
                    <td>\( \displaystyle\frac{"{a}{c}"} \pm \displaystyle\frac{"{b}{c}"} \)</td>
                    <td className="__always"></td>
                </tr>
                <tr>
                    <td>\( \displaystyle\frac{"{a}{b}"} \cdot \displaystyle\frac{"{c}{d}"} \)</td>
                    <td>\( \displaystyle\frac{"{a \\cdot c}{b \\cdot d}"} \)</td>
                    <td className="__always"></td>
                </tr>
                <tr>
                    <td>\( \displaystyle\frac{"{a \\cdot c}{b \\cdot d}"} \)</td>
                    <td>\( \displaystyle\frac{"{a}{b}"} \cdot \displaystyle\frac{"{c}{d}"} \)</td>
                    <td className="__always"></td>
                </tr>
            </Props>
        </Block>
    </div>
}