function Mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");

	while (numero < 0 || numero > 10)
	{
		numero = prompt("ingrese un numero entre 0 y 10.");
	}

	/*while (numero > 10)
	{
		numero = prompt("No puede ser mayor a 10, ingrese un numero entre 0 y 10 ");
	}*/

	document.getElementById('Numero').value = numero;

}//FIN DE LA FUNCIÓN