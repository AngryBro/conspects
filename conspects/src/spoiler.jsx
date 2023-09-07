import { useEffect, useRef, useState } from "react";

export const Spoiler = ({children, duration = 0.3, recursive = false, margin = 0, hoverOpen = false}) => {

    const [opened, setOpened] = useState(false);
    const [childrenContainerHeight, setChildrenContainerHeight] = useState("0px");
    const [childKey, setChildKey] = useState(true);
    const childrenRef = useRef();


    const handleClick = () => {
        if(opened) {
            close();
        }
        else {
            open();
        }
    }

    const open = () => {
        if(childrenRef.current !== undefined) {
            setChildrenContainerHeight(`${childrenRef.current.offsetHeight + margin}px`);
            setTimeout(() => setChildrenContainerHeight("fit-content"), duration*1000);
            setOpened(true);
        }
    }

    const close = () => {
        if(childrenRef.current !== undefined) {
            setChildrenContainerHeight(() => `${childrenRef.current.offsetHeight + margin}px`);
            setOpened(false);
        }
    }

    useEffect(() => {
        if(!opened && childrenContainerHeight !== "0px") {
            setChildrenContainerHeight("0px");
        }
    }, [childrenContainerHeight, opened]);

    useEffect(() => {
        if(recursive && childrenContainerHeight === "0px") {
            setTimeout(() => setChildKey(ck => !ck), duration*1000);
        }
    }, [childrenContainerHeight, recursive, duration]);

    const handleMouseEnter = () => {
        if(hoverOpen) {
            open();
        }
    }

    const handleMouseLeave = () => {
        if(hoverOpen) {
            close();
        }
    }

    const style = {
        children: {
            overflow: "hidden",
            transition: `all ${duration}s ease`,
            width: "fit-content",
            height: childrenContainerHeight
        },
        parent: {
            width: "fit-content"
        }
    }

    return <div style={{width:"fit-content"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div onClick={handleClick} style={style.parent}>
            {
                opened && children.length > 2?
                children[2]
                :children[0]
            }
        </div>
        <div style={style.children}>
            <div style={{height: `${margin}px`}}></div>
            <div key={childKey} ref={childrenRef} style={{height:"fit-content"}}>
                <div style={{height:"1px", opacity: 0}}></div>
                {children[1]}
                <div style={{height:"1px", opacity: 0}}></div>
            </div>
        </div>
    </div>
};