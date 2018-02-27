//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base;
	var perimetro;

	base = document.getElementById('lado').value;

	if(!isNaN(base) && base > 0)
	{
		perimetro = base * 3;
		alert("El perimetro es " + perimetro);
	}
	else
		alert("Base no valida")



	
}

