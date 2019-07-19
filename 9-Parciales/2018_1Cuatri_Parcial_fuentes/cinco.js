function mostrar()
{
    var planeta;
    var mensaje;
    planeta = prompt("Ingrese un planeta del sistema solar");
    switch(planeta) 
    {
        case "tierra":
            mensaje = "acá vivimos";
            break;
        case "mercurio":
        case "venus":
        case "marte":
            mensaje = "acá hace más calor";
            break;
        case "neptuno":
        case "jupiter":
        case "urano":
        case "saturno":
            mensaje = "acá hace más frío";
            break;
        default:
            mensaje = "no es un planeta válido";
            break;
    } 
    alert(mensaje);

    /*  Versión que no ahorra alert:
        switch(planeta) {
        case "tierra":
            alert("acá vivimos");
            break;  

        case "mercurio":
        case "venus":
        case "marte":
            alert("acá hace más calor");
            break;

        case "neptuno":
        case "jupiter":
        case "urano":
        case "saturno":
            alert("acá hace más frío");
            break;
        default:
            alert("no es un planeta válido");
            break;
    } 
    */
}
