/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var divisor;
	var dividendo;
	var resultado;

	divisor = parseInt(document.getElementById('numeroDivisor').value);
	dividendo = parseInt(document.getElementById('numeroDividendo').value);

	resultado = dividendo % divisor;

	alert("El resto es: " +resultado);
}
