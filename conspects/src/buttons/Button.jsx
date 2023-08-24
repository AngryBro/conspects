import "./Button.css";

const Button = ({children, onClick, disabled, type}) => {

    return <div onClick={disabled?()=>1:onClick} className={`button button${type}${disabled?" __disabled":""}`}>
        <div>{children}</div>
        {type === "Up"? <div className="buttonUp-hover">&uarr;&uarr;&uarr;</div> : <></>}
    </div>
};

export default Button;