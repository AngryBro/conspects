import { Block } from "../../Block";
import { Props } from "../../Props";
import { Title } from "../../Title";

export const Abs = () => <div>
    <Title>Модуль</Title>
    <Block title="Определение">
        <div className="center">
            \( |a| \) (модуль \(a\)) &mdash; это произведение \( \sgn(a) \cdot a \).
        </div>
    </Block>
    <Block title="Следствие из определения">
        $$ |a| \geqslant 0 $$
    </Block>
    <Block title="Свойства">
        <Props>
            <tr>
                <td>\(|a|\)</td>
                <td>\(|-a|\)</td>
            </tr>
            <tr>
                <td>\(|-a|\)</td>
                <td>\(|a|\)</td>
            </tr>
            <tr>
                <td>\(|a \cdot b|\)</td>
                <td>\(|a| \cdot |b|\)</td>
            </tr>
            <tr>
                <td>\(|a| \cdot |b|\)</td>
                <td>\( |a \cdot b| \)</td>
            </tr>
            <tr>
                <td>\(\displaystyle \left|\frac{"{a}{b}"}\right| \)</td>
                <td>\( \displaystyle \frac{"{|a|}{|b|}"} \)</td>
            </tr>
            <tr>
                <td>\( \displaystyle \frac{"{|a|}{|b|}"} \)</td>
                <td>\(\displaystyle \left|\frac{"{a}{b}"}\right| \)</td>
            </tr>
            <tr>
                <td>\( a^{"{2n}"} \)</td>
                <td>\( |a|^{"{2n}"} \)</td>
            </tr>
            <tr>
                <td>\( |a|^{"{2n}"} \)</td>
                <td>\( a^{"{2n}"} \)</td>
            </tr>
            <tr>
                <td>\( |a| \)</td>
                <td>\( \sqrt[2n]{"{a^{2n}}"} \)</td>
            </tr>
        </Props>
    </Block>
</div>