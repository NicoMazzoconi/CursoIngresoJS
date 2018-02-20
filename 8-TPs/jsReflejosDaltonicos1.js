/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
var tiempoFinal;
var color;
function comenzar()
{

	ColorSecreto = Math.floor((Math.random()*6)+1);
	console.log(ColorSecreto);
	
	switch (ColorSecreto)
	{
		case 1	:
		color = document.getElementById('ColorElejido');
		color.style.background = "red";
		break;

		case 2	:
		color = document.getElementById('ColorElejido');
		color.style.background = "blue";
		break;

		case 3	:
		color = document.getElementById('ColorElejido');
		color.style.background = "brown";
		break;

		case 4	:
		color = document.getElementById('ColorElejido');
		color.style.background = "yellow";
		break;

		case 5	:
		color = document.getElementById('ColorElejido');
		color.style.background = "green";
		break;

		case 6	:
		color = document.getElementById('ColorElejido');
		color.style.background = "skyblue";
		break;

	}
	
	tiempoInicio =  new Date();
	tiempoInicio = tiempoInicio.getTime();


}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	this.ColorElejido = colorParametro;

	switch(colorParametro)
	{
		case "rojo"	:
		ColorElejido = 1;
		break;

		case "azul"	:
		ColorElejido = 2;
		break;

		case "marron"	:
		ColorElejido = 3;
		break;

		case "amarillo"	:
		ColorElejido = 4;
		break;

		case "verde"	:
		ColorElejido = 5;
		break;

		case "celeste"	:
		ColorElejido = 6;
		break;
	}

	if (ColorElejido == ColorSecreto)
	{
		alert("Ganaste");
	}
	
	tiempoFinal = new Date();
	tiempoFinal = tiempoFinal.getTime();
	resultado = (tiempoFinal-tiempoInicio);
	alert("su tiempo fue: "+ (resultado/1000) +" segundos.");

}//FIN DE LA FUNCIÓN
