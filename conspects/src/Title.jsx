import { useNavigate } from "./static-router";
import "./css/Title.css";

export const Title = ({children}) => {

    const nav = useNavigate();

    return <div className="title" onClick={() => nav("/")}>
        <div className="title-page __current">{children}</div>
        <div className="title-page __main">На главную</div>
    </div>
}