/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{
	var numero1
	var numero2
	numero1 = parseInt(document.getElementById('numeroUno').value)
	numero2 = parseInt(document.getElementById('numeroDos').value)

	alert("La suma es " + (numero1 + numero2));
	
}

function restar()
{
	var numero1resta
	var numero2resta
	numero1resta = parseInt(document.getElementById('numeroUno').value)
	numero2resta = parseInt(document.getElementById('numeroDos').value)	

	alert("La resta es " + (numero1resta - numero2resta));	
}

function multiplicar()
{ 
	var numero1multi
	var numero2multi
	numero1multi = parseInt(document.getElementById('numeroUno').value)
	numero2multi = parseInt(document.getElementById('numeroDos').value)

	alert("La multiplicacion es " + (numero1multi * numero2multi));	
}

function dividir()
{
	var numero1divi
	var numero2divi
	numero1divi = parseInt(document.getElementById('numeroUno').value)
	numero2divi = parseInt(document.getElementById('numeroDos').value)
	alert("La division es " + (numero1divi / numero2divi));	
}

