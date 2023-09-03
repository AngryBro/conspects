import { Main } from "./Main"
import { Route, Routes, useChangeLocation } from "./static-router"
import "./css/style.css";
import "./css/media.css";
import { Polynom } from "./conspects/Polynom";
import { Frac } from "./conspects/Frac";
import { Pow } from "./conspects/Pow";
import { Abs } from "./conspects/Abs";
import { Log } from "./conspects/Log";
import { Sqrt } from "./conspects/Sqrt";
import { About } from "./About";

export const App = () => {

    useChangeLocation(() => {
        console.log(1);
        if(typeof MathJax !== "undefined") {
            // eslint-disable-next-line
            MathJax.typeset();
        }
    });


    return <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/equivalents" element={<></>} />
        <Route path="/polynom" element={<Polynom/>} />
        <Route path="/frac" element={<Frac/>} />
        <Route path="/pow" element={<Pow/>} />
        <Route path="/abs" element={<Abs/>} />
        <Route path="/log" element={<Log/>} />
        <Route path="/sqrt" element={<Sqrt/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
}