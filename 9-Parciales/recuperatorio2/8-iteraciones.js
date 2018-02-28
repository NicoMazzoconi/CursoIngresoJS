//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeros;
	var respuesta = "si";
	var cantPares = 0;
	var suma = 0;
	var cantidad = 0;
	var promedio;
	var maximo;
	var minimo;

	while(respuesta !="no")
	{
		cantidad++;

		numeros = prompt("Ingrese un numero positivo");
		numeros = parseInt(numeros);

		while(numeros < 0 || isNaN(numeros))
		{
			numeros = prompt("Ingrese un numero valido");
			numeros = parseInt(numeros);
		}

		respuesta = prompt("Seguir agregando numeros?");

		suma = suma + numeros;

		if(numeros % 2 == 0 && numeros != 0)
		{
			cantPares++;
		}

		if(cantidad == 1)
		{
			maximo = numeros;
			minimo = numeros;
		}
		else
		{
			if(numeros < minimo)
			{
				minimo = numeros;
			}
			else
			{
				if(numeros > maximo)
				{
					maximo = numeros;
				}
			}
		}
	}
	
	promedio = suma / cantidad;

	document.write("Ingreso " + cantPares + " numero pares.");
	document.write("<br>El promedio de todos los numeros es " + promedio);
	document.write("<br>La suma de todos los numeros es " + suma);
	document.write("<br>El maximo es " + maximo + "<br>El minimo es " + minimo);
}

