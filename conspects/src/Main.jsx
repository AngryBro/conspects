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
        <ul className="main-list" style={{marginTop: "50px"}}>
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
                            <Button2 onClick={(e) => nav("/log", e)}>Логарифм</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/sqrt", e)}>Корень</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/abs", e)}>Модуль</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/trigonometry", e)}>Тригонометрия</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/compare", e)}>Сравнения</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/equivalents", e)}>Переходы</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/numbers", e)}>Теория чисел</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/probability", e)}>Теория вероятностей</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/function", e)}>Функция</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/oxy", e)}>Координаты \(Oxy\)</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/oxyz", e)}>Координаты \(Oxyz\)</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/plani", e)}>Планиметрия</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/stereo", e)}>Стереометрия</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/model", e)}>Составление математической модели</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/function/research", e)}>Исследование функции</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/selection", e)}>Отбор чисел на промежутке</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/stereo/oxyz", e)}>Метод координат в стереометрии</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/params", e)}>Задачи с параметром</Button2>
                        </li>
                        <li>
                            <Button2 onClick={(e) => nav("/complex", e)}>Комплексные числа</Button2>
                        </li>
                    </ol>
                </Spoiler>
            </li>
            <li>
                <Button1 onClick={() => window.open("https://docs.google.com/spreadsheets/d/1ymkx7Tbok4JtQovr6okvu_1bpVVptfb1myr_Rn2VuQI/edit#gid=2107114599")}>Результаты учеников</Button1>
            </li>
            <li>
                <Button1 onClick={() => window.open("https://drive.google.com/drive/folders/1xL7xy0TNA6vJ0Plzh84lB54qohrkL4WA")}>Бланки учеников</Button1>
            </li>
            <li>
                <Button1 onClick={() => window.open("https://angrybro.github.io/LatexRealTime/")}>Печать формул</Button1>
            </li>
        </ul>
    </div>
}