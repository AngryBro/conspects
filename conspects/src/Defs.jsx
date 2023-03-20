import OpenList from "./OpenList";

const Defs = ({page}) => {
    return page(
    <div>
        <OpenList
            header={<div className="frame">Главный список</div>}
            list = {
                <ol>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>
                        <OpenList
                            header = {<div className="frame">Подсписок</div>}
                            list = {
                                <ul>
                                    <li>1</li>
                                    <li>2</li>
                                </ul>
                            }
                        />
                    </li>
                    <li>4</li>
                </ol>
            }
        />
        123123123
    </div>)
};

export default Defs;