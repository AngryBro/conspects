import { ShowSpoiler } from "./ShowSpoiler";

export const Formula = ({children, containsMath, recursive}) =>

<ShowSpoiler text="формулу" recursive={recursive} containsMath={containsMath}>
    <p>{children}</p>
</ShowSpoiler>