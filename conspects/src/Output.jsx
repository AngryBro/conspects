import { ShowSpoiler } from "./ShowSpoiler";

export const Output = ({children, containsMath, recursive}) =>

<ShowSpoiler text="вывод" children={children} recursive={recursive} containsMath={containsMath}/>