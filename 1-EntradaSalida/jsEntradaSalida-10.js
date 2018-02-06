/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var actual;
	var reducido;

	actual = document.getElementById('importe').value;
	actual = parseInt(actual);

	reducido = actual * 0.75;
	document.getElementById('resultado').value = reducido;

}
