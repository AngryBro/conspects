import { Main as MainMath} from "./math/Main"
import { Main as MainInf} from "./inf/Main"
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
import { useEffect } from "react";
import { SqrEquations } from "./math/conspects/SqrEquations";
import { Comp } from "./math/conspects/Comp";
import { Python } from "./inf/dev/Python";
import { Pycharm } from "./inf/dev/Pycharm";
import { Terminal } from "./inf/python/Terminal";
import { Idle } from "./inf/dev/Idle";
import { Models } from "./inf/Models";
import { Probability } from "./math/conspects/Probability";
import { TextTask } from "./math/conspects/TextTask";
import { Derivative } from "./math/conspects/Derivative";
import { DerivativeSample } from "./math/conspects/DerivativeSample";

export const App = () => {

    // eslint-disable-next-line
    const renderMath = () => {
        if(typeof MathJax !== "undefined") {
            // eslint-disable-next-line
            MathJax.typeset();
            // eslint-disable-next-line
            setTimeout(() => MathJax.typeset(), 3000);
        }
        else {
            console.log("Ошибка рендера");
        }
    };

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
            <Route path="/oxy" element={<Oxy/>} />
            <Route path="/sqreq" element={<SqrEquations/>} />
            <Route path="/compare" element={<Comp/>} />
            <Route path="/probability" element={<Probability/>} />
            <Route path="/derivative" element={<Derivative/>} />
            <Route path="/templates">
                <Route path="/derivative" element={<DerivativeSample/>} />
                <Route path="/params" element={<Params/>} />
                <Route path="/text-task" element={<TextTask/>} />
            </Route>
        </Route>

        <Route path="/inf">
            <Route path="" element={<MainInf/>} />
            <Route path="/models" element={<Models/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/ide">
                <Route path="/pycharm" element={<Pycharm/>} />
                <Route path="/idle" element={<Idle/>} />
            </Route>
            <Route path="/python">
                <Route path="" element={<Python/>} />
                <Route path="/terminal" element={<Terminal/>} />
            </Route>
        </Route>

        <Route path="/*" element={<Empty/>} />
    </Routes>
}