function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = prompt("Ingrese el primer numero");
	numeroDos = prompt("Ingrese el segundo numero");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	if(suma < 0)
	{
		document.write("La suma es negativa " + suma);
	}
	else
	{
		if(suma > 0)
		{
			document.write("La suma es positiva " +suma);
		}
		else
		{
			document.write("La suma da 0");
		}
	}

}
