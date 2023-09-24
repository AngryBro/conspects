export const Functions = ({children, o = false, action = false}) =>

<div className="frame">
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