function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

		var random = Math.floor(Math.random()*(10-1)+1);
		alert("Número aleatorio entre 0 y 10: "+ random);




	/*
	
	Anterior usando otra fc: var random = Math.round(Math.random()*10);
	
	Error: uso de función y demás que no corresponden. Debía usar Math.round

	var número;
	número=document.getElementById("FormIngreso").value;
	
	switch(número); {
		case 1: 
		{ 
			alert("1");
			break;
		}
		case 2: 
		{
			alert("2");
			break;
		}
	}
	*/



}//FIN DE LA FUNCIÓN