function Mostrar()
{
	var contador;
	var contadorPos = 0;
	var contadorNeg = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var contadorImpares = 0;
	var contador50 = 0;


	for (contador = -100; contador <= 100; contador++)
	{
		if(contador<0)
		{
			contadorNeg++;
		}
		else
		{
			if(contador>0)
			{
				contadorPos++;
			}
			else
			{
				contadorCeros++;
			}
		}

		if(contador % 2 ==0 && contador != 0)
		{
			contadorPares++;
		}
		else
			 {
			 	if(contador != 0)
			 	{
			 		contadorImpares++;
			 	}		 	
			 }	

		switch(contador)
		{
			case 50	:
				contador50++;
			break;
		}

	}


	document.write("<br>Cantidad negativos = " + contadorNeg + "<br>Cantidad positivos = " + contadorPos + "<br>Cantidad de ceros = " + contadorCeros + "<br>Cantidad de pares = " + contadorPares + "<br>Cantidad de impares = " + contadorImpares + "<br>Contador de 50 = " + contador50);
}