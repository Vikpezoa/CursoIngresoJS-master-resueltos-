function mostrar()
{
var sexo = prompt("ingrese f o m");

while(sexo != "f" && "m")
{
    sexo = prompt("error, ingrese f o m");
}
console.log("dato ingresado");
document.getElementById("Sexo").value=sexo;



/*var sexo = prompt("ingrese f ó m .");

document.getElementById('Sexo').value=sexo;
*/
}//FIN DE LA FUNCIÓN