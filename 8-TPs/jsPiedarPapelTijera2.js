var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var eleccion;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.floor((Math.random()*3)+1);
	console.log(eleccionMaquina);



}//FIN DE LA FUNCIÓN
function piedra()
{
	eleccion = 1;

	switch(eleccionMaquina)
	{
		case 1	:
			alert("Empataste");
			ContadorDeEmpates++;
			mostarResultado()
		break;

		case 2	:
			alert("Perdiste");
			ContadorDePerdidas++;
			mostarResultado()
		break;

		case 3 :
			alert("Ganaste");
			ContadorDeGanadas++;
			mostarResultado()
		break;
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	eleccion = 2;

	switch(eleccionMaquina)
	{
		case 2	:
			alert("Empataste");
			ContadorDeEmpates++;
			mostarResultado()
		break;

		case 3	:
			alert("Perdiste");
			ContadorDePerdidas++;
			mostarResultado()
		break;

		case 1 :
			alert("Ganaste");
			ContadorDeGanadas++;
			mostarResultado()
		break;
	}
}//FIN DE LA FUNCIÓN
function tijera()
{
	eleccion = 3;

	switch(eleccionMaquina)
	{
		case 3	:
			alert("Empataste");
			ContadorDeEmpates++;
			mostarResultado()
		break;

		case 1	:
			alert("Perdiste");
			ContadorDePerdidas++;
			mostarResultado()
		break;

		case 2 :
			alert("Ganaste");
			ContadorDeGanadas++;
			mostarResultado()
		break;
	}
}//FIN DE LA FUNCIÓN

function mostarResultado()
{

	document.getElementById('ganadas').value = ContadorDeGanadas;
	document.getElementById('empatadas').value = ContadorDeEmpates;
	document.getElementById('perdidas').value = ContadorDePerdidas

	comenzar()
}