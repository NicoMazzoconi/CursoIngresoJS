function Mostrar()
{
	var mesDelAño;

	mesDelAño = prompt("Ingrese el mes del año");

	switch(mesDelAño)
	{
		case "Diciembre"	:
		alert("Se vienen las fiestas");
		break;

		case "Enero"	:
		alert("Comienza el año");
		break;

		default	:
		alert("No es enero, ni diciembre");
		break;
	}
}
