function Mostrar()
{
	var numero;
	var i = 1;
	var a = 1;

	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	for(; i < numero; i++)
	{
		if(numero % i == 0)
		{
			a++;
		}
	}

	if(a == 2)
		{
			alert("Es primo");
		}
		else
		{
			alert("No es primo");
		}


}//FIN DE LA FUNCIÓN