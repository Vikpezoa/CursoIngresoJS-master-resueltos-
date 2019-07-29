function mostrar()
{

	var numero;
	var contador=0;
	var acumuladorNegativo=1;
	var acumuladorPositivo=0;
	var respuesta="si";
	var positivo;
	var negativo;

	while(respuesta=="si")
	{
		numero=prompt("Ingrese numero positivo o negativo");

		if(numero<0)
		{
			numero=parseFloat(numero);
			acumuladorNegativo=acumuladorNegativo*numero;
		}
		else
		{
			numero=parseFloat(numero);
			acumuladorPositivo=acumuladorPositivo+numero;
		}
		respuesta=prompt("Para continuar presione si")
	}

alert("El resultado del producto es: "+acumuladorNegativo);
alert("El resultado de la suma: "+acumuladorPositivo);

document.getElementById("suma").value=positivo;
document.getElementById("producto").value=negativo;


	/*
	var contador=0;
	var respuesta="si";
	var acumuladorNegativo=1;
	var acumuladorPositivo=0;
	var numero;

	while(respuesta=="si")
	{
		numero= prompt("introduzca un numero");
		if (numero <0)
		{
			numero=parseFloat(numero);
			acumuladorN=acumuladorNegativo*numero;
		}
		else 
		{
			numero=parseFloat(numero);
			acumuladorP=acumuladorPositivo+numero; 
		}
		respuesta = prompt("si desea continuar, presione si");

	}
	alert("el resultado del producto es "+ acumuladorNegativo);
	alert("el resultado de la sumatoria es " + acumuladorPositivo);

	*/

}//FIN DE LA FUNCIÓN