//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*
Se ingresan dos numeros, si son iguales se concatenan, si el primero es mayo que el segundo se multiplican
si el segundo es mas grande se resta, si la multiplicacion da un numero par ademas de mostrar el resutado 
se muestra el mensaje es par
*/
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resutado;
	
	numeroUno = prompt("Ingrese el primer numero");
	numeroDos = prompt("Ingrese el segundo numero");

	if(numeroUno == numeroDos)
	{
		resutado = numeroUno + numeroDos;
	}
	else
	{
		numeroUno = parseInt(numeroUno);
		numeroDos = parseInt(numeroDos);

		if(numeroUno > numeroDos)
		{
			resutado = numeroUno * numeroDos;
		
			if(resutado % 2 == 0 && resutado != 0)
			{
				resutado = resutado + " es par";
			}
	
		}
		else
		{
			if(numeroUno < numeroDos)
			{
			resultado = (numeroUno - numeroDos);
			}
		}
	}

		alert(resutado);

}

