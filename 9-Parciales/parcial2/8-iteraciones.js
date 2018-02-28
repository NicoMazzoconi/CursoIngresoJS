//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*
Pedir nombre de un animal, el peso de este animal(validar > 0), la temperatura del habitad donde vivie(-40 a 40)
Informar la cantidad de temperaturas pares, cantidad de temperaturas impares, el nombre del animal mas pesado, 
el nombre del animal menos pesado, la cantidad de animales cuyo habitad tiene menos de 0 grados, el promedio
de peso de todos los animales, la temperatura maxima y la minima ingresada
*/
function Mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var respuesta = "si";
	var tempPares = 0;
	var tempImpares = 0;
	var masPeso;
	var menosPeso;
	var cantAnimalesMenosCero = 0;
	var suma = 0;
	var promedio;
	var contador = 0;
	var tempMax;
	var tempMin;
	var nombrePesado;
	var nombreLiviano;

	while(respuesta != "no")
	{
		contador++;

		//animal
		animal = prompt("Ingrese el nombre de un animal");

		//peso
		peso = prompt("Ingrese el peso del animal")
		peso = parseInt(peso);

		while(peso <= 0 || isNaN(peso))
		{
			peso = prompt("Ingrese un peso valido para animal")
			peso = parseInt(peso);
		}
		//fin peso

		//temperatura
		temperatura = prompt("Ingrese la temperatura(-40 a 40)");
		temperatura = parseInt(temperatura);

		while(temperatura < -40 || temperatura > 40 || isNaN(temperatura))
		{
			temperatura = prompt("Ingrese la temperatura(-40 a 40)");
			temperatura = parseInt(temperatura);
		}
		//fin temperatura

		//Asignamos los primeros valores con el contador en 1
		if(contador == 1)
		{
			tempMax = temperatura;
			tempMin = temperatura;
			masPeso = peso;
			menosPeso = peso;
			nombreLiviano = animal;
			nombrePesado = animal;
		}
		//Fin valores contador 1

		//Temperaturas pares e impares
		if(temperatura % 2 == 0 && temperatura !=0)
		{
			tempPares++;
		}
		else
		{
			if(temperatura != 0)
			{
				tempImpares++;
			}
		}
		//Fin temperaturas pares e impares

		//Animal mas pesado y mas liviano
		if(peso < menosPeso)
		{
			menosPeso = peso;
			nombreLiviano = animal;
		}
		else
		{
			if(peso > masPeso)
			{
				masPeso = peso;
				nombrePesado = animal;
			}
		}
		//Fin animal mas pesado y mas liviano

		//Cantidad de animales en menos 0
		if(temperatura < 0)
		{
			cantAnimalesMenosCero++;
		}
		//Fin animales bajo 0

		//Temperatura maxima y minima
		if(temperatura < tempMin)
		{
			tempMin = temperatura;
		}
		else
		{
			if(temperatura > tempMax)
			{
				tempMax = temperaturaM
			}
		}

		//Respuesta
		respuesta = prompt("Seguir agregando animales?");

		//suma
		suma = suma + peso;
	}

	promedio = suma / contador;
	
	document.write("Cantidad de temperaturas pares= " + tempPares);
	document.write("<br> Cantidad de temperatura impares= " + tempImpares);
	document.write("<br>El animal mas pesado fue " + nombrePesado + " con " + masPeso + "kg");
	document.write("<br>El animal menos pesado fue " + nombreLiviano + " con " + menosPeso + "kg");
	document.write("<br>Cantidad de animales en habitad bajo cero= " +cantAnimalesMenosCero);
	document.write("<br>El promedio de peso es= " + promedio);
	document.write("<br>Temperatura maxima= " + tempMax);
	document.write("<br>Temperatura minima= " + tempMin);


}

