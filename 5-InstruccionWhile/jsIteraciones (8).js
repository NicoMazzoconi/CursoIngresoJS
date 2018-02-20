function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta;

	while(respuesta != "no")
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		if(numero>0){
			positivo = positivo + numero;
		}
		else{
			negativo = negativo * numero;
		}


		respuesta = prompt("¿Seguir acumulando?");

	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN