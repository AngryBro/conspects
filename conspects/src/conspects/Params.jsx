const Params = ({page}) => page(
    <div>
        <h1 onClick={page.index} className="main-menu">Задачи с параметром</h1>
        <ul className="list">
            <li>Замена</li>
            <li>Аналитика</li>
            <li>Графика</li>
            <li>Квадратный трёхчлен</li>
            <li>Симметрия</li>
            <li>Функция</li>
            <li>Оценка</li>
        </ul>
        Конспект пока в процессе. Весь материал в старой версии.
    </div>
);

export default Params;