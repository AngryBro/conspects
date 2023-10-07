import { useRef } from "react"
import { Title } from "./Title";
import { Content } from "../Content";
import { Block } from "../Block";

export const Models = () => {
    const main = useRef();
    const sound = useRef();
    const img = useRef();
    const info = useRef();

    return <div ref={main}>
        <Title>Математические модели</Title>
        <Content>
            <li link={info}>Передача информации</li>
            <li link={sound}>Кодирование звука</li>
            <li link={img}>Кодирование растровых изображений</li>
        </Content>
        <Block link={info} title="Передача информации" beginRef={main}>
            <div className="frame">
                \( \Large I = V \cdot t \)
            </div>
            <ul className="dot-list">
                <li>\(I\) (бит) &mdash; вес информации.</li>
                <li>\(V\) (бит/с) &mdash; средняя скорость передачи информации.</li>
                <li>\(t\) (с) &mdash; время передачи информации.</li>
            </ul>
        </Block>
        <Block link={sound} title="Кодирование звука" beginRef={main}>
            <div className="frame">
                \( \Large I = i \cdot \nu \cdot t \cdot k \)
            </div>
            <ul className="dot-list">
                <li>\(I\) (бит) &mdash; вес звукового файла.</li>
                <li>\(i\) (бит) &mdash; вес одного отсчёта.</li>
                <li>\(\nu\) (Гц) &mdash; частота, количество отсчётов в секунду.</li>
                <li>\(t\) (с) &mdash; длительность звукозаписи.</li>
                <li>\(k\) &mdash; количество каналов.</li>
            </ul>
        </Block>
        <Block link={img} title="Кодирование растровых изображений" beginRef={main}>
            <div className="frame">
                \(
                    \Large
                    \cases{"{"}
                        I = k \cdot i \\
                        N = 2^i \\
                        \widetilde{"{N}"} \leqslant N
                    {"}"}
                 \)
            </div>
            <ul className="dot-list">
                <li>\(I\) (бит) &mdash; вес растрового изображения.</li>
                <li>\(k\) &mdash; количество пикселей.</li>
                <li>\(i\) (бит) &mdash; вес одного пикселя.</li>
                <li>\(N\) &mdash; максимальное количество цветов, которое может быть использовано.</li>
                <li>\(\widetilde{"{N}"}\) &mdash; фактическое количество использованных цветов.</li>
            </ul>
        </Block>
    </div>
}