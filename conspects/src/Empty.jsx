import { Button1 } from "./buttons/Button1";
import { useNavigate } from "./static-router";


export const Empty = () => {

    const nav = useNavigate();

    return <div>
        <h1 style={{marginTop:"50px"}}>Тут пока пусто <span>&empty;</span></h1>
        <Button1 onClick={() => nav("/")}>На главную</Button1>
    </div>

}