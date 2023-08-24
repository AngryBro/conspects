import Button from "./Button";

export const Button2 = ({children, onClick = () => 1, disabled = false}) => 
    <Button type={2} children={children} onClick={onClick} disabled={disabled} />