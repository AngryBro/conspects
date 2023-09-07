import Button from "./Button";

export const ButtonBigSpoiler = ({children, disabled = false, opened, onClick = () => 1}) => 

<Button onClick={onClick} type={"BigSpoiler"} disabled={disabled} opened={opened} children={children}></Button>