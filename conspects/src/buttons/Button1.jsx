import Button from "./Button";

export const Button1 = ({children, onClick = () => 1, disabled = false}) => 
    <Button type={1} children={children} onClick={onClick} disabled={disabled} />