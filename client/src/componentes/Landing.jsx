import {useState } from "react"

import {gridCrad} from "../gridCard"


export default function Landing(){
    const[local,setlocal]=useState([])
    const[input,setInput]=useState()
   
   
    

    function handleOnChange(e){
        e.preventDefault(e)
        const{name,value}=e.target
        if(value.length<=6){setInput(value.toUpperCase()   )}
        if(name==="ingreso" && value.length===6)
        

        return setlocal([ gridCrad[value[0]][value[1]], gridCrad[value[2]][value[3]] ,gridCrad[value[4]][value[5]] ]      )
        

        
    }
    
    

    return(
        <div>
            <h3>landing</h3>



            <div>
                <input type="text" name="ingreso" value={input}   onChange={(e)=>{handleOnChange(e)}}/>
                
                <li htmlFor="">{local}</li>

           

            </div>
        </div>
    )
}