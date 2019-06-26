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

/** Esta funcion comprueba que la tecla pulsada se correcta,
 * en caso contrario devuelve el valor de error=1;
 *
 * @param entero
 * @return en caso de ser erroneo devuelve error=1;
 */

function comprobacion (){
	console.log("valor del indice:"+indice);
	//console.log("valor del pulsado"+GamePlayer[GamePlayer.length]);
	//console.log("valor de la matriz"+GameComputer[GamePlayer.length]);
			if (pulsado != GameComputer[indice]){
				error=1;
				puntuacion=GameComputer.length-1;
				console.log("error en condicional boton"+error);
				document.getElementById('puntuacion').value=puntuacion;
				document.getElementById('start').value="Reintentar";
				document.getElementById('start').disabled=false;
			}else{
				indice++
			}
		
}

/** Esta funcion reproduce la secuencia guardada en el array
 * y genera una nueva posicion.
 * 
 * @param array
 * @return nada
 */

function mostrar (array){
	var z=0;
	//document.getElementById('boton0').disabled=true;
	//document.getElementById('boton1').disabled=true;
	//document.getElementById('boton2').disabled=true;
	//document.getElementById('boton3').disabled=true;
	setInterval (function(){
		if (i<GameComputer.length && error==0) {
ligthsOff();
console.log('entro en el bucle');
			
			if (GameComputer[z]==0) zero ();
			if (GameComputer[z]==1) uno ();
			if (GameComputer[z]==2) dos ();
			if (GameComputer[z]==3) tres ();
			z++;
		} 
		},750);
	error=0;
	var time=GameComputer.length*750
	setTimeout (function(){
			game ();
	},time);
	i=0;
	}



var GameComputer=[];
var azar;	
var indice=0;
var error=0;
var i=0;
var puntuacion=0;


document.getElementById('start').onclick=function(){
	 GameComputer=[];
	  i=0;
	  error=0;
	  indice=0;
	  puntuacion=0;
	  document.getElementById('puntuacion').value=puntuacion;
	flashLigths();
	setTimeout(function(){
		ligthsOff();
		},750);
	document.getElementById('start').disabled=true;
	game();
	
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
		objAudio.play();
	},750);
		console.log("esta es la matriz del juego "+GameComputer);
		indice=0;
		//console.log("esta la matriz del jugador despues del game"+GamePlayer);
}	


document.getElementById('boton0').onclick=function(){
	pulsado=0;
	i++
	//GamePlayer.push(pulsado);
	//console.log("matriz game player "+GamePlayer);
	var objBoton = document.getElementById('boton0').src="img/boton0.png";
	console.log('he pasado el encendido del boton0 por presion');
	setTimeout(function(){
			ligthsOff();
		},300);
	var objAudio = document.getElementById('audioBoton0');
	objAudio.play();
	comprobacion();
	if (i==GameComputer.length){
        mostrar(GameComputer)		
		}
	}		




	
document.getElementById('boton1').onclick=function(){
	pulsado=1;
	i++;
	//GamePlayer.push(pulsado);
	//console.log("matriz game player "+GamePlayer);
	this.style.opacity='1';
	var objBoton = document.getElementById('boton1').src="img/boton1.png";
	setTimeout(function(){
			ligthsOff();
		},300);
	var objAudio = document.getElementById('audioBoton1');
	objAudio.play();
	comprobacion();
	if (i==GameComputer.length){
        mostrar(GameComputer)		
		}

}	
	
document.getElementById('boton2').onclick=function(){
	pulsado=2;
	i++;
	//GamePlayer.push(pulsado);
	//console.log("matriz game player "+GamePlayer);
	this.style.opacity='1';
	var objBoton = document.getElementById('boton2').src="img/boton2.png";
	setTimeout(function(){
			ligthsOff();
			StarBtonOn=false;
		},300);
	var objAudio = document.getElementById('audioBoton2');
	objAudio.play();
	comprobacion();
	if (i==GameComputer.length){
        mostrar(GameComputer)		
		}
	}	

document.getElementById('boton3').onclick=function(){
	pulsado=3;
	i++;
	//GamePlayer.push(pulsado);
	//console.log("matriz game player "+GamePlayer);
	var objBoton = document.getElementById('boton3').src="img/boton3.png";
	setTimeout(function(){
			ligthsOff();
		},300);
	var objAudio = document.getElementById('audioBoton3');
	objAudio.play();
	comprobacion();
	if (i==GameComputer.length){
        mostrar(GameComputer)		
		}
	}	




	
			





