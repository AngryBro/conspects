import { Block } from "../../Block";
import { Cases } from "../../Cases";
import { Props } from "../../Props";
import { Title } from "../Title";

export const Comp = () => 

<div>
    <Title>Сравнения</Title>
    <Block title="Основные свойства">
        <Props>
            <tr>
                <td>\( a \vee b \)</td>
                <td>\( a + c \vee b + c \)</td>
                <td className="__always"></td>
            </tr>
            <tr>
                <td>\( a = b \)</td>
                <td>\( a \cdot c = b \cdot c \)</td>
                <td className="__know">\( c \neq 0 \)</td>
            </tr>
            <tr>
                <td>\( a \vee b \)</td>
                <td>\( a \cdot c \vee b \cdot c \)</td>
                <td className="__know">\( {"c > 0"} \)</td>
            </tr>
            <tr>
                <td>\( a \vee b \)</td>
                <td>\( a \cdot c \land b \cdot c \)</td>
                <td className="__know">\( {"c < 0"} \)</td>
            </tr>
        </Props>
    </Block>
    <Block title="Дополнительные свойства">
        <ol>
            <li>
                <div className="frame">
                    <div className="p">\( {"a < b < c"} ~~\Rightarrow~~ {"a < c"} \)</div>
                    <Cases>
                        <ul>
                            <li className="p">\( {"a < b \\leqslant c"} ~~\Rightarrow~~ {"a < c"} \)</li>
                            <li className="p">\( {"a \\leqslant b < c"} ~~\Rightarrow~~ {"a < c"} \)</li>
                            <li className="p">\( {"a \\leqslant b \\leqslant c"} ~~\Rightarrow~~ {"a \\leqslant c"} \)</li>
                        </ul>
                    </Cases>
                </div>
            </li>
            <li>
                <div className="frame">
                    <div className="p">
                        \(
                            \cases{"{a \\vee b \\\\ c \\vee d}"} ~~\Rightarrow~~
                            a + c \vee b + d 
                        \)
                    </div>
                </div>
            </li>
        </ol>
    </Block>
</div>