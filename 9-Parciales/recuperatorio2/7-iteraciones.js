//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var alumnos;
	var sexo;
	var notas;
	var suma = 0;
	var minima;
	var varonsMasSeis = 0;
	var promedio;

	for(alumnos = 0; alumnos < 6;)
	{
		alumnos++;

		notas = prompt("Ingrese la nota del alumno " + alumnos);

		while(notas < 0 || notas > 10 || isNaN(notas))
		{
			notas = prompt("Ingrese la nota valida del alumno " + alumnos);
		}

		sexo = prompt("Ingrese el sexo del alumno " + alumnos + " con m ó f.");

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese el sexo valido del alumno " + alumnos + " con m ó f.");

		}

		notas = parseInt(notas);

		suma = suma + notas;

		if(alumnos == 1)
		{
			minima = notas;
		}
		else
		{
			if(notas < minima)
			{
				minima = notas;
			}
		}

		if(notas > 5 && sexo == "m")
		{
			varonsMasSeis++;
		}
	}

	promedio = suma / alumnos;

	document.write("Promedio de las notas es " + promedio);
	document.write("<br>La nota mas baja fue " + minima);
	document.write("<br>La cantidad de varones que aprobar con 6 o mas es " + varonsMasSeis);

	
}

