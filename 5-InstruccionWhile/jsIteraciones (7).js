function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var promedio; 
	var numero;

	while(respuesta=="si")
	{
		numero=prompt("introduzca numero");
		numero=parseFloat(numero);
		acumulador = acumulador + numero; 
		contador++;
		respuesta=prompt("si desea continuar, introduzca si, de lo contrario introduzca cualquier botón");
	}

	promedio=(acumulador/contador); 
	alert ("el promedio es: "+ promedio);
document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN