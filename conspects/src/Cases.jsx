import { ShowSpoiler } from "./ShowSpoiler";


export const Cases = ({children, recursive, containsMath}) => 
<ShowSpoiler containsMath={containsMath} recursive={recursive} children={children} text="частные случаи" />