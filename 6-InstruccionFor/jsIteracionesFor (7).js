function Mostrar()
{
	var numero;
	var i;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	for(i = 0; i < numero; i++)
	{
		if(numero % i == 0)
		{
			document.write("<br>" + i);
		}
	}



}//FIN DE LA FUNCIÓN