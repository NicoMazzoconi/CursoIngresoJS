function Mostrar()
{
	var cant0 = 0;
	var cant1 = 0;
	var cant2 = 0;
	var cant3 = 0;
	var cant4 = 0;
	var cant5 = 0;
	var cant6 = 0;
	var cant7 = 0;
	var cant8 = 0;
	var cant9 = 0;
	var random;
	var porcen0;
	var porcen1;
	var porcen2;
	var porcen3;
	var porcen4;
	var porcen5;
	var porcen6;
	var porcen7;
	var porcen8;
	var porcen9;
	var interaciones = 100000;

	for(i = 0; i<interaciones ;i++)
	{
		random = Math.floor((Math.random()*10)+0);
		console.log(random);
		switch(random)
		{
			case 0	:
				cant0++;
			break;

			case 1	:
				cant1++;
			break;

			case 2	:
				cant2++;
			break;

			case 3	:
				if(cant3 % 4 == 0)
				{
					cant3++;
					i++;
				}
				cant3++;
			break;

			case 4	:
				cant4++;
			break;

			case 5	:
				cant5++;
			break;

			case 6	:
				//porcen6 = (cant6/(interaciones+1))*100;
				cant6++
				/*if (porcen6 < -1)
				{
					i--;
				}
				else
				{
					cant6++;
				}*/
			break;

			case 7	:
				cant7++;
			break;

			case 8	:
				cant8++;
			break;

			case 9	:
				cant9++;
			break;
		}//switch
	}//for


	porcen0 = cant0/i*100;
	porcen0 = Math.round(porcen0);

	porcen1 = cant1/i*100;
	porcen1 = Math.round(porcen1);

	porcen2 = cant2/i*100;
	porcen2 = Math.round(porcen2);

	porcen3 = cant3/i*100;
	porcen3 = Math.round(porcen3);

	porcen4 = cant4/i*100;
	porcen4 = Math.round(porcen4);

	porcen5 = cant5/i*100;
	porcen5 = Math.round(porcen5);

	porcen6 = cant6/i*100;
	porcen6 = Math.round(porcen6);

	porcen7 = cant7/i*100;
	porcen7 = Math.round(porcen7);

	porcen8 = cant8/i*100;
	porcen8 = Math.round(porcen8);

	porcen9 = cant9/i*100;
	porcen9 = Math.round(porcen9);


	document.write("Cantidad de 0 = " + cant0 + "---" + porcen0 + "%");
	document.write("<br>Cantidad de 1 = " + cant1 + "---" + porcen1 + "%");
	document.write("<br>Cantidad de 2 = " + cant2 + "---" + porcen2 + "%");
	document.write("<br>Cantidad de 3 = " + cant3 + "---" + porcen3 + "%");
	document.write("<br>Cantidad de 4 = " + cant4 + "---" + porcen4 + "%");
	document.write("<br>Cantidad de 5 = " + cant5 + "---" + porcen5 + "%");
	document.write("<br>Cantidad de 6 = " + cant6 + "---" + porcen6 + "%");
	document.write("<br>Cantidad de 7 = " + cant7 + "---" + porcen7 + "%");
	document.write("<br>Cantidad de 8 = " + cant8 + "---" + porcen8 + "%");
	document.write("<br>Cantidad de 9 = " + cant9 + "---" + porcen9 + "%");
	document.write("<br>Suma = " + (cant9 + cant1 + cant2 + cant3 + cant4 + cant5 + cant6 + cant7 + cant8 + cant0));
}