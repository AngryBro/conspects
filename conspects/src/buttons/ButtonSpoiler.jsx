import Button from "./Button";

export const ButtonSpoiler = ({children, onClick = () => 1, disabled = false, opened}) => 
    <Button opened={opened} type={"Spoiler"} children={children} onClick={onClick} disabled={disabled} />