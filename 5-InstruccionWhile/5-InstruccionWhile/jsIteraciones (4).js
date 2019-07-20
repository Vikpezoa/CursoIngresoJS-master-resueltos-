function mostrar()
{
	var numero = prompt("ingrese un numero entre 0 y 10");
	while(!(numero>0 && numero<10)) 
		// while(numero<0 OR numero>10)
		{
		numero=prompt("error, ingrese numero entre 0 y 10");
		}
		console.log("correcto");

	/*
	var numero;
	while(!(numero<10)) 
	{
	console.log("correcto");
	numero=prompt("ingrese un número entre 0 y 10");
	*/
	}

//FIN DE LA FUNCIÓN
// -1 error
//	5 bien