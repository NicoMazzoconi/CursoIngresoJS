function Mostrar()
{

	var contador=0; 
	var respuesta;
	var numero;
	var negativos = 0;
	var positivos = 0;
	var canPos = 0;
	var canNeg = 0;
	var canCer = 0;
	var canPar = 0;
	var promediopos;
	var promedioneg;

	while(respuesta!="no")
	
	{
		contador++;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		if(numero<0)
		{
			canNeg++;
			negativos = negativos + numero;
		}
		else
		{
			canPos++;
			positivos = positivos + numero;
		}

		if (numero ==0)
		{
			canCer++;
		}

	//	if(numero % 2 = 0)
	//	{
	//		canPar++;
	//	}
		
		respuesta = prompt("Desea ingresar mas numeros?");
		
	
	}

	promediopos = positivos / canPos;
	promedioneg = negativos / canNeg;
	document.write("Promedio positivo= " + promediopos + " Promedio negativo= " + promedioneg + " Cantidad postiviso= " + canPos + " Cantidad negativos= " + canNeg);



}//FIN DE LA FUNCIÓN