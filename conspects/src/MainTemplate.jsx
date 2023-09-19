import { useEffect } from "react";
import { Button1 } from "./buttons/Button1";
import { Button2 } from "./buttons/Button2";
import { Spoiler } from "./spoiler";
import { useNavigate } from "./static-router";

export const MainTemplate = ({children, title, route = ""}) => {

    const nav = useNavigate();
    const win = useNavigate(true);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return <div>
        <ul className="main-list" style={{marginTop: "50px"}}>
            {
                children.map((child, i) =>
                    <li key={i}>
                        {
                            child.children !== undefined?
                            <Spoiler margin={10} hoverOpen={true}>
                                <Button1>{child.text}</Button1>
                                <ol className="main-sublist">
                                    {
                                        child.children.map((child1, j) =>
                                            <li key={j}>
                                                <Button2 onClick={(e) => child1.nav?nav(route + child1.nav, e):win(child1.win)}>{child1.text}</Button2>
                                            </li>
                                        )
                                    }
                                </ol>
                            </Spoiler>
                            :
                            <Button1 onClick={(e) => child.nav?nav(route + child.nav, e):win(child.win)}>{child.text}</Button1>
                        }
                    </li>
                )
            }
        </ul>
    </div>
}