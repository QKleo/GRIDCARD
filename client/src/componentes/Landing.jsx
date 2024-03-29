import {useState } from "react"

//import {gridCrad} from "../gridCard"
import {users} from "../users"



export default function Landing(){
    const[local,setlocal]=useState([])
    const[input,setInput]=useState()
    const[Card,setCard]=useState({'blank':'blank'})
   
    

    function handleOnChange(e){
        e.preventDefault(e)
        const{name,value}=e.target
        if(value.length<=6){setInput(value.toUpperCase()   )}
        if(name==="ingreso" && value.length===6 && !Card.blank){
        

        
        return setlocal([ Card[value[0]][value[1]], Card[value[2]][value[3]] ,Card[value[4]][value[5]] ]      )}

        
    }
    function handleOnChangeselect(e){
        e.preventDefault(e)
        
        const{name,value}=e.target
        if(value!=='blank'){
        
        return setCard(JSON.parse(value)) }
        else{
             
            setlocal([])
            setCard({'blank':value})
            
        }
        
        


    }
    
    

    return(
        <div>
            <h3>Grid Card</h3>
            <div>
                <select name="user" id="" onChange={(e)=>{handleOnChangeselect(e)}} autoComplete={false}>
                    <option value="blank">Selecciona tu nombre</option>
                    {users.map((e,i)=>{return <option value={JSON.stringify(e.gridCard)} key={i}>{e.name}</option> })}
                </select>
            </div>
            <br />
            <br />

            <div>
                <input type="text" name="ingreso" value={input} placeholder="Coordenadas Grid Card" disabled={Card.blank}
                  onChange={(e)=>{handleOnChange(e)}} autoComplete="off" />
                
                <li htmlFor="">{local}</li>

            {console.log(Card)}

            </div>
            
        </div>
    )
}