function Mostrar()
{
	var importe;
	var importeFinal;

	importe = prompt("Ingrese el importe en $");

	importeFinal = importe * 0.75;

	document.getElementById('importeFinal').value = importeFinal;
}
