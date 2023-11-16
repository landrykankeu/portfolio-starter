import { createContext, useState } from "react";

 export const RenderContext = createContext()
 export const RenderProvider = ({ Children }) => {
    const [render, setRender ] = useState(false)
    const reRender = () =>{
        setRender(render ?  true : true)
        }   
    return(
        <RenderContext.Provider value={{ render, reRender }}>
            { Children }
        </RenderContext.Provider>)
 }