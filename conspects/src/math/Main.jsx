import { MainTemplate } from "../MainTemplate";

export const Main = () =>  

    <MainTemplate title="Математика" route="/math">
        {[
            {text: "О преподавателе", nav: "/about"},
            {text: "Конспекты", children: [
                {text: "Полином", nav: "/polynom"},
                {text: "Дробь", nav: "/frac"},
                {text: "Степень", nav: "/pow"},
                {text: "Корень", nav: "/sqrt"},
                {text: "Логарифм", nav: "/log"},
                {text: "Модуль", nav: "/abs"},
                {text: "Тригонометрия", nav: "/trigonometry"},
                // {text: "Сравнения", nav: "/compare"},
                {text: "Переходы", nav: "/equivalents"},
                // {text: "Теория чисел", nav: "/numbers"},
                // {text: "Теория вероятностей", nav: "/probability"},
                // {text: "Функция", nav: "/function"},
                {text: "Координаты \\(~Oxy\\)", nav: "/oxy"},
                // {text: "Координаты \\(~Oxyz\\)", nav: "/oxyz"},
                // {text: "Планиметрия", nav: "/plani"},
                // {text: "Стереометрия", nav: "/stereo"},
                // {text: "Составление математической модели", nav: "/model"},
                // {text: "Метод координат с стереометрии", nav: "/oxyz/stereo"},
                {text: "Задачи с параметром", nav: "/params"},
                // {text: "Комплексные числа", nav: "/complex"},
            ]},
            {text: "Результаты учеников", win: "https://docs.google.com/spreadsheets/d/1ymkx7Tbok4JtQovr6okvu_1bpVVptfb1myr_Rn2VuQI/edit#gid=2107114599"},
            {text: "Бланки учеников", win: "https://drive.google.com/drive/folders/1xL7xy0TNA6vJ0Plzh84lB54qohrkL4WA"},
            {text: "Печать формул", win: "https://angrybro.github.io/LatexRealTime/"},
            {text: "Старая версия", win: "https://angrybro.github.io/conspects/math/old"},
            {text: "Очень старая версия", win: "https://angrybro.github.io/conspects/math/old/old"}
        ]}
    </MainTemplate>