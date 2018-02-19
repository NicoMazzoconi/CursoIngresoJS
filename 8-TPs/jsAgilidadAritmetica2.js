/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var numero1;
var numero2;
var operacion;
var verdadero;
var tiempo;
function comenzar()
{
	
	numero1 = Math.floor((Math.random()*10)+1);
	numero2 = Math.floor((Math.random()*10)+1);
	operacion = Math.floor((Math.random()*4)+1);
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	
	switch (operacion)
	{
		case 1	: //suma
			document.getElementById('Operador').value = "+";
			verdadero = numero1 + numero2;
		break;

		case 2	: //resta
			document.getElementById('Operador').value = "-";
			verdadero = numero1 - numero2;
		break;

		case 3	: //multiplicar
			document.getElementById('Operador').value = "*";
			verdadero = numero1 * numero2;
		break;

		case 4	: //dividir
			document.getElementById('Operador').value = "/";
			verdadero = numero1 / numero2;
		break;
	}

	document.getElementById('PrimerNumero').value = numero1;
	document.getElementById('SegundoNumero').value = numero2;

	tiempo = 0;
	tiempo = setInterval(Responder(), 4000);


}//FIN DE LA FUNCIÓN
function Responder()
{
	
	respuesta = document.getElementById('Respuesta').value;
	

	if (verdadero == respuesta)
	{
		alert("Perfecto");
	}
	else
	{
		alert("Equivocado, el resultado es: " + verdadero);
	}


}
