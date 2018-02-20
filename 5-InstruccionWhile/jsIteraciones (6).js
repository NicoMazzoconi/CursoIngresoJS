function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	acumulador = parseInt(acumulador);
	while(contador < 5)
	{
		contador ++;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		
		acumulador = acumulador + numero;
	}

	/*numero1 = prompt("Ingrese su primer numero");
	while (numero1 != parseInt(numero1))
	{
		numero1 = prompt("Ingrese su primer numero nuevamente");
	}
	numero2 = prompt("ingrese su segundo numero");
	while(numero2 != parseInt(numero2))
	{
		numero2 = prompt("Ingrese su segundo numero nuevamente");
	}
	numero3 = prompt("ingrese su tercer numero");
	while(numero3 != parseInt(numero3))
	{
		numero3 = prompt("Ingrese su tercer numero nuevamente");
	}
	numero4 = prompt("ingrese su cuarto numero");
	while(numero4 != parseInt(numero4))
	{
		numero4 = prompt("Ingrese su cuarto numero nuevamente");
	}
	numero5 = prompt("ingrese su quinto numero");
	while(numero5 != parseInt(numero5))
	{
		numero5 = prompt("ingrese su quinto numero nuevamente");
	}
	
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	numero3 = parseInt(numero3);
	numero4 = parseInt(numero4);
	numero5 = parseInt(numero5);
*/
	//acumulador = numero1 + numero2 + numero3 + numero4 + numero5;





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN