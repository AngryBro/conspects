import "./Button.css";

const Button = ({children, onClick, disabled, type, opened = false}) => {

    return <div onClick={disabled?()=>1:onClick} className={`button button${type}${disabled?" __disabled":""}`}>
        <div className="button-text-container">
            {children}
            {
                ["Spoiler", "BigSpoiler"].includes(type) ?
                <div className={`button-bird-container button${type}-bird${opened?" __opened":""}`}>
                    <div className="button-bird" />
                </div>
                :<></>
            }
        </div>
        {type === "Up"? <div className="buttonUp-hover">&uarr;&uarr;&uarr;</div> : <></>}
    </div>
};

export default Button;