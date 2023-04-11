import {useRef, useState } from "react";

const OpenList = ({header, list}) => {
    const [height, setHeight] = useState(0);
    const listRef = useRef();
    const speed = 0.3;
    // const [opened, setOpened] = useState(false);

    const handleClick = () => {
        if(height) {
            setHeight(0);
            // setOpened(false);
        }
        else {
            // setTimeout(() => setHeight(listRef.current.scrollHeight), 1);
            setHeight(listRef.current.scrollHeight);
            // setOpened(true);
        }
    };

    const updateHeight = () => {
            // setTimeout(() => listRef.current !== null?setHeight(listRef.current.scrollHeight):1, speed*1000);
            // (listRef.current !== null)?setHeight(listRef.current.scrollHeight):1;
            var callback = () => {
                if(listRef.current !== null) {
                    setHeight(listRef.current.scrollHeight);
                }
            };
            console.log(list.current);
            setTimeout(callback, speed*1000);
        };


    return <div >
        <div style={{overflow:'hidden', width:'fit-content'}} onClick={handleClick}>{header}</div>
        <div onClick={updateHeight} style={{padding: '0px',height: `${height}px`, overflow:'hidden', transition: `all ${speed}s`, width:'fit-content'}} ref={listRef}>
            {list}
        </div>
    </div>
};

export default OpenList;