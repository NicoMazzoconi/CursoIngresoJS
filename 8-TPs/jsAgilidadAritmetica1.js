/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numero1;
var numero2;
var operacion;
var verdadero;
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



}//FIN DE LA FUNCIÓN
function Responder()
{

	respuesta = document.getElementById('Respuesta').value;
	

	if (verdadero == respuesta)
	{
		alert("Perfecto");
		comenzar();
	}
	else
	{
		alert("Equivocado, el resultado es: " + verdadero);
	}


}//FIN DE LA FUNCIÓN
