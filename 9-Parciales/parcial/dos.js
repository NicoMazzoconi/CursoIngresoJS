function Mostrar()
{
  var valor;
  var calculo;
  
  valor = prompt("Precio del articulo","");
 
  calculo = valor * 1.21;

  document.getElementById('importeFinal').value = calculo;

}
