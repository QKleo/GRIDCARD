import {ID
    } from "./actions"



const initialState={
   
   ID:""
   
  
  
}



export default function rootReducer(state=initialState,actions){
        switch (actions.type){
           
            
            case ID:
                
                return{
                    ...state,
                    ID:actions.payload
                }
           
            default:
                return state
        }        
}   