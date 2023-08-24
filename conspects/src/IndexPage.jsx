import Hidinglist from "./Hidinglist";
import {Spoiler} from "./spoiler";
import { useNavigate } from "./static-router";
export const IndexPage = () => {


        const nav = useNavigate();
        const win = useNavigate(true);

        return <div>
            <div>
            <ul className="indexPageList">
                <li><div className="h1" onClick={() => win('https://angrybro.github.io/conspects/math/old')}>Старая версия</div></li>
                <li>
                    <Spoiler margin={20}>
                        <div className="h1">Конспекты</div>
                        <ol className="list">
                            <li onClick={() => nav('Планиметрия')}>Планиметрия</li>
                            <li onClick={() => nav('Переходы')}>Равносильные переходы</li>
                            <li onClick={() => nav('Параметры')}>Задачи с параметром</li>
                            <li onClick={() => nav('Oxy')}>Координатная плоскость {`Oxy`}</li>
                        </ol>
                    </Spoiler>                    
                </li>
                <li>
                    <Spoiler margin={20}>
                        <div style={{backgroundColor:"green", height: "30px"}}></div>
                        <div style={{backgroundColor:"red", height:"50px"}}></div>
                    </Spoiler>
                </li>
                <li>
                    <Hidinglist
                        parent={<div className="h1">Контрольные задания</div>}
                        child={
                            <ul className="list">
                                <li style={{border:'none'}}><div style={{marginLeft:'-10px'}} className="main-menu"  onClick={() => win("https://docs.google.com/spreadsheets/d/1S7MAjub53zNpa9PArF74OWQ8Qqlzr76gK2XtYyeSu54/edit?usp=sharing")}>Таблица с прогрессом</div></li>
                                <li onClick={() => win("https://drive.google.com/file/d/1JqqttNjcHAUipunroOwOfp4I1id3y5ZP/view?usp=sharing")}>Уравнения</li>
                                <li onClick={() => win("https://drive.google.com/file/d/1v_cgdkeKW03JlPVvxZvplHRBMKDqhNV6/view?usp=sharing")}>Неравенства</li>
                                <li onClick={() => win("https://drive.google.com/file/d/1YLCUCOj8bs0JTuM0i8BWKWl6-vvrT350/view?usp=sharing")}>Экономика</li>
                                <li onClick={() => win("https://drive.google.com/file/d/1HmD2COo8s5fM6D0D4Mw9l6-LDGKSdzDX/view?usp=sharing")}>Параметры</li>
                                <li onClick={() => win("https://drive.google.com/file/d/1MBu-hVrBRWgctBSSwlTT32BHfh3RKLED/view?usp=sharing")}>Стереометрия</li>
                            </ul>
                        }
                    />
                </li>
                <li onClick={() => win("https://docs.google.com/spreadsheets/d/1ymkx7Tbok4JtQovr6okvu_1bpVVptfb1myr_Rn2VuQI/edit?usp=sharing")}><h2>Результаты учеников на ЕГЭ</h2></li>
                <li onClick={() => win("https://drive.google.com/drive/folders/1xL7xy0TNA6vJ0Plzh84lB54qohrkL4WA?usp=sharing")}><h2>Бланки учеников</h2></li>
                <li onClick={() => win("https://angrybro.github.io/checkege")}><h2>Бланки преподавателя</h2></li>  
                <li onClick={() => win("https://angrybro.github.io/LatexRealTime")}><h2>Печать формул</h2></li>
                <li onClick={() => win("https://angrybro.github.io/TaskGenerators")}><h2>Генератор задач (альфа версия)</h2></li>        
            </ul>
            </div>
        </div>
};

export default IndexPage;