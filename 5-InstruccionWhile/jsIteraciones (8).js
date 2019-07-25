function mostrar()
{
	var numero;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta="si";

	while(respuesta=="si")
	{
		numero=parseFloat(prompt("Ingrese un numero"));
		respuesta=prompt("Si desea ingresar otro numero escriba (si)");
		contador++

	}
	positivos=acumulador+1;
	negativos=acumulador*contador;


document.getElementById("suma").value=positivo;
document.getElementById("producto").value=negativo;

}//FIN DE LA FUNCIÓN