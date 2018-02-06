/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var dato;
	dato = prompt("Ingrese su dato","Su dato");
	document.getElementById('elNombre').value = dato

}

