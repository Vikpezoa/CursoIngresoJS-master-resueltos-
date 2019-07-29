function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var promedio;
	
	while(contador<5)
	{
		numero=prompt("ingrese numero");
		numero=parseFloat(numero);
		acumulador=numero + acumulador;
		contador++;

	}
	promedio=acumulador/5;
	alert("el promedio es: " + promedio);

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN