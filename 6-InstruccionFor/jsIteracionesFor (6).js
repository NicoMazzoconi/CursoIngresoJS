function Mostrar()
{

	var i;
	var numero;
	var cantidadPar;

	numero = prompt("");
	numero = parseInt(numero);

	for(i = 1; i < numero;)
	{
		i++
		if(i % 2 ==0)
		{
			document.write("<br>" + i);
		}
	}

	
}//FIN DE LA FUNCIÓN