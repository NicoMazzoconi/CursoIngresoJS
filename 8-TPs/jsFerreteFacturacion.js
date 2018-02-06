/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
//////////////////////////////////////////
function Sumar () 
{
	var pro1suma;
	var pro2suma;
	var pro3suma;
	var resultado1;

	pro1suma = parseInt(document.getElementById('PrecioUno').value);
	pro2suma = parseInt(document.getElementById('PrecioDos').value);
	pro3suma = parseInt(document.getElementById('PrecioTres').value);
	resultado1 = pro1suma + pro2suma + pro3suma;

	alert("La suma de los productos es: " +resultado1);

}
/////////////////////////////////////////
function Promedio () 
{
	var pro1prome;
	var pro2prome;
	var pro3prome;
	var resultado2

	pro1prome = parseInt(document.getElementById('PrecioUno').value);
	pro2prome = parseInt(document.getElementById('PrecioDos').value);
	pro3prome = parseInt(document.getElementById('PrecioTres').value);
	resultado2 = pro1prome + pro2prome + pro3prome;

	alert("El promedio de los productos es: " + (resultado2 / 3));	

}
////////////////////////////////////////////
function PrecioFinal () 
{
	var pro1final
	var pro2final
	var pro3final
	var resultado3

	pro1final = parseInt(document.getElementById('PrecioUno').value);
	pro2final = parseInt(document.getElementById('PrecioDos').value);
	pro3final = parseInt(document.getElementById('PrecioTres').value);
	resultado3 = pro1final + pro2final + pro3final;

	alert("El precio final mas iva es: " + (resultado3 * 1.21));
	
}
/////////////////////////////////////////////