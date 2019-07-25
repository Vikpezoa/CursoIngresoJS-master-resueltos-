function mostrar()
{
	var numero;
	var promedio;
	var contador=0;
	var acumulador=0;
	var respuesta="si";

	while(respuesta=="si")
	{
		numero=parseFloat(prompt("Ingrese un número"));
		respuesta=prompt("Desea continuar? (no) para salir");
		acumulador=acumulador+numero;
		contador++;
	}
	promedio = acumulador / contador;



document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;

}//FIN DE LA FUNCIÓN