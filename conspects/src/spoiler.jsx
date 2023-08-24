import { useState } from "react";

export const Spoiler = ({children, duration = 0.3, recursive = false, margin = 0, hoverOpen = false}) => {

    const [opened, setOpened] = useState(false);


    const handleClick = () => {
        setOpened(t => !t);
    }

    const handleMouseEnter = () => {
        if(hoverOpen) {
            setOpened(true);
        }
    }

    const handleMouseLeave = () => {
        if(hoverOpen) {
            setOpened(false);
        }
    }


    const style = {
        children: {
            overflow: "hidden",
            maxHeight: opened?"1500px":"0px",
            transition: `all ${duration}s ease`,
            width: "fit-content"
        },
        parent: {
            width: "fit-content"
        }
    }

    return <div style={{width:"fit-content"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div onClick={handleClick} style={style.parent}>{children[0]}</div>
        <div style={style.children}>
            <div style={{height: `${margin}px`}}></div>
            <div style={{height:"fit-content"}}>
                {children[1]}
            </div>
        </div>
    </div>
};