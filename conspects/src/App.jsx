import { Main } from "./Main"
import { Route, Routes, useChangeLocation } from "./static-router"
import "./css/style.css";
import "./css/media.css";
import { Polynom } from "./conspects/math/Polynom";
import { Frac } from "./conspects/math/Frac";
import { Pow } from "./conspects/math/Pow";
import { Abs } from "./conspects/math/Abs";
import { Log } from "./conspects/math/Log";
import { Sqrt } from "./conspects/math/Sqrt";
import { About } from "./About";
import { Trigonometry } from "./conspects/math/Trigonometry";
import { Equivalents } from "./conspects/math/Equivalents";
import { Empty } from "./Empty";
import { Params } from "./conspects/math/Params";
import { Oxy } from "./conspects/math/Oxy";

export const App = () => {

    useChangeLocation(() => {
        console.log(1);
        if(typeof MathJax !== "undefined") {
            // eslint-disable-next-line
            MathJax.typeset();
        }
    });


    return <Routes>
        <Route path="/math" element={<Main/>} />
        <Route path="/math/polynom" element={<Polynom/>} />
        <Route path="/math/frac" element={<Frac/>} />
        <Route path="/math/pow" element={<Pow/>} />
        <Route path="/math/abs" element={<Abs/>} />
        <Route path="/math/log" element={<Log/>} />
        <Route path="/math/sqrt" element={<Sqrt/>} />
        <Route path="/math/about" element={<About/>} />
        <Route path="/math/trigonometry" element={<Trigonometry/>} />
        <Route path="/math/equivalents" element={<Equivalents/>} />
        <Route path="/math/params" element={<Params/>} />
        <Route path="/math/oxy" element={<Oxy/>} />
        {/* <Route path="/math/test" element={<Test/>} /> */}

        <Empty/>
    </Routes>
}