import OpenList from "./OpenList";
const Page = ({page}) => {
    return page(<div>
        <OpenList
        header={<h1>Заголовок списка</h1>}
        list={
            <ul>
                <li>Пункт1</li>
                <li>пункт2</li>
                <li style={{height:'100px'}}>Пункт3</li>
                <li>Пункт4</li>
                <li>5</li>
            </ul>
        }
        />
        <ul>
                <li>
                    <h1><a href="/">Конспекты</a></h1>
                        <ol>
                            <li onClick={page.link('defs')}>Ссылка</li>
                            <li><a href="/">Определения, свойства, признаки объектов</a></li>
                        </ol>
                </li>
                <li>
                    <h1>
                        <a href="https://docs.google.com/spreadsheets/d/1VQgIt7bTuQjpugEvNySOTEkfjWHq9KzzHoQPi-6CE2Q/edit#gid=0">
                            Запись на зачёт по заданиям первой части
                        </a>
                    </h1>
                </li>
                
                <li>
                    <h1><a href="/">Расписание занятий</a></h1>
                    <div id="index_schedule" hidden>
                        <table>
                            <tr>
                                <td>
                                    <b>День</b>
                                </td>
                                <td>
                                    <b>Время</b>
                                </td>
                                <td>
                                    <b>Группа</b>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ПН, ЧТ
                                </td>
                                <td>
                                    15:00
                                </td>
                                <td>
                                    35
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ВТ, ПТ
                                </td>
                                <td>
                                    15:00
                                </td>
                                <td>
                                    36
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    СР, СБ
                                </td>
                                <td>
                                    15:00
                                </td>
                                <td>
                                    37
                                </td>
                            </tr>
                        </table>
                    </div>
                </li>
            </ul>
    </div>)
};

export default Page;