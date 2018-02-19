/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var numero;

function comenzar()
{
	eleccionMaquina = Math.floor((Math.random()*3)+1);
	console.log(eleccionMaquina);
	
}

function piedra()
{
	numero = 1;
	console.log(numero);

	if(eleccionMaquina == 2)
	{
		alert("Perdiste");
	}
	else
	{
		if(eleccionMaquina == 1)
		{
			alert("Empato");
		}
		else
		{
			alert("Ganaste!");
		}
	}

}

function papel()
{
	numero = 2;
	console.log(numero);

	switch (eleccionMaquina)
	{
		case 1	:
		alert("Ganaste!");
		break;

		case 2	:
		alert("Empato");
		break;

		case 3	:
		alert("Perdiste");
		break
	}


}

function tijera()
{
	numero = 3;
	console.log(numero);

	switch (eleccionMaquina)
	{
		case 1	:
		alert("Perdiste");
		break;

		case 2	:
		alert("Ganaste");
		break;

		case 3	:
		alert("Empato");
		break;
	}
}