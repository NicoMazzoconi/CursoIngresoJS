//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;

	numeroUno = prompt("Ingrese el primer numero");
	numeroDos = prompt("Ingrese el segundo numero");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	if(numeroUno == numeroDos)
	{
		alert("Son iguales los multiplico " + numeroUno * numeroDos);
	}
	else
	{
		if(numeroUno > numeroDos)
		{
			alert("El primero es mayo entonces los resto " + (numeroUno - numeroDos));
		}
		else
		{
			alert("El segundo es mayor entonces los sumo " + (numeroUno + numeroDos));
		}
	}
}

