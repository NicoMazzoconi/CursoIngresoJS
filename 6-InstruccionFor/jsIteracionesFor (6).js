function Mostrar()
{

	var i;
	var numero;
	var cantidadPar;

	numero = prompt("");
	numero = parseInt(numero);

	while(i != numero)
	{
		if (i % 2 == 0)
		{
			cantidadPar++;
			alert(i);
		}
	}

	
}//FIN DE LA FUNCIÓN