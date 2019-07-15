function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch(mes) {
    case "Febrero":
        alert("Este mes no tiene más de 29 días.");
        break;
    case "Enero": 
    case "Marzo":
    case "Abril": 
    case "Mayo":
    case "Junio":  
    case "Julio":
    case "Agosto":
    case "Septiembre": 
    case "Octubre":
    case "Diciembre":    
    case "Noviembre":
        alert("Este mes tiene 30 días o más");
        break;
    default:
        alert("Valor no válido");

}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN