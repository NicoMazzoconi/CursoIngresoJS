function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;

	while(respuesta != "no")
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		contador++;
		acumulador = acumulador + numero;

		respuesta = prompt("¿Seguir acumulando?");

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN