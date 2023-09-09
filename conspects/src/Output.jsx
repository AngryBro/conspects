import { ShowSpoiler } from "./ShowSpoiler";

export const Output = ({children, containsMath, recursive}) =>

<ShowSpoiler text="вывод" recursive={recursive} containsMath={containsMath}>
    <p>{children}</p>
</ShowSpoiler>