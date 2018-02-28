function Mostrar()
{
	var numero;
	var respuesta = "si";
	var cantPar = 0;
	var suma = 0;
	var contador = 0;
	var promedio;
	var maximo;
	var minimo;

	while(respuesta != "no")
	{
		contador++;

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while(numero < 0 || isNaN(numero))
		{
			numero = prompt("Ingrese un numero valido");
			numero = parseInt(numero);
		}
		

		respuesta = prompt("Quiere seguir agregando numeros?");

		if(numero % 2 == 0)
		{
			cantPar++;
		}

		suma = suma + numero;

		if(contador == 1)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if(numero < minimo)
			{
				minimo = numero;
			}
			else
			{
				if(numero > maximo)
				{
					maximo = numero;
				}
			}
		}
	}

	promedio = suma / contador;

	document.write("La cantidad de pares= " + cantPar);
	document.write("<br> Promedio de todos los numeros ingresados= " + promedio);
	document.write("<br> La suma de todos los numeros ingresados= " + suma);
	document.write("<br> El numero maximo= " + maximo);
	document.write("<br> El numero minimo= " + minimo);
}
