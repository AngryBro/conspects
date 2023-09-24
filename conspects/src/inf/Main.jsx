import { MainTemplate } from "../MainTemplate";

export const Main = () =>

<MainTemplate route="/inf" title="Информатика">
    {[
        {text: "О преподавателе", nav: "/about"},
        {text: "Результаты учеников", win: "https://docs.google.com/spreadsheets/d/1ymkx7Tbok4JtQovr6okvu_1bpVVptfb1myr_Rn2VuQI/edit#gid=1842070037"},
        {text: "Конспекты", children: [
            // {text: "Алгоритмы", num: true, children: [
            //     {text: "Системы счисления", nav: "/alg/cc"},
            //     {text: "Поиск делителей", nav: "/alg/divs"},
            //     {text: "НОД и НОК", nav: "/alg/nod"}
            // ]},
            // {text: "Динамическое программирование", nav: "/dynamic"},
            {text: "Python", children: [
                // {text: "Типы данных", num: true, children: [
                //     {text: "Целое число", nav: "/python/datatypes/int"},
                //     {text: "Дробное число", nav: "/python/datatypes/float"},
                //     {text: "Строка", nav: "/python/datatypes/str"},
                //     {text: "Список", nav: "/python/datatypes/list"},
                //     {text: "Словарь", nav: "/python/datatypes/dict"},
                //     {text: "Функция", nav: "/python/datatypes/function"}
                // ]},
                {text: "Данные и терминал", nav: "/python/terminal"},
                // {text: "Присваивание", nav: "/python/assign"},
                // {text: "Условия", nav: "/python/if"},
                // {text: "Циклы", nav: "/python/cycle"},
                // {text: "", nav: "/python/"},
                // {text: "", nav: "/python/"},
                // {text: "Библиотеки", num: true, children: [
                //     {text: "math", nav: "/libs/math"},
                //     {text: "itertools", nav: "/libs/itertools"},
                //     {text: "turtle", nav: "/libs/turtle"},
                //     {text: "fnmatch", nav: "/libs/fnmatch"}
                // ]},
                // {text: "", children: []},
            ]},
            // {text: "Электронные таблицы", nav: "/tables"},
            {text: "Программное обеспечение", num: true, children: [
                {text: "Python", nav: "/python"},
                {text: "Pycharm", nav: "/ide/pycharm"},
                // {text: "Idle", nav: "/ide/idle"},
                // {text: "КуМир", nav: "/ide/kumir"},
                // {text: "Libre Office", nav: "/libreoffice"}
            ]}
        ]},
        {text: "Набор формул", win: "https://angrybro.github.io/LatexRealTime/"}
    ]}
</MainTemplate>