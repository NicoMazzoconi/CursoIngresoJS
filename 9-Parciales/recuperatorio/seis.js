function Mostrar()
{
	var contenedor;
	var contenedorMasPesado;
	var contenedorMasLiviano;
	var peso;
	var maximo;
	var minimo;

	for(contenedor = 0; contenedor < 50;)
	{
		contenedor++;

		peso = prompt("Ingrese el peso del contenedor " + contenedor);

		while(peso < 0 || isNaN(peso))
		{
			peso = prompt("Ingrese un peso valido para el contenedor " + contenedor);
		}
		
		peso = parseInt(peso);

		if(contenedor == 1)
		{
			maximo = peso;
			minimo = peso;
			contenedorMasLiviano = contenedor;
			contenedorMasPesado = contenedor;
		}

		if(peso < minimo || peso == "0")
		{
			minimo = peso;
			contenedorMasLiviano = contenedor;
		}
		else
		{
			if(peso > maximo)
			{
				maximo = peso;
				contenedorMasPesado = contenedor;
			}
		}
	}

	document.write("El contenedor mas pesado fue el " + contenedorMasPesado + " con " + maximo + "kg.");
	document.write("<br>El contenedor mas liviano fue el " + contenedorMasLiviano + " con " + minimo + "kg.");

}

