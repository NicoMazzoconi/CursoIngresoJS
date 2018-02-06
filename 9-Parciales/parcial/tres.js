function Mostrar()
{
	var largo;
	var anch;
	var total;
	
	largo = document.getElementById('alrgo').value * 2;
	anch = document.getElementById('ancho').value * 2;

	total = largo + anch;

	alert("Se necesita " +total * 3 +" metros de alambre.");
}
