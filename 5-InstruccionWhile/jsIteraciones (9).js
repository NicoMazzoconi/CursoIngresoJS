function Mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var respuesta;
	var numero;

	while (respuesta!='no')
	{
		contador++;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		if(contador==1){
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}

			if(numero<minimo)
			{
				minimo=numero;
			}

		}
		
		respuesta = prompt("¿Desea seguir acumulando?");
	}

	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;




}//FIN DE LA FUNCIÓN