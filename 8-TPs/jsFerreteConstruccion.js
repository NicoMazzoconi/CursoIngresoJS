/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
 	var ancho;
 	var largo;
 	var calculo;

 	ancho = parseInt(document.getElementById('Ancho').value);
 	largo = parseInt(document.getElementById('Largo').value);
 	calculo = (ancho + largo) * 2;

 	alert("Se necesita " +(calculo * 3) + " metros de alambre.")

}
/////////////////////////////////////
function Circulo () 
{
	var radio;
	var calculo;

	radio = parseInt(document.getElementById('Radio').value);
	calculo = radio * 2;

	alert("Se necesita " +(calculo * Math.PI));

}
/////////////////////////////////////
function Materiales () 
{
	var ancho;
	var largo;
	var cemento;
	var cal;

	ancho = parseInt(document.getElementById('Ancho').value);
 	largo = parseInt(document.getElementById('Largo').value);
 	cemento = ((ancho * largo)*2);
	cal = ((ancho * largo))*3;

	alert("Se necesitan " + cemento + " bolsas de cementa y " + cal + " bolsas de cal.");
}