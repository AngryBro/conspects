import { useEffect, useState } from "react";

export const useChangeLocation = (callback) => {
    useEffect(() => {
        callback();
        window.addEventListener("hashchange", callback);
        
        return () => window.removeEventListener("hashchange", callback);
    }, [callback]);
}

export const useNavigate = (windowFlag = false) => {
    const newWindow = (path) => {
        if(path.indexOf("://") === -1) {
            window.open(`${window.location.origin}/${path === "/" ? "" : "#"}${path.slice(1)}`);
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

    const path = () => "/" + window.location.hash.slice(1);

    const [activeRoute, setActiveRoute] = useState(path());

    useEffect(() => {

        const handle = () => {
            setActiveRoute(path());
        }

        window.addEventListener("hashchange", handle);
        
        return () => window.removeEventListener("hashchange", handle);
    }, []);

    const child = () => {
        let childrenArray = Array.isArray(children) ? children : [children];
        let activeChild = childrenArray.find(child => child.props.path === activeRoute);
        if(activeChild === undefined) {
            let defaultElement = childrenArray.find(child => child.type.name !== "Route");
            activeChild = defaultElement === undefined ? <div></div> : defaultElement;
        }
        return activeChild;
    }

    return child();

}

export const Route = ({element}) => {
    return element;
}