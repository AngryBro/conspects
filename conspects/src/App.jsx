import { Main as MainMath} from "./math/Main"
import { Route, Routes, useChangeLocation } from "./static-router"
import "./css/style.css";
import "./css/media.css";
import { Polynom } from "./math/conspects/Polynom";
import { Frac } from "./math/conspects/Frac";
import { Pow } from "./math/conspects/Pow";
import { Abs } from "./math/conspects/Abs";
import { Log } from "./math/conspects/Log";
import { Sqrt } from "./math/conspects/Sqrt";
import { About } from "./About";
import { Trigonometry } from "./math/conspects/Trigonometry";
import { Equivalents } from "./math/conspects/Equivalents";
import { Empty } from "./Empty";
import { Params } from "./math/conspects/Params";
import { Oxy } from "./math/conspects/Oxy";
import { Main } from "./Main";
import { useCallback, useEffect } from "react";

export const App = () => {

    const renderMath = useCallback(() => {
        if(typeof MathJax !== "undefined") {
            // eslint-disable-next-line
            MathJax.typeset();
        }
    }, []);

    useChangeLocation(renderMath);

    useEffect(() => {
        window.addEventListener("load", renderMath);
        return () => window.removeEventListener("load", renderMath);
    }, [renderMath]);


    return <Routes>

        <Route path="/" element={<Main title="Конспекты" />} />
        <Route path="/about" element={<About/>} />

        <Route path="/math">
            <Route path="" element={<MainMath/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/polynom" element={<Polynom/>} />
            <Route path="/frac" element={<Frac/>} />
            <Route path="/pow" element={<Pow/>} />
            <Route path="/abs" element={<Abs/>} />
            <Route path="/log" element={<Log/>} />
            <Route path="/sqrt" element={<Sqrt/>} />
            <Route path="/trigonometry" element={<Trigonometry/>} />
            <Route path="/equivalents" element={<Equivalents/>} />
            <Route path="/params" element={<Params/>} />
            <Route path="/oxy" element={<Oxy/>} />
        </Route>

        <Route path="/inf">
            <Route path="" element={<></>} />
            <Route path="/about" element={<About/>} />
        </Route>

        <Route path="/*" element={<Empty/>} />
    </Routes>
}