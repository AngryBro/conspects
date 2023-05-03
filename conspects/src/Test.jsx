import Hidinglist from "./Hidinglist";


const Test = ({page}) => page(
    <div>
        <Hidinglist
        parent={<div>123123412</div>}
                            child={<div>
                            <div>Пишется:</div>
                            <div>
                                <div className="flex line">
                                    <div>{`\\((i):~~\\)`}</div>
                                    <div>
                                        <div>{'\\(\\infty\\)'} решений при {`\\(a \\in A\\)`}</div>
                                        <div>0 решений при {`\\(a \\not\\in A\\)`}</div>
                                    </div>
                                </div>
                                <div>Не участвует в поиске общих решений.</div>
                            </div>
                            </div>}
                            />
        
    </div>
);
export default Test;