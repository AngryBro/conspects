import Button from "./Button";

export const ButtonS = ({children, onClick = () => 1, disabled = false}) => 
    <Button type={"S"} children={children} onClick={onClick} disabled={disabled} />