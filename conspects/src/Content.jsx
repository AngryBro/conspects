import { ButtonS } from "./buttons/ButtonS";

export const Content = ({children}) => {

    const scroll = (ref) => {
        if(ref !== undefined && ref.current !== undefined) {
            window.scrollTo({top: ref.current.offsetTop, behavior: "smooth"});
        } 
    }

    return <div className="content-container">
        <div className="content">Содержание:</div>
        <ul className="content-list">
            {
                children.map((a, i) =>
                    <li key={i}>
                        <ButtonS onClick={() => scroll(a.props.link)}>{a.props.children}</ButtonS>
                    </li>
                )
            }
        </ul>
    </div>
}