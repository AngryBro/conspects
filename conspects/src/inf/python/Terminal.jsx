import { Functions } from "../Functions";
import { Title } from "../Title";

export const Terminal = () =>

<div>
    <Title>Данные и терминал</Title>
        <Functions action={true}>
            <tr>
                <td className="listing">print(<b>a</b>,...,sep=<b>b</b>, end=<b>c</b> )</td>
                <td>
                    <ul className="dot-list">
                        <li>Все не обязательные</li>
                        <li>По умолчанию <span className="listing">sep=" ", end="\n"</span></li>
                    </ul>
                </td>
                <td className="listing">None</td>
                <td>
                    Выводит в терминал строку с разделителем <b>b</b> и концом <b>c</b>

                </td>
            </tr>
            <tr>
                <td className="listing">input(<b>message</b>)</td>
                <td>
                    <ul className="dot-list">
                        <li>Не обязательный</li>
                        <li>По умолчанию <span className="listing">message=""</span></li>
                    </ul>
                </td>
                <td>Строка, введённая с клавиатуры</td>
                <td>
                    Выводит в терминал <b>message</b> и запрашивает ввод с клавиатуры
                </td>
            </tr>
        </Functions>
</div>