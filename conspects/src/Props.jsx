export const Props = ({children}) => {

    const insertedPC = (tr, i) => {
        let tds = tr.props.children;
        return <tr key={i} className="props-tr">
                {
                    [<td className="props-table-number" key={i+1}>{i+1}.</td>]
                    .concat(<td className="props-table-left" key={i+2}>{tds[0].props.children}</td>)
                    .concat(<td key={i}>&rarr;</td>).concat(tds.slice(1))
                }
            </tr>;
    }

    const insertedM = (tr, i) => {
        let tds = tr.props.children;
        return <tr key={i}>
            <td className="props-table-number">{i+1}.</td>
            <td className="props-table-td">
                <div className="props-table-column">
                    <div className={tds[0].props.className}>{tds[0].props.children}</div>
                    <div>&darr;</div>
                    {
                        tds.slice(1).map((td, j) => 
                            <div className={td.props.className} key={j}>{td.props.children}</div>
                        )
                    }
                </div>
            </td>
        </tr>
    }

    const childrenArray = Array.isArray(children) ? children : [children];

    return <table className="props-table math">
        <tbody className="props-tbody-pc">
            {
                childrenArray.map(insertedPC)
            }
        </tbody>
        <tbody className="props-tbody-m">
            {
                childrenArray.map(insertedM)
            }
        </tbody>
    </table>
}