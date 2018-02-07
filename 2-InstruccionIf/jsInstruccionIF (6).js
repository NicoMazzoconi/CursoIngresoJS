function Mostrar()
{
//tomo la edad  
	var edad

	edad = document.getElementById('edad').value;

	if(edad < 13){
		alert("Es niño.");
	}
	else 
	{
		if(edad < 18){
		alert("Es adolecente");
		}
		else{
		alert("Es mayor");
		}
	}
}//FIN DE LA FUNCIÓN