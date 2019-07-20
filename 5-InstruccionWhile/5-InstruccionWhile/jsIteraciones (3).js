function mostrar()
{
    var clave = prompt("ingrese el número clave.");
    while(!(clave == "utn750")) 
        {
            //puse prompt solo y por eso no salia del bucle al ingresar incorrecta y luego correcta
        clave = prompt("error, ingrese el número clave.");   
        }
        console.log("Clave correcta. Bienvenido");

}//FIN DE LA FUNCIÓN
