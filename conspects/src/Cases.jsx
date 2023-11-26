import { ShowSpoiler } from "./ShowSpoiler";


export const Cases = ({children, recursive, containsMath, one = false}) => 
<ShowSpoiler containsMath={containsMath} recursive={recursive} children={children} text={`частны${one?"й":"е"} случа${one?"й":"и"}`} />