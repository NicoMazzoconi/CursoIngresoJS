//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var precio;
	var precioFinal;

	precio = prompt("Ingrese el precio");

	precioFinal = precio * 1.21;

	document.getElementById('importe').value = precioFinal;
	
}

