function mostrar()
{
    //tomo la edad  
 
    var edad;
    var estado;

    edad = document.getElementById("edad").value;
    estado = document.getElementById("estadoCivil").value;
    if(edad<18 && (estado != "Soltero")) {
        alert("Es muy pequeño para NO ser soltero"); 
    } 
		
/* 
var edad;
var estado;

edad = document.getElementById("edad").value;
estado = document.getElementById("estadoCivil").value;

if(edad<18) 
{
if((estado) != (Soltero))
}
alert("Es muy pequeño para NO ser soltero");
*/

// Otro error (en la segunda versión) fue poner en if(... && estado != Soltero) como si Soltero
// como si Soltero fuese variable, a lo que Console me arrojo que no estába definida.

}//FIN DE LA FUNCIÓN


