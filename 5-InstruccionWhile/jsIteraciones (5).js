function mostrar()
{

    var sexo;
    sexo = prompt("ingrese f ó m .");

    while (!(sexo=="f"|| sexo=="m"))
    {
        sexo = prompt("Ingrese f o m");
    }

    console.log("El sexo ingresado es: "+sexo);

document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN