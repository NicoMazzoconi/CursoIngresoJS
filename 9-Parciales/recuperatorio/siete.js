function Mostrar()
{
	var edad;
	var sexo;
	var promedio = 0;
	var minima;
	var varonesMasDeVeinte = 0;
	var personas;

	for(personas = 0; personas < 100;)
	{
		personas++;

		edad = prompt("Ingrese la edad de la persona " + personas);
		edad = parseInt(edad);

		while(edad < 0 || edad > 100 || isNaN(edad))
		{
			edad = prompt("Ingrese la edad validad de la persona " +personas);
			edad = parseInt(edad);
		}


		sexo = prompt("Ingrese el sexo con f ó m, de la persona " + personas);

		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Ingrese el sexo valido con f ó m, de la persona " + personas);
		}

		promedio = promedio + edad;

		if(personas == 1)
		{
			minima = edad;
		}

		if(edad < minima)
		{
			minima = edad;
		}

		if(edad > 19 && sexo == "m")
		{
			varonesMasDeVeinte++;
		}
	}

	promedio = promedio / personas;

	alert("El promedio de edades es " + promedio);
	alert("La edad mas baja es " + minima);
	alert("La cantidad de varones que su edad es mayor o igual a 20 es " + varonesMasDeVeinte);
}
