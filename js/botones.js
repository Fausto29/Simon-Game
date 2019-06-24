/**
 * This JavaScript function always returns a random 
 * number between min and max (both included)
 * 
 * @url https://www.w3schools.com/js/js_random.asp
 * 
 * @param min Number min  random 
 * @param max Number max random
 * @returns int Random Number
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}



var azar;	
var GameComputer=[];
var indice;
var error=0;
var pulsado;
var IntervalId;
var PlayerTurn;

function ligthsOff (){
	document.getElementById('boton0').src="img/boton0off.png";
	console.log('he pasado el boton0off');
	document.getElementById('boton1').src="img/boton1off.png";
	console.log('he pasado el boton1off');
	document.getElementById('boton2').src="img/boton2off.png";
	console.log('he pasado el boton2off');
	document.getElementById('boton3').src="img/boton3off.png";
	console.log('he pasado el boton3off');
} 

function flashLigths (){
	document.getElementById('boton0').src="img/boton0.png";
	console.log('he pasado el boton0');
	document.getElementById('boton1').src="img/boton1.png";
	console.log('he pasado el boton1');
	document.getElementById('boton2').src="img/boton2.png";
	console.log('he pasado el boton2');
	document.getElementById('boton3').src="img/boton3.png";
	console.log('he pasado el boton3');
	
}



document.getElementById('start').onclick=function(){
	flashLigths();
	setTimeout(function(){
		ligthsOff();
	},750);
	document.getElementById('start').class="button disabled";
	document.getElementById('start').disable=true;
	game();
}	
	
function game (){		
	azar=getRndInteger(0,3);
	GameComputer.push(azar);
	console.log("en la funcion inicio azar es "+azar);
	setTimeout(function(){
		var objBoton = document.getElementById('boton'+azar).src="img/boton"+azar+".png";
		setTimeout(function(){
			ligthsoff();
		},500);
		var objAudio = document.getElementById('audioBoton'+azar);
		objAudio.play();},1000);
	
}	





console.log(GameComputer);




indice=GameComputer.length;

document.getElementById('boton0').onclick=function(){
	pulsado=0;
	var objBoton = document.getElementById('boton0').src="img/boton0.png";
	console.log('he pasado el encendido del boton0 por presion');
	setTimeout(function(){
			ligthsOff();
		},500);
	var objAudio = document.getElementById('audioBoton0');
	objAudio.play();
	if (pulsado!=GameComputer[indice]){
		error=1;
		console.log("error en condicional boton"+error);
	}else {
		indice++;}
		
}


document.getElementById('boton1').onclick=function(){
	pulsado=1;
	this.style.opacity='1';
	var objBoton = document.getElementById('boton1').src="img/boton1.png";
	setTimeout(function(){
			ligthsOff();
		},500);
	var objAudio = document.getElementById('audioBoton1');
	objAudio.play();
	if (pulsado!=GameComputer[indice]){
		error=1;
		console.log("error en condicional boton"+error);
	}else {
		indice++;}
}

document.getElementById('boton2').onclick=function(){
	pulsado=2
	this.style.opacity='1';
	var objBoton = document.getElementById('boton2').src="img/boton2.png";
	setTimeout(function(){
			ligthsOff();
		},500);
	var objAudio = document.getElementById('audioBoton2');
	objAudio.play();
	if (pulsado!=GameComputer[indice]){
		error=1;
		console.log("error en condicional boton"+error);
	}else {
		indice++;}
}
document.getElementById('boton3').onclick=function(){
	pulsado=3
	var objBoton = document.getElementById('boton3').src="img/boton3.png";
	setTimeout(function(){
			ligthsOff();
		},500);
	var objAudio = document.getElementById('audioBoton3');
	objAudio.play();
	if (pulsado!=GameComputer[indice]){
		error=1;
		console.log("error en condicional boton"+error);
	}else {
		indice++;}
}
function zero (){
	var objAudio = document.getElementById('audioBoton0');
	objAudio.play();
	var objBoton = document.getElementById('boton0').src="img/boton0.png";
}

function uno (){
	var objAudio = document.getElementById('audioBoton1');
	objAudio.play();
	var objBoton = document.getElementById('boton1').src="img/boton1.png";

}

function dos (){
	var objAudio = document.getElementById('audioBoton2');
	objAudio.play();
	var objBoton = document.getElementById('boton2').src="img/boton2.png";
}

function tres (){
	var objAudio = document.getElementById('audioBoton3');
	objAudio.play();
	var objBoton = document.getElementById('boton3').src="img/boton3.png";
}

console.log(GameComputer.length)
console.log(i)

setInterval (function(){
	if (i<GameComputer.length) {
ligthsOff();
console.log('entro en el bucle');
			
		if (GameComputer[i]==0) zero ();
		if (GameComputer[i]==1) uno ();
		if (GameComputer[i]==2) dos ();
		if (GameComputer[i]==3) tres ();
		i++
		console.log(i+' vuelta');
		
		console.log('valor variable despues de la primera vuelta'+i);
} 
	
},500);


console.log ('fuera del bucle')	
