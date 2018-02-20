/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldo;
 	var legajo;
 	var nacionalidad;

 	//EDAD
 	edad = prompt("Ingrese su edad, siendo 18 el minimo y 90 el maximo");
 	edad = parseInt(edad);
 	while(edad<18 || edad>90)
 	{
 		edad = prompt("Ingrese una edad validad, de 18 a 90");
 	}
 	document.getElementById('Edad').value = edad;
 	//FIN EDAD

 	//SEXO
 	sexo = prompt("Ingrese su sexo, M, para masculino y F, para femenino");
 	while(sexo !="M" && sexo != "F")
 	{
 		sexo = prompt("Recuerde, M, masculino y, F, femenino");
 	}
 	document.getElementById('Sexo').value = sexo;
 	//FIN SEXO

 	//ESTADO CIVIL
 	estadoCivil = prompt("Estado Civil, ingrese 1 Soltero, 2 Casado, 3 Divorciados y 4 Viudos");
 	while(estadoCivil != 1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil != 4)
 	{
 		estadoCivil = prompt("Recuerde usar, 1 Soletro, 2 Casado, 3 Divorciado y 4 Viudos");
 	}
 	document.getElementById('EstadoCivil').value = estadoCivil;
 	//FIN ESTADO CIVIL

 	//SUELDO
 	sueldo = prompt("Ingrese un sueldo, minimo 8000", "8000");
 	while(sueldo<8000)
 	{
 		sueldo = prompt("Ingrese un sueldo valido", "8000");
 	}
 	document.getElementById('Sueldo').value = sueldo;
 	//FIN SUELDO

 	//LEGAJO
 	legajo = prompt("Introduce su legajo, 4 cifras");
 	while(legajo.length < 0 || legajo.length > 4)
 	{
 		legajo = prompt("Ingrese un legajo valido");
 	}
 	legajo = parseInt(legajo);
 	document.getElementById('Legajo').value = legajo;
 	//FIN LEGAJO

 	//NACIONALIDAD
 	nacionalidad = prompt("Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
 	while(estadoCivil != A && estadoCivil != E && estadoCivil != N)
 	{
 		nacionalidad = prompt("Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");
 	}

	documente.getElementById('Nacionaldad').value = nacionalidad;
	//FIN NACIONALIDAD
	
}
