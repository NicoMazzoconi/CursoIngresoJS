/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{
	var numero1;
	var numero2;
	var suma;

	numero1 = document.getElementById('numeroUno').value;
	numero2 = document.getElementById('numeroDos').value;
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);

	suma = numero1 + numero2;
	alert("La suma es " +suma);
	
}

function restar()
{
	var numero1resta;
	var numero2resta;
	var resta;

	numero1resta = document.getElementById('numeroUno').value;
	numero2resta = document.getElementById('numeroDos').value;
	numero1resta = parseInt(numero1resta);
	numero2resta = parseInt(numero2resta);

	resta = numero1resta - numero2resta;	
	alert("La resta es " + resta);
}

function multiplicar()
{ 
	var numero1multi;
	var numero2multi;
	var multi;

	numero1multi = document.getElementById('numeroUno').value;
	numero2multi = document.getElementById('numeroDos').value;
	numero1multi = parseInt(numero1multi);
	numero2multi = parseInt(numero2multi);

	multi = numero1multi * numero2multi;
	alert("La multiplicacion es " + multi);	
}

function dividir()
{
	var numero1divi;
	var numero2divi;
	var divi;

	numero1divi = document.getElementById('numeroUno').value;
	numero2divi = document.getElementById('numeroDos').value;
	numero1divi = parseInt(numero1divi);
	numero2divi = parseInt(numero2divi);

	divi = numero1divi / numero2divi;
	alert("La division es " + divi);	
}

