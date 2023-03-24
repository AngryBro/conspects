import OpenList from "./OpenList";
import Timetable from "./Timetable";

const IndexPage = ({page}) => {

    return page(
        <div>
            <ul className="indexPageList">
                <li><h1 onClick={page.window('https://angrybro.github.io/conspects/math/old')}>Старая версия</h1></li>
                <li>
                    <OpenList
                        header={<h1>Конспекты</h1>}
                        list={
                            <ol className="list">
                                <li onClick={page.navigate('Планиметрия')}>Планиметрия</li>
                                <li onClick={page.navigate('Переходы')}>Равносильные переходы</li>
                            </ol>
                        }
                    />                    
                </li>
                <li>
                    <OpenList
                        header={<h1>Прогресс учеников 2023</h1>}
                        list={
                            <ul className="list">
                                <li onClick={page.window("https://docs.google.com/spreadsheets/d/1ji4okTmSxDuQXZjRayYmKF2ZA5NAJW5tflCYGhHpbRI/edit?usp=sharing")}>Продвинутый уровень</li>
                                <li onClick={page.window("https://docs.google.com/spreadsheets/d/1WYlvnMgevBSUB2NjLM6ry7Yj0u_zsF0zHgwUgD2urxc/edit?usp=sharing")}>Стандартный уровень</li>
                                <li onClick={page.window("https://docs.google.com/spreadsheets/d/1S7MAjub53zNpa9PArF74OWQ8Qqlzr76gK2XtYyeSu54/edit?usp=sharing")}>Контрольные задания</li>
                            </ul>
                        }
                    />
                </li>
                <li>
                    <OpenList
                        header={<h1>Контрольные задания</h1>}
                        list={
                            <ul className="list">
                                <li onClick={page.window("https://drive.google.com/file/d/1JqqttNjcHAUipunroOwOfp4I1id3y5ZP/view?usp=sharing")}>Уравнения</li>
                                <li onClick={page.window("https://drive.google.com/file/d/1v_cgdkeKW03JlPVvxZvplHRBMKDqhNV6/view?usp=sharing")}>Неравенства</li>
                                <li onClick={page.window("https://drive.google.com/file/d/1YLCUCOj8bs0JTuM0i8BWKWl6-vvrT350/view?usp=sharing")}>Экономика</li>
                                <li onClick={page.window("https://drive.google.com/file/d/1HmD2COo8s5fM6D0D4Mw9l6-LDGKSdzDX/view?usp=sharing")}>Параметры</li>
                                <li onClick={page.navigate('404')}>Планиметрия</li>
                                <li onClick={page.window("https://drive.google.com/file/d/1MBu-hVrBRWgctBSSwlTT32BHfh3RKLED/view?usp=sharing")}>Стереометрия</li>
                                <li onClick={page.navigate('404')}>Текстовые задачи</li>
                            </ul>
                        }
                    />
                </li>
                <li>
                    <OpenList
                        header={<h1>Расписание занятий</h1>}
                        list={
                            <Timetable
                                groups={[
                                    {number: 35, days: 'ПН, ЧТ', time: '15:00'},
                                    {number: 36, days: 'ВТ, ПТ', time: '15:00'},
                                    {number: 37, days: 'СР, СБ', time: '15:00'}
                                ]}
                            />
                        }
                    />
                </li>
                <li onClick={page.window("https://docs.google.com/spreadsheets/d/1ymkx7Tbok4JtQovr6okvu_1bpVVptfb1myr_Rn2VuQI/edit?usp=sharing")}><h2>Результаты учеников на ЕГЭ</h2></li>
                <li onClick={page.window("https://drive.google.com/drive/folders/1xL7xy0TNA6vJ0Plzh84lB54qohrkL4WA?usp=sharing")}><h2>Бланки учеников</h2></li>
                <li onClick={page.window("https://drive.google.com/drive/folders/10i2RwvCOwfOsMkoITA6WvmfDNlP66Xfi?usp=sharing")}><h2>Бланки преподавателя</h2></li>  
                <li onClick={page.window("https://angrybro.github.io/LatexRealTime")}><h2>Печать формул</h2></li>        
            </ul>
            
        </div>
    );
};

export default IndexPage;