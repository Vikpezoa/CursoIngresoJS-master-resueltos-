function mostrar()
{
//tomo la edad  

    var edad; 
    var estado; 

    edad = document.getElementById("edad").value;
    estado = document.getElementById("estadoCivil").value;

    if(edad<18 || (estado != "Soltero")) { 
        //No hacer nada
    }
    
    else {
        //Muestro alert con mensaje
    
        alert("Es soltero y no es menor");  
    }
    
    
/*  Error 1:

    if(edad>18 && (estado != "Soltero")) -> No era el operador lógico correcto
    
    
    Error 2:

    if(codition)
    { 
    else 
        alert("Es soltero y no es menor");  
    } 

    -> poner else entre las llaves de if cuando debería tener las propias
*/

}//FIN DE LA FUNCIÓN