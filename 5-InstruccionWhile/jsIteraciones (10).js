function mostrar()
{
var contador=0;
var contadorPositivos=0;
var contadorNegativos=0;
var contadorCeros=0;
var contadorPares=0;
var acumuladorPositivos=0;
var acumuladorNegativos=0;
// si no lo inicializo me tirará NaN
var promedioPositivos;
var promedioNegativos;
// no se debe inicializar (igualar a 0) porque no lo requiere en este caso
var numero;
//declarar contadores y variables
var respuesta=true;                                                                  

while(respuesta==true) {
	numero=prompt("ingrese un numero: ");
	numero=parseInt(numero);
	
	if(numero>0)
	{
		contadorPositivos++;
		acumuladorPositivos*=0;
	}
	else                               
		{
		if(numero<0) 
		{
			contadorNegativos++;
			acumuladorNegativos+=numero;
		}                                          
	}
}

if(contadorPositvios!=0)
{ 
promedioPositivos = acumuladorPositivos/contadorPositivos
}
else  
{
	promedioPositivos="No se ingresaron numeros positvos"
}

if(contadorNegativos!=0)
{ 
promedioNegativos = acumuladorNegativos/contadorNegativos
}
else
{
	promedioNegativos="No se ingresaron numeros negativos"
}

document.write("1. suma de positivos: " + acumuladorPositivos)
document.write("suma de negativos: " + acumuladorNegativos)
document.write("cantidad de positivos: " + contadorPositivos)
document.write("cantidad de positivos: " + contadorPositivos)
 


/*
	var contador=0;
	var numero;
	var numeroDos;
	var suma;
	alert(numero);

	numeroDos=12;
	suma=numero*numeroDos;
	alert(suma);
	suma=3; //bien
	suma="3"; //bien
	suma="lala"; //error porque no es número
	suma="ashas0"; //lo mismo, error

	while((isNaN(suma)||(suma<0)||(suma>10)))
	{
			alert("error");
			suma=prompt("error, reingrese solo numeros");
	}
	alert("ingreso correcto " +suma);

	while(sexo!="f" || sexo!="m")
	{
		
	}
	*/
	/*

	if(isNaN(suma))
	{
		alert("error");
	}else{
		alert("bien");
	}
	*/


	//declarar contadores y variables 
	/*
	var respuesta="si";

	while(respuesta!="no")
	{
		
	
	}
*/
}//FIN DE LA FUNCIÓN