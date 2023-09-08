import "./css/Spinner.css";

export const Spinner = ({scale = 1}) =>

<div className="spinner-container" style={{transform: `scale(${scale})`}}>
    <div className="spinner">&#8635;</div>
</div>