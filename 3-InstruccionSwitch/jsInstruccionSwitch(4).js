function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;
switch(mes) {
    case "Febrero":
        alert("Este mes tiene 28 días");
        break;
    case "Enero":
    case "Marzo":
    case "Agosto":
    case "Diciembre":
    case "Abril":
        alert("Este mes tiene 30 días");
        break;
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Noviembre":
    case "Septiembre":
    case "Octubre":
        alert("Este mes tiene 31 días");
        break;
    default:
        alert("Valor no válido");
    
}

	
	



}//FIN DE LA FUNCIÓN