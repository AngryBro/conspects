import {useEffect, useRef, useState } from "react";

const Hidinglist = ({parent, parent1 = parent, child, rerender = false}) => {

    const ref = useRef();
    const [hidden, setHidden] = useState(true);
    const [height, setHeight] = useState('0px');
    const speed = 0.3;

    const handleChildClick = () => {
        setHeight('fit-content');
        setTimeout(() => {
            if(ref.current !== null) setHeight(`${ref.current.scrollHeight}px`);
        },1000*speed);
    }
    const handleParentClick = () => {
        if(hidden) {
            setHidden(false);
            setHeight(`${ref.current.scrollHeight}px`);
        }
        else {
            setHidden(true);
            setHeight('0px');
        }
    }
    
    useEffect(() => {
        // eslint-disable-next-line
        if(!hidden && rerender) eval('MathJax.typeset()');
      }, [hidden, rerender]);

    return <div style={{height:'fit-content'}}>
        <div style={{width:'fit-content', height:'fit-content'}} onClick={handleParentClick}>{hidden?parent:parent1}</div>
        <div style={{transition:`all ${speed}s ease` ,overflow:'hidden', width:'fit-content', height: height}}>
            <div key={rerender?hidden:true} onClick={handleChildClick} ref={ref} style={{overflow:'hidden', width:'fit-content', height:'fit-content'}}>{child}</div>
        </div>
    </div>
};

export default Hidinglist;