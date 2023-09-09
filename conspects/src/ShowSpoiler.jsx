import { ButtonSpoiler } from "./buttons/ButtonSpoiler";
import { Spoiler } from "./spoiler";

export const ShowSpoiler = ({children, text, recursive, containsMath}) =>

<Spoiler recursive={recursive} containsMath={containsMath}>
    <ButtonSpoiler opened={false}>Показать {text}</ButtonSpoiler>
    <div>{children}</div>
    <ButtonSpoiler opened={true}>Скрыть {text}</ButtonSpoiler>
</Spoiler>
