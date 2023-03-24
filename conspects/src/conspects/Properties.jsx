import OpenList from "../OpenList";

const Properties = ({page}) => page(
    <div>

    </div>
);

const Property = ({tex, rules}) => {

    return <div>
        <li>
            <div className="frame">
                {`\\(${tex}\\)`}
            </div>
            <OpenList
                header={<div className="sub-menu">Применение в равносильных переходах</div>}
                list = {
                    <table>
                        <tbody>
                            <tr>
                                <th>Можно развернуть, если известно {rules.length?'одно из:':''}:</th>
                                <th>При сворачивании дописать в систему {rules.length?'одно из':''}:</th>
                            </tr>
                            {
                                rules.map((rule, index) => 
                                    <tr key={index}>
                                        <td>{rule.from}</td>
                                        <td>{rule.to}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                }
            />
        </li>
    </div>
};

export default Properties;