/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto = Math.floor((Math.random()*100)+1);
	 console.log(numeroSecreto);
	
	 contadorIntentos = 0;
	 document.getElementById('intentos').value = contadorIntentos;
}

function verificar()
{
	
	var numero;
	numero = document.getElementById('numero').value
	contadorIntentos = parseInt(contadorIntentos);
	contadorIntentos = contadorIntentos + 1;
	document.getElementById('intentos').value = contadorIntentos;

	switch(contadorIntentos)
	{

		case 1	:
		if (numeroSecreto==numero)
		{
			alert("Usted es un Psíquico");
		}
		else
			{
				if(numeroSecreto>numero)
				{
					alert("Se quedo corto")
				}
				else
				{
					alert("Se paso de largo")
				}
			}
		break;

		case 2	:
		if (numeroSecreto==numero)
		{
			alert("Excelente percepcion");
		}
		else
			{
				if(numeroSecreto>numero)
				{
					alert("Se quedo corto")
				}
				else
				{
					alert("Se paso de largo")
				}
			}
		break;

		case 3	:
		if (numeroSecreto==numero)
		{
			alert("Esto es suete");
		}
		else
			{
				if(numeroSecreto>numero)
				{
					alert("Se quedo corto")
				}
				else
				{
					alert("Se paso de largo")
				}
			}
		break;

		case 4	:
		if (numeroSecreto==numero)
		{
			alert("Excelente tecnica");
		}
		else
			{
				if(numeroSecreto>numero)
				{
					alert("Se quedo corto")
				}
				else
				{
					alert("Se paso de largo")
				}
			}
		break;

		case 5	:
		if (numeroSecreto==numero)
		{
			alert("Usted esta en la media");
		}
		else
			{
				if(numeroSecreto>numero)
				{
					alert("Se quedo corto")
				}
				else
				{
					alert("Se paso de largo")
				}
			}
		break;

		case 6	:
		case 7	:
		case 8	:
		case 9	:
		case 10	:
		if (numeroSecreto==numero)
		{
			alert("Falta tecnica");
		}
		else
			{
				if(numeroSecreto>numero)
				{
					alert("Se quedo corto")
				}
				else
				{
					alert("Se paso de largo")
				}
			}
		break;

		default	:
		if (numeroSecreto==numero)
			{
				alert("Afortunado en el amor");
			}
			else
			{
				if(numeroSecreto>numero)
				{
					alert("Se quedo corto")
				}
				else
				{
					alert("Se paso de largo")
				}
			}
		break;
	}


	

}