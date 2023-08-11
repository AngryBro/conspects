import { useEffect, useRef, useState } from "react";

export const Spoiler = ({children, duration = 0.3, recursive = false}) => {

    const [opened, setOpened] = useState(false);
    const childrenRef = useRef();
    const childrenContainerRef = useRef();

    useEffect(() => {
        if(childrenContainerRef.current) {
            childrenContainerRef.current.style.height = "0px";
        }
    }, [childrenContainerRef]);

    const handle = () => {
        if(opened) {
            childrenContainerRef.current.style.height = `${childrenRef.current.scrollHeight}px`;
            setTimeout(() => {
                childrenContainerRef.current.style.height = "0px";
            }, 0);
        }
        else {
            childrenContainerRef.current.style.height = `${childrenRef.current.scrollHeight}px`;
            setTimeout(() => {
                childrenContainerRef.current.style.height = "fit-content"
            }, duration*1000);
        }
        setOpened(t => !t);
    }


    const style = {
        children: {
            overflow: "hidden",
            transition: `all ${duration}s ease`
        }
    }

    return <div>
        <div onClick={handle}>{children[0]}</div>
        <div ref={childrenContainerRef} style={style.children}>
            <div key={recursive?opened:true} style={{height:"fit-content"}} ref={childrenRef}>{children[1]}</div>
        </div>
    </div>
};