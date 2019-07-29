function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var promedio; 
	var numero;

	do 
	{
		numero=parseInt(prompt("Ingrese un numero"));
		respuesta=prompt("desea ingresar otro numero");
		acumulador=acumulador+numero;
		contador++;

	} while(respuesta=='si');
	promedio=acumulador/contador;
	

	/*
	while(respuesta=="si")
	{
		numero=prompt("introduzca numero");
		numero=parseFloat(numero);
		acumulador = acumulador + numero; 
		contador++;
		respuesta=prompt("si desea continuar, introduzca si, de lo contrario introduzca cualquier botón");
	}

	promedio=(acumulador/contador); 
	alert("el promedio es: "+promedio);
	*/
document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;


}//FIN DE LA FUNCIÓN