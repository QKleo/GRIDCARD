

export function validarNumero(str,len,valor=1000000000000000000000000000000000000000000000000000000000000000000){
    if(str.legth>len){return false}
    if(str*1>valor){return false}
    return parseInt(str*1)&&true
}


export function sumarCantidades(array1,array2){



    array1.forEach(element => {

        array2.forEach(el=>{

            if(element.name===el.name){
                element.cantidad=element.cantidad+el.cantidad
                array2=array2.filter(e=>e.name!==element.name)
            }
        })
        
    });
    if(array2.length>0){
        array1=[...array1,...array2]
     
   }
        
  
    return array1
    
    }


export function restarCantidades(array1,array2){
    array1.forEach(element => {

        array2.forEach(el=>{

            if(element.name===el.name){
                element.cantidad=element.cantidad-el.cantidad
                array2=array2.filter(e=>e.name!==element.name)
            }
        })
        
    });
   
        
  
    return array1.filter(e=>e.cantidad>0)

}
 