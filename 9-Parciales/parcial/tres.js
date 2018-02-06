function Mostrar()
{
	var largo;
	var anch;
	var total;
	var cantidad;
	
	largo = document.getElementById('alrgo').value;
	anch = document.getElementById('ancho').value;
	largo = largo * 2;
	anch = anch * 2;

	total = largo + anch;
	cantidad = total * 3;

	alert("Se necesita " +cantidad +" metros de alambre.");
}
