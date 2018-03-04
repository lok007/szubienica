var films = new Array(5);

films[0] = "Thor";
films[1] = "Iron Man";
films[2] = "Kapitan Ameryka";
films[3] = "Strażnicy galaktyki";
films[4] = "Spiderman";

var nrFilmu = Math.floor((Math.random()*5));

var przyslowia = new Array(5);

przyslowia[0] = "Bez pracy nie ma kołaczy";
przyslowia[1] = "Kto pod kim dołki kopie ten sam w nie wpada";
przyslowia[2] = "Nie taka kobieta straszna jak się umaluje";
przyslowia[3] = "Takich trzech jak nas dwóch to nie ma ani jednego";
przyslowia[4] = "Krowa krowie mleka nie wypije";

var nrPrzyslowia = Math.floor((Math.random()*5));

var przedmiot = new Array(5);

przedmiot[0] = "Drzewo";
przedmiot[1] = "Lokomotywa";
przedmiot[2] = "wiatrak";
przedmiot[3] = "parasolka";
przedmiot[4] = "samochód";

var nrPrzedmiotu = Math.floor((Math.random()*5));

var haslo;

function losujHaslo()
{
	if (Math.floor((Math.random()*3)) == 0)
		{
		haslo = films[nrFilmu];
		}
	else if (Math.floor((Math.random()*3)) == 1)
		{
		haslo = przyslowia[nrPrzyslowia];
		}
	else 
		{
		haslo = przedmiot[nrPrzedmiotu];
		}
			
}



losujHaslo();
haslo = haslo.toUpperCase();

var kategory = "";
for (i=0;i<=4;i++)
{
	if (haslo == films[i].toUpperCase()) kategory = kategory+" filmy"; 
	else if (haslo == przyslowia[i].toUpperCase()) kategory =kategory+"przysłowia";
	else if (haslo == przedmiot[i].toUpperCase())  kategory =kategory+"przedmiot";
	
}



var dlugosc = haslo.length;
var ile_skuch = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;


var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";



function start()
{
	
	var tresc_diva ="";
	
	for (i=0; i<=34; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	document.getElementById("kategoria").innerHTML = kategory;
	

	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr]) 
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_haslo();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//skucha
		ile_skuch++;
		var obraz = "img/s"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if (haslo == haslo1)
	document.getElementById("alfabet").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	
	//przegrana
	if (ile_skuch>=9)
	document.getElementById("alfabet").innerHTML  = "Przegrana! Prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}
