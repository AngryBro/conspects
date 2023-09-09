import { ShowSpoiler } from "./ShowSpoiler";

export const Description = ({children, containsMath, recursive}) =>

<ShowSpoiler containsMath={containsMath} recursive={recursive} text="описание">
    <p>{children}</p>
</ShowSpoiler>