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

    const treeRender = (child) => {
        if(child.children === undefined) {
            return <Button2 onClick={(e) => child.nav?nav(route + child.nav, e):win(child.win)}>
                {child.text}
            </Button2>
        }
        return <Spoiler margin={10} containsMath={true} recursive={true}>
            <Button2>{child.text}</Button2>
            {child.num?
            <ol className="main-sublist">
                {
                    child.children.map((child1, j) =>
                        <li key={j}>
                            {treeRender(child1)}
                        </li>
                    )
                }
            </ol>:
            <ul className="main-sublist dot-list">
                {
                    child.children.map((child1, j) =>
                        <li key={j}>
                            {treeRender(child1)}
                        </li>
                    )
                }
            </ul>
            }
        </Spoiler>
    }

    return <div>
        <ul className="main-list" style={{marginTop: "50px"}}>
            {
                children.map((child, i) =>
                    <li key={i}>
                        {
                            child.children !== undefined?
                            <Spoiler margin={10} hoverOpen={true} containsMath={true} recursive={true}>
                                <Button1>{child.text}</Button1>
                                <ul className="main-sublist dot-list">
                                    {
                                        child.children.map((child1, j) =>
                                            <li key={j}>
                                                {treeRender(child1)}
                                            </li>
                                        )
                                    }
                                </ul>
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