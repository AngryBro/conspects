import { ShowSpoiler } from "./ShowSpoiler";


export const General = ({children, recursive, containsMath}) => 
<ShowSpoiler containsMath={containsMath} recursive={recursive} children={children} text="общий случай" />