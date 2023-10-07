export const Functions = ({children, o = false, action = false}) =>

<div className="frame">
<div className="long-container">
    
    <table className="functions-table">
        <tbody>
            <tr>
                <th>Синтаксис</th>
                <th>Параметры</th>
                <th>Значение</th>
                {action?<th>Действие</th>:<></>}
                {o?<th>Сложность</th>:<></>}
            </tr>
            {children}
        </tbody>
    </table>
    </div>
</div>