import { ButtonUp } from "./buttons/ButtonUp";

export const Block = ({link, beginRef = undefined, title, children}) =>  {

    const scrollToTop = () => {
        if(beginRef === undefined) return;
        window.scrollTo({top: beginRef.current.offsetTop, behavior:"smooth"})
    }

    const doubleClickHandler = e => {
        if(e.detail === 2) {
            scrollToTop();
        }
    }

    return <div ref={link} className="block">
        <ButtonUp disabled={beginRef === undefined}  onClick={scrollToTop}>{title}</ButtonUp>
        <div className="block-children" onClick={doubleClickHandler}>
            {children}
        </div>
    </div>

}