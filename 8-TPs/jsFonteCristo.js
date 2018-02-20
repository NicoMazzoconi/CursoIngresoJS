/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
	var numero;

function NumerosPares()
{
	var i;
	numero = document.getElementById('numero').value;

	for(i = numero; i > -1; i--)
	{
		if(i % 2 ==0)
		{
			alert(i);
		}
	}
}

function NumerosImpares()
{
	var i;
	numero = document.getElementById('numero').value;

	for(i = numero; i > -1; i--)
	{
		if(i % 2 != 0)
		{
			alert(i);
		}
	}
}

function NumerosDivisibles()
{
	var i;
	numero = document.getElementById('numero').value;

	for(i = 1; i <= numero; i++)
	{
		if(numero % i == 0)
			{
				alert(i);
			}
	}

}

function VerificarPrimo()
{
	var i;
	var a=0;
	numero = document.getElementById('numero').value;

	for(i = 1; i < (numero+1) ; i++)
	{
		if(numero % i == 0)
		{
			a++;
		}
	}

	if (a != 2)
	{
		alert("No es primo");
	}
	else
	{
		alert("Es primo");
	}
}

function NumerosPrimos()
{
	var i;
	var a=0;
	numero = document.getElementById('numero').value;

	for(i = 1; i < (numero+1); i++)
	{
		if(numero % i ==0)
		{
			a++;
		}
		for(i = 1; i < (numero+1); i++)
		{
			alert(numero);
		}
	}
}

