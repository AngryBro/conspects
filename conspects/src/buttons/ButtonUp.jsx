import Button from "./Button";

export const ButtonUp = ({children, onClick = () => 1, disabled = false}) => 
    <Button type={"Up"} children={children} onClick={onClick} disabled={disabled} />