function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var nota;
	var resultado;
	nota = Math.floor(Math.random()*(10-1)+1);
	
	if(nota >= 9) { 
		// Para notas 9 y 10 muestro el mensaje: EXCELENTE
		resultado = "EXCELENTE";
	}
	else {
		// Para notas menores a 9, dos casos: "APROBÓ" o "Vamos, la proxima se puede" (notas menores a 4)
		
		if(nota >= 4) {
			// APROBÓ con nota entre 4 y 8
			resultado = "APROBÓ";
			}

		else
			//Los restantes que no aprobaron y muestro mensaje de consuelo
			resultado = "Vamos, la proxima se puede";

	}
	alert("Nota: " + nota + ". " + resultado); 

	/* Otra forma:

	if(nota >=9) {
		alert("Excelente");
	}
		else {
			if(nota>=4) {
				alert("Aprobo");
			}
				else {
					alert("Vamos, la próxima se puede");
				}	
		}
		*/

}//FIN DE LA FUNCIÓN