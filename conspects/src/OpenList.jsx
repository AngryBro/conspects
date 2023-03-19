import {useRef, useState } from "react";

const OpenList = ({header, list}) => {
    const [height, setHeight] = useState(0);
    const listRef = useRef();
    const speed = 0.3;

    const handleClick = () => {
        if(height) {
            setHeight(0);
        }
        else {
            setHeight(listRef.current.scrollHeight);
        }

    };


    return <div >
        <div style={{overflow:'hidden', width:'fit-content'}} onClick={handleClick}>{header}</div>
        <div style={{padding: '0px',height: `${height}px`, overflow:'hidden', transition: `all ${speed}s`, width:'fit-content'}} ref={listRef}>{list}</div>
    </div>
};

export default OpenList;