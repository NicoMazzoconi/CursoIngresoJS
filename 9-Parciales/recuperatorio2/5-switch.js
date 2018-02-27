//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mesDelAño;

	mesDelAño = prompt("Ingrese el mes del año");
	
	switch(mesDelAño)
	{
		case "Enero"	:
		case "Febrero"	:
		alert("Veranito");
		break;

		default	:
		alert("Extraño enero y febrero");
		break;
	}
	
}

