import { ButtonUp } from "./buttons/ButtonUp";

export const Block = ({link, beginRef = undefined, title, children}) => 

<div ref={link} className="block">
    <ButtonUp disabled={beginRef === undefined}  onClick={() => window.scrollTo({top: beginRef.current.offsetTop, behavior:"smooth"})}>{title}</ButtonUp>
    <div className="block-children">
        {children}
    </div>
</div>