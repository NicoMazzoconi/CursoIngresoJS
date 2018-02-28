//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var dias;
	var importe;
	var maximo;
	var minimo;

	for(dias = 0; dias < 7;)
	{
		dias++;

		importe = prompt("Ingrese los importes del dia " + dias);
		importe = parseInt(importe);

		while(importe<0 || isNaN(importe))
		{
			importe = prompt("Ingrese los importes validos del dia " + dias);
			importe = parseInt(importe);
		}
		
		

		if(dias == 1)
		{
			minimo = importe;
			maximo = importe;
		}
		else
		{
			if(importe < minimo)
			{
				minimo = importe;
			}
			else
			{
				if(importe > maximo)
				{
					maximo = importe;
				}
			}
		}
	}


	document.write("La venta maxima fue " + maximo + "<br>La venta minima fue " + minimo);	
}

