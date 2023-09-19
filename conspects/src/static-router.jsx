import { useEffect, useState } from "react";

export const useChangeLocation = (callback) => {
    useEffect(() => {
        callback();
        window.addEventListener("hashchange", callback);
        
        return () => window.removeEventListener("hashchange", callback);
    }, [callback]);
}

export const useLocation = () => {
    return window.location.hash.replace("#", "/");
}

export const useNavigate = (windowFlag = false) => {
    const newWindow = (path) => {
        if(path.indexOf("://") === -1) {
            window.open(`${window.location.href.split("#")[0]}${path === "/" ? "" : "#"}${path.slice(1)}`);
        }
        else {
            window.open(path);
        }
    }
    const thisWindow = (path, e = {ctrlKey: false}) => {
        if(e.ctrlKey) {
            return newWindow(path);
        }
        if(path.indexOf("://") === -1) {
            window.location.hash = path.slice(1);
        }
        else {
            window.location = path;
        }
    }
    return windowFlag ? newWindow : thisWindow;
}

export const Routes = ({children}) => {

    const [activeElement, setActiveElement] = useState(<></>);

    useEffect(() => {

        const handle = () => {
            let childrenArray = Array.isArray(children) ? children : [children];
            let elements = {};
            const addElement = (ch, chPath = "") => {
                if(ch.props.element !== undefined) {
                    elements[`${chPath}${ch.props.path}`] = ch.props.element;
                }
                else {
                    let chChildrenArray = ch.props.children;
                    if(!Array.isArray(ch.props.children)) {
                        chChildrenArray = [ch.props.children];
                    }
                    chChildrenArray.forEach(ch1 => addElement(ch1, `${chPath}${ch.props.path}`));
                }
            }
            childrenArray.forEach(ch => addElement(ch));
            let actEl;
            let p = window.location.hash.replace("#", "/");
            console.log(p, elements);
            if(p === "") {
                p = "/";
            }
            if(p in elements) {
                actEl = elements[p];
            }
            else {
                let defaultElement = childrenArray.find(el => el.props.path === "/*");
                if(defaultElement === undefined) {
                    defaultElement = <div></div>;
                }
                actEl = defaultElement;
            }
            setActiveElement(actEl);
        }

        window.addEventListener("hashchange", handle);

        handle();
        
        return () => window.removeEventListener("hashchange", handle);
    }, [children]);

    return activeElement;

}

export const Route = ({element}) => {
    return element
}