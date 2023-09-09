import { ShowSpoiler } from "./ShowSpoiler";

export const Research = ({children, recursive, containsMath}) => <ShowSpoiler containsMath={containsMath} recursive={recursive} children={children} text="исследование" />