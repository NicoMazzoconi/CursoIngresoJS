function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var nota;

	numero = Math.floor((Math.random() * 10) + 1);
	nota = parseInt(numero);

	if(nota<4){
		alert(nota+" Vamos la proxima se puede.");
	}
	else{
			if(nota<9)
			{
				alert(nota+" APROBO");
			}
	
			else
			{
				alert(nota+" EXELENTE");
			}
	}
}//FIN DE LA FUNCIÓN