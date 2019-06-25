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

/**
 * Esta funcion JavaScript canvia la imagen del boton 0 
 * botones para que se encienda y reproduzca un sonido
 *  
 * @returns nada
 */
function zero (){
	var objAudio = document.getElementById('audioBoton0');
	objAudio.play();
	var objBoton = document.getElementById('boton0').src="img/boton0.png";
}

/**
 * Esta funcion JavaScript canvia la imagen del boton 1 
 * botones para que se encienda y reproduzca un sonido
 *  
 * @returns nada
 */
function uno (){
	var objAudio = document.getElementById('audioBoton1');
	objAudio.play();
	var objBoton = document.getElementById('boton1').src="img/boton1.png";

}
/**
 * Esta funcion JavaScript canvia la imagen del boton 2 
 * botones para que se encienda y reproduzca un sonido
 *  
 * @returns nada
 */
function dos (){
	var objAudio = document.getElementById('audioBoton2');
	objAudio.play();
	var objBoton = document.getElementById('boton2').src="img/boton2.png";
}

/**
 * Esta funcion JavaScript canvia la imagen del boton 3 
 * botones para que se encienda y reproduzca un sonido
 *  
 * @returns nada
 */
function tres (){
	var objAudio = document.getElementById('audioBoton3');
	objAudio.play();
	var objBoton = document.getElementById('boton3').src="img/boton3.png";
}

/**
 * Esta funcion JavaScript canvia la imagen de los 
 * botones para que se muestren apagados
 *  
 * @returns nada
 */

function ligthsOff (){
	document.getElementById('boton0').src="img/boton0off.png";
	document.getElementById('boton1').src="img/boton1off.png";
	document.getElementById('boton2').src="img/boton2off.png";
	document.getElementById('boton3').src="img/boton3off.png";
} 

/**
 * Esta funcion JavaScript canvia la imagen de los 
 * botones para que se muestren encendidos
 *  
 * @returns nada
 */

function flashLigths (){
	document.getElementById('boton0').src="img/boton0.png";
	document.getElementById('boton1').src="img/boton1.png";
	document.getElementById('boton2').src="img/boton2.png";
	document.getElementById('boton3').src="img/boton3.png";

	
}

var azar;	
var GameComputer=[];
var indice;
var error=0;
var pulsado;
var IntervalId;
var PlayerTurn;
var CompTurn;
var StarBtonOn=false;
var i=0;





document.getElementById('start').onclick=function(){
	flashLigths();
	setTimeout(function(){
		ligthsOff();
		StarBtonOn=true;
	},750);
	document.getElementById('start').class="button disabled";
	document.getElementById('start').disable=true;
	game();
	StarBtonOn=true;
	console.log("estado de boton star"+StarBtonOn);
}	
	
function game (){		
	azar=getRndInteger(0,3);
	GameComputer.push(azar);
	console.log("en la funcion inicio azar es "+azar);
	setTimeout(function(){
		var objBoton = document.getElementById('boton'+azar).src="img/boton"+azar+".png";
		setTimeout(function(){
			ligthsOff();
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
		StarBtonOn=false;
		console.log("error en condicional boton"+error);
	}else {
		indice++;
		console.log("sin error"+indice);}
		
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
		StarBtonOn=false;
		console.log("error en condicional boton"+error);
	}else {
		indice++;
		console.log("sin error"+indice);}
}

document.getElementById('boton2').onclick=function(){
	pulsado=2
	this.style.opacity='1';
	var objBoton = document.getElementById('boton2').src="img/boton2.png";
	setTimeout(function(){
			ligthsOff();
			StarBtonOn=false;
		},500);
	var objAudio = document.getElementById('audioBoton2');
	objAudio.play();
	if (pulsado!=GameComputer[indice]){
		error=1;
		StarBtonOn=false;
		console.log("error en condicional boton"+error);
	}else {
		indice++;
		console.log("sin error"+indice);}
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
		StarBtonOn=false;
		console.log("error en condicional boton"+error);
	}else {
		indice++;
		console.log("sin error"+indice);}
}



console.log(GameComputer.length)
console.log("este es el comp antes del while "+CompTurn);
console.log("este es el player antes del while "+PlayerTurn);


setTimeout (function (){
	while (error==0 && StarBtonOn==true){
	console.log("entro en el while")
		if (CompTurn){
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
		Compturn=false;
		error=0;
		game ();
		
	}
	if (PlayerTurn){
		if (i==GameComputer.length)
			Compturn=true;
			Playerturn=false;
			
	}
	}
			
},3000);





