import { MainTemplate } from "./MainTemplate";

export const Main = ({title}) => <MainTemplate title={title} >{[

    
    {text: "О преподавателе", nav: "/about"},
    {text: "Математика", nav: "/math"},
    {text: "Информатика", nav: "/inf"}
    

]}</MainTemplate>