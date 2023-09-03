import { useEffect } from "react";
import { Button1 } from "./buttons/Button1";
import { Button2 } from "./buttons/Button2";
import { Spoiler } from "./spoiler";
import { useNavigate } from "./static-router";

export const Main = () => {

    const nav = useNavigate();

    useEffect(() => {
        document.title = "Математика";
    }, []);

    return <div>
        <ul className="main-list">
            <li>
                <Button1 onClick={() => nav("/about")}>О преподавателе</Button1>
            </li>
            <li>
                <Spoiler margin={10} hoverOpen={true}>
                    <Button1>Конспекты</Button1>
                    <ol className="main-sublist">
                        <li>
                            <Button2 onClick={(e) => nav("/polynom", e)}>Полином</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/frac", e)}>Дробь</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/pow", e)}>Степень</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/log")}>Логарифм</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/sqrt")}>Корень</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/abs")}>Модуль</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/trigonometry")}>Тригонометрия</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/compare")}>Сравнения</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/equivalents")}>Переходы</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/numbers")}>Теория чисел</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/probability")}>Теория вероятностей</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/function")}>Функция</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/oxy")}>Координаты \(Oxy\)</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/oxyz")}>Координаты \(Oxyz\)</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/plani")}>Планиметрия</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/stereo")}>Стереометрия</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/model")}>Составление математической модели</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/function/research")}>Исследование функции</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/selection")}>Отбор чисел на промежутке</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/stereo/oxyz")}>Метод координат в стереометрии</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/params")}>Задачи с параметром</Button2>
                        </li>
                        <li>
                            <Button2 onClick={() => nav("/complex")}>Комплексные числа</Button2>
                        </li>
                    </ol>
                </Spoiler>
            </li>
        </ul>
    </div>
}