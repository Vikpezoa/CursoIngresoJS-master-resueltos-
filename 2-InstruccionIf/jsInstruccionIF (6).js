function mostrar()
{
    //tomo la edad  
    var edad;
    var resultado;

    edad = document.getElementById("edad").value;

    if (edad >= 18)  {
        //Es adulto
        resultado = "Es adulto";
    }
    else
    { 
        //Es adolescente o niño
        if(edad>=13)
        {
            //Es adolescente
            resultado = "Es adolescente";
         }
        else
        { 
            //Es niño
            resultado = "Es niño";
        }
    }
     alert(resultado);


    /*
    if(edad >= 18)
    {
        alert("La persona es mayor de edad");
    }
    if(edad >= 13 && edad <= 17) 
    {
        alert("La persona es adolescente");
    }
    if(edad <13 )
    {
        alert(" La persona es niño/niña");
    }
    */ 

}//FIN DE LA FUNCIÓN