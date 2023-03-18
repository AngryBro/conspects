const Timetable = ({groups}) => (
    <table>
        <tbody>
            <tr>
                <th>День</th>
                <th>Время</th>
                <th>Группа</th>
            </tr>
            {
                groups.map(group => 
                    <tr key={group.number}>
                        <td>{group.days}</td>
                        <td>{group.time}</td>
                        <td>{group.number}</td>
                    </tr>    
                )
            }
        </tbody>
    </table>
);

export default Timetable;