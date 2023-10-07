import { useNavigate } from "./static-router";
import "./css/Title.css";
import { useEffect } from "react";

export const Title = ({children, docTitle, main}) => {

    const nav = useNavigate();
    
    useEffect(() => {
        document.title = docTitle === undefined ? children : docTitle;
    }, [children, docTitle]);

    return <div className="title" onClick={(e) => nav(main, e)}>
        <div className="title-page __current">{children}</div>
        <div className="title-page __main">На главную</div>
    </div>
}