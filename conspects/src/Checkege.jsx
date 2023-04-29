import './css/checkege.css';

const Checkege = ({page}) => {


    return page(<div>
        <header>
    <div class="header_bar"></div>
    <div class="header_content">
        <div class="header_logo"></div>
        <div class="header_text">
            <div class="header_text-1">Официальный информационный портал</div>
            <div class="header_text-2">Единого государственного экзамена</div>	
        </div>
    </div>
</header>
    <div class="content">
        <div id="rcoi-msg"></div>
        <div class="account-block">
            <span id="username"></span>
            <a href="#" id="logout">Выход</a>
        </div>
        <h3>Ваши результаты ЕГЭ</h3>
        
        <div class="mb-20">
            <a href="https://obrnadzor.gov.ru/gia/gia-11/raspisanie-gia-11/" target="_blank">График публикации результатов экзаменов</a>
        </div>
        <div id="table-container" class="table-container">
<span class="loader hidden">
	<span class="loader_bar"></span>
	<span class="loader_bar"></span>
	<span class="loader_bar"></span>
</span>
        </div>
        <p class="red">
            Внимание!
        </p>
        <p class="mb-15">
            В случае если:<br />
            &mdash; напротив предмета установлен статус &laquo;Результат скрыт&raquo;<br />
            &mdash; напротив предмета установлен статус &laquo;Экзамен обработан&raquo; и при этом значение тестового балла пустое <br/>
            Вам необходимо обратиться в РЦОИ Вашего региона для получения результатов.
        </p>
        <p class="red">
            Обращаем Ваше внимание, что результаты ЕГЭ могут быть изменены в&nbsp;связи с&nbsp;проведением процедур апелляции и/или&nbsp;перепроверок результатов на&nbsp;региональном и&nbsp;федеральном уровнях. Рекомендуем осуществлять периодические повторные проверки Ваших результатов ЕГЭ.
        </p>
    </div>
 <footer>
    <div>
        © 2001-<span id="current-year">2022</span> Федеральная служба по надзору в сфере образования и науки
    </div>
    <div>
        При использовании материалов портала ЕГЭ на внешних Интернет-ресурсах ссылка на <a href="http://obrnadzor.gov.ru/" target="_blank">первоисточник</a> обязательна
    </div>
</footer>
</div>)
};
export default Checkege;