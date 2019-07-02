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
 * Esta funcion JavaScript canvia la imagen del boton 4 
 * botones para que se encienda y reproduzca un sonido
 *  
 * @returns nada
 */

function countdown (){
	document.getElementById("cuentaatras").value=time;
	  time=time-1;
	  if (time<0){
	  clearInterval (controlTime);
	  error=1;
		puntuacion=GameComputer.length-1;
		console.log("tiempo finalizado");
		document.getElementById('puntuacion').value=puntuacion;
		// a partir de aqui damos la opcion a reiniciar el juego desde el principio
		document.getElementById('start').value="Reintentar";
		document.getElementById('start').disabled=false;
		document.getElementById('start').style.opacity="1";
		document.getElementById('simonc').disabled=false;
		document.getElementById('simons').disabled=false;
		document.getElementById('simonm').disabled=false;
	  }
}

/**
 * Esta funcion JavaScript canvia la imagen del boton 0 
 * botones para que se encienda y reproduzca un sonido
 *  
 * @returns nada
 */
function zero (){
	if (sound== true){
	var objAudio = document.getElementById('audioBoton0');
	objAudio.play();
	}
	if (image==true){
	var objBoton = document.getElementById('botonA0').src="img/botonA0On.png";
	}
}

/**
 * Esta funcion JavaScript canvia la imagen del boton 1 
 * botones para que se encienda y reproduzca un sonido
 *  
 * @returns nada
 */
function uno (){
	if (sound== true){
	var objAudio = document.getElementById('audioBoton1');
	objAudio.play();
	}
	if (image==true){
	var objBoton = document.getElementById('botonA1').src="img/botonA1On.png";
	}

}
/**
 * Esta funcion JavaScript canvia la imagen del boton 2 
 * botones para que se encienda y reproduzca un sonido
 *  
 * @returns nada
 */
function dos (){
	if (sound== true){
	var objAudio = document.getElementById('audioBoton2');
	objAudio.play();
	}
	if (image==true){
	var objBoton = document.getElementById('botonA2').src="img/botonA2On.png";
	}
}

/**
 * Esta funcion JavaScript canvia la imagen del boton 3 
 * botones para que se encienda y reproduzca un sonido
 *  
 * @returns nada
 */
function tres (){
	if (sound== true){
	var objAudio = document.getElementById('audioBoton3');
	objAudio.play();
	}
	if (image==true){
	var objBoton = document.getElementById('botonA3').src="img/botonA3On.png";
	}
}

/**
 * Esta funcion JavaScript canvia la imagen del boton 4 
 * botones para que se encienda y reproduzca un sonido
 *  
 * @returns nada
 */
function cuatro (){
	console.log ("estoy en la funcion mostrar 4");
	if (sound== true){
	var objAudio = document.getElementById('audioBoton4');
	objAudio.play();
	}
	if (image==true){
	var objBoton = document.getElementById('botonA4').src="img/botonA4On.png";
	}
}

/**
 * Esta funcion JavaScript canvia la imagen del boton 5 
 * botones para que se encienda y reproduzca un sonido
 *  
 * @returns nada
 */
function cinco (){
	console.log ("estoy en la funcion mostrar 5");
	if (sound== true){
	var objAudio = document.getElementById('audioBoton5');
	objAudio.play();
	}
	if (image==true){
	var objBoton = document.getElementById('botonA5').src="img/botonA5On.png";
	}
}

/**
 * Esta funcion JavaScript canvia la imagen del boton 6 
 * botones para que se encienda y reproduzca un sonido
 *  
 * @returns nada
 */
function seis (){
	console.log ("estoy en la funcion mostrar 6");
	if (sound== true){
	var objAudio = document.getElementById('audioBoton6');
	objAudio.play();
	}
	if (image==true){
	var objBoton = document.getElementById('botonA6').src="img/botonA6On.png";
	}
}

/**
 * Esta funcion JavaScript canvia la imagen del boton 7 
 * botones para que se encienda y reproduzca un sonido
 *  
 * @returns nada
 */
function siete (){
	console.log ("estoy en la funcion mostrar 7");
	if (sound== true){
	var objAudio = document.getElementById('audioBoton7');
	objAudio.play();
	}
	if (image==true){
	var objBoton = document.getElementById('botonA7').src="img/botonA7On.png";
	}
}




/**
 * Esta funcion JavaScript canvia la imagen de los 
 * botones para que se muestren apagados
 *  
 * @returns nada
 */

function ligthsOff (){
	document.getElementById('botonA0').src="img/botonA0Off.png";
	document.getElementById('botonA1').src="img/botonA1Off.png";
	document.getElementById('botonA2').src="img/botonA2Off.png";
	document.getElementById('botonA3').src="img/botonA3Off.png";
	document.getElementById('botonA4').src="img/botonA4Off.png";
	document.getElementById('botonA5').src="img/botonA5Off.png";
	document.getElementById('botonA6').src="img/botonA6Off.png";
	document.getElementById('botonA7').src="img/botonA7Off.png";
} 

/**
 * Esta funcion JavaScript canvia la imagen de los 
 * botones para que se muestren encendidos
 *  
 * @returns nada
 */

function flashLigths (){
	document.getElementById('botonA0').src="img/botonA0On.png";
	document.getElementById('botonA1').src="img/botonA1On.png";
	document.getElementById('botonA2').src="img/botonA2On.png";
	document.getElementById('botonA3').src="img/botonA3On.png";
	document.getElementById('botonA4').src="img/botonA4On.png";
	document.getElementById('botonA5').src="img/botonA5On.png";
	document.getElementById('botonA6').src="img/botonA6On.png";
	document.getElementById('botonA7').src="img/botonA7On.png";

	
}

/** Esta funcion comprueba que la tecla pulsada se correcta,
 * en caso contrario devuelve el valor de error=1;
 *
 * @param entero
 * @return en caso de ser erroneo devuelve error=1;
 */

function comprobacion (){
	console.log("valor del indice:"+indice);
			if (pulsado != GameComputer[indice]){
				if (strictmode==false){
					var z=0;
					console.log('cuando strict mode off');
					setInterval (function(){
						ligthsOff();
						console.log('entro en el bucle');
						if (GameComputer[z]==0) zero ();
						if (GameComputer[z]==1) uno ();
						if (GameComputer[z]==2) dos ();
						if (GameComputer[z]==3) tres ();
						if (GameComputer[z]==4) cuatro ();
						if (GameComputer[z]==5) cinco ();
						if (GameComputer[z]==6) seis ();
						if (GameComputer[z]==7) siete ();
						z++;
					},1250);
				}else {
					// las instrucciones siguientes paran el juego
					error=1;
					puntuacion=GameComputer.length-1;
					console.log("error en condicional boton"+error);
					document.getElementById('puntuacion').value=puntuacion;
					// a partir de aqui damos la opcion a reiniciar el juego desde el principio
					document.getElementById('start').value="Reintentar";
					document.getElementById('start').disabled=false;
					document.getElementById('start').style.opacity="1";
					document.getElementById('simonc').disabled=false;
					document.getElementById('simons').disabled=false;
					document.getElementById('simonm').disabled=false;
						}
			}else{
				indice++;
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
	clearInterval (controlTime);
	setInterval (function(){
		if (i<GameComputer.length && error==0) {
ligthsOff();
console.log('entro en el bucle');
			
			if (GameComputer[z]==0) zero ();
			if (GameComputer[z]==1) uno ();
			if (GameComputer[z]==2) dos ();
			if (GameComputer[z]==3) tres ();
			if (GameComputer[z]==4) cuatro ();
			if (GameComputer[z]==5) cinco ();
			if (GameComputer[z]==6) seis ();
			if (GameComputer[z]==7) siete ();
			z++;
		} 
		},1250);
	error=0;
	/* tenemos que introducir un setTimeout con tal de que la funcion se ejecute despues de
	 * que se muestren todos los elementos del Array. Con tal de que sea lo mas exacto posible
	 * se crea una variable time a la cual se le da el valor de la longitud de la array y
	 * multiplica por el tiempo que tarda en dar una vuelta la muestra
	 */ 
	var timecontrol=GameComputer.length*1250;
	setTimeout (function(){
			game ();
	},timecontrol);
	i=0;
	}



var GameComputer=[];
var azar;	
var indice=0;
var error=0;
var i=0;
var puntuacion=0;
var strictmode=true;
var sound=true;
var image=true;
var gameMode;
var time=10;
var controlTime;

document.getElementById('simonc').onclick=function(){
	document.getElementById('simoncselect').src="img/botonselecionadoOn.png";
	document.getElementById('simonsselect').src="img/botonselecionadoOff.png";
	document.getElementById('simonmselect').src="img/botonselecionadoOff.png";
	document.getElementById('botonA0').style="display: inline";
	document.getElementById('botonA1').style="display: inline";
	document.getElementById('botonA2').style="display: inline";
	document.getElementById('botonA3').style="display: inline";
	document.getElementById('botonA4').style="display: none";
	document.getElementById('botonA5').style="display: none";
	document.getElementById('botonA6').style="display: none";
	document.getElementById('botonA7').style="display: none";
	gameMode=3;
	
}

document.getElementById('simons').onclick=function(){
	document.getElementById('simonsselect').src="img/botonselecionadoOn.png";
	document.getElementById('simoncselect').src="img/botonselecionadoOff.png";
	document.getElementById('simonmselect').src="img/botonselecionadoOff.png";
	document.getElementById('botonA0').style="display: inline";
	document.getElementById('botonA1').style="display: inline";
	document.getElementById('botonA2').style="display: inline";
	document.getElementById('botonA3').style="display: inline";
	document.getElementById('botonA4').style="display: inline";
	document.getElementById('botonA5').style="display: inline";
	document.getElementById('botonA6').style="display: none";
	document.getElementById('botonA7').style="display: none";
	gameMode=5;
	
}

document.getElementById('simonm').onclick=function(){
	document.getElementById('simonmselect').src="img/botonselecionadoOn.png";
	document.getElementById('simonsselect').src="img/botonselecionadoOff.png";
	document.getElementById('simoncselect').src="img/botonselecionadoOff.png";
	document.getElementById('botonA0').style="display: inline";
	document.getElementById('botonA1').style="display: inline";
	document.getElementById('botonA2').style="display: inline";
	document.getElementById('botonA3').style="display: inline";
	document.getElementById('botonA4').style="display: inline";
	document.getElementById('botonA5').style="display: inline";
	document.getElementById('botonA6').style="display: inline";
	document.getElementById('botonA7').style="display: inline";
	gameMode=7;
	
}



document.getElementById('image').onclick=function(){
	if (image==true && sound!=false){
		document.getElementById('image').src="img/imageOff.png";
		image=false;
		console.log('valor de image '+image);
	}else {
		document.getElementById('image').src="img/imageOn.png";
		image=true;
		console.log('valor de image '+image);
	}
}


document.getElementById('sound').onclick=function(){
	if (sound==true && image!=false){
		document.getElementById('sound').src="img/soundOff.png";
		sound=false;
		console.log('valor de sound '+sound);
	}else {
		document.getElementById('sound').src="img/soundOn.png";
		sound=true;
		console.log('valor de strict '+sound);
	}
}

document.getElementById('strict').onclick=function(){
	
	if (strictmode==true){
		document.getElementById('strict').src="img/strictOff.png";
		strictmode=false;
		console.log('valor de strict '+strictmode);
	}else {
		document.getElementById('strict').src="img/strictOn.png";
		strictmode=true;
		console.log('valor de strict '+strictmode);
	}
}


document.getElementById('start').onclick=function(){
	  
	if (gameMode>0){
	  GameComputer=[];
	  i=0;
	  error=0;
	  indice=0;
	  puntuacion=0;
	  time=10;
	  document.getElementById('puntuacion').value=puntuacion;
	// la funcion flashLights enciende todas las luces pero no reproduce el sonido para que no sea molesto
	  flashLigths();
	setTimeout(function(){
		// la funcion flashOff apaga todas las luces es recurrente en el programa.
		ligthsOff();
		},750);
	// desabilitamos el boton star para que no se pueda apretar por error durante el juego
	document.getElementById('start').disabled=true;
	document.getElementById('simonc').disabled=true;
	document.getElementById('simons').disabled=true;
	document.getElementById('simonm').disabled=true;
	document.getElementById('start').style.opacity="0.7";
	game();
	}
	
}	
/** Esta funcion genera un numero aleatorio entre 0 i 3
 * cada numero esta asociado a un boton.
 * gardamos la informacion en un array y reproducimos els sonido y encendemos 
 * el boton asociado a ese numero 
 * @return nada
 */	
function game (){		
	azar=getRndInteger(0,gameMode);
	GameComputer.push(azar);
	console.log("en la funcion inicio azar es "+azar);
	setTimeout(function(){
		if (image==true){
		var objBoton = document.getElementById('botonA'+azar).src="img/botonA"+azar+"On.png";
		setTimeout(function(){
			ligthsOff();
		},750);
		}
		if (sound==true){
		var objAudio = document.getElementById('audioBoton'+azar);
		console.log("esta es la variable de audio "+ objAudio);
		objAudio.play();
		}
	},1000);
		console.log("esta es la matriz del juego "+GameComputer);
		controlTime=setInterval(countdown,1000);
		indice=0;
		
		//console.log("esta la matriz del jugador despues del game"+GamePlayer);
}	

/* a partir de aqui entramos en la configuracion de los botones y todos tendran
 * la misma configuracion solo cambia la imagen i el sonido que se carga y el valor de 
 * la variable pulsado que para cada boton tiene un valor diferente entre 0 y 3
 */

document.getElementById('botonA0').onclick=function(){
	time=10;
	pulsado=0;
	i++
	if (image==true){
	var objBoton = document.getElementById('botonA0').src="img/botonA0On.png";
	console.log('he pasado el encendido del boton0 por presion');
	setTimeout(function(){
			ligthsOff();
		},750);
	}
	if (sound==true){
	var objAudio = document.getElementById('audioBoton0');
	objAudio.play();
	}
	// una vez pulsado comprobamos si la pulsacion es correcta con la siguiente funcion
	comprobacion();
	if (i==GameComputer.length && error==0){
		// si ya hemos pulsado toda la secuencia correctamente lanzamos la siguiente
        mostrar(GameComputer)		
		}
	}		




	
document.getElementById('botonA1').onclick=function(){
	time=10;
	pulsado=1;
	i++;
	if (image==true){
	var objBoton = document.getElementById('botonA1').src="img/botonA1On.png";
	setTimeout(function(){
			ligthsOff();
		},750);
	}
	if (sound== true){
	var objAudio = document.getElementById('audioBoton1');
	objAudio.play();
	}
	comprobacion();
	if (i==GameComputer.length && error==0){
        mostrar(GameComputer)		
		}

}	
	
document.getElementById('botonA2').onclick=function(){
	time=10;
	pulsado=2;
	i++;
	if (image==true){
	var objBoton = document.getElementById('botonA2').src="img/botonA2On.png";
	setTimeout(function(){
			ligthsOff();
			StarBtonOn=false;
		},750);
	}
	if (sound== true){
	var objAudio = document.getElementById('audioBoton2');
	objAudio.play();
	}
	comprobacion();
	if (i==GameComputer.length && error==0){
        mostrar(GameComputer)		
		}
	}	

document.getElementById('botonA3').onclick=function(){
	time=10;
	pulsado=3;
	i++;
	if (image==true){
	var objBoton = document.getElementById('botonA3').src="img/botonA3On.png";
	setTimeout(function(){
			ligthsOff();
		},750);
	}
	if (sound== true){
	var objAudio = document.getElementById('audioBoton3');
	objAudio.play();
	}
	comprobacion();
	if (i==GameComputer.length && error==0){
        mostrar(GameComputer)		
		}
	}	

document.getElementById('botonA4').onclick=function(){
	time=10;
	pulsado=4;
	i++;
	if (image==true){
	var objBoton = document.getElementById('botonA4').src="img/botonA4On.png";
	setTimeout(function(){
			ligthsOff();
		},750);
	}
	if (sound== true){
	var objAudio = document.getElementById('audioBoton4');
	objAudio.play();
	}
	comprobacion();
	if (i==GameComputer.length && error==0){
        mostrar(GameComputer)		
		}
	}

document.getElementById('botonA5').onclick=function(){
	time=10;
	pulsado=5;
	i++;
	if (image==true){
	var objBoton = document.getElementById('botonA5').src="img/botonA5On.png";
	setTimeout(function(){
			ligthsOff();
		},750);
	}
	if (sound== true){
	var objAudio = document.getElementById('audioBoton5');
	objAudio.play();
	}
	comprobacion();
	if (i==GameComputer.length && error==0){
        mostrar(GameComputer)		
		}
	}

document.getElementById('botonA6').onclick=function(){
	time=10;
	pulsado=6;
	i++;
	if (image==true){
	var objBoton = document.getElementById('botonA6').src="img/botonA6On.png";
	setTimeout(function(){
			ligthsOff();
		},750);
	}
	if (sound== true){
	var objAudio = document.getElementById('audioBoton6');
	objAudio.play();
	}
	comprobacion();
	if (i==GameComputer.length && error==0){
        mostrar(GameComputer)		
		}
	}
document.getElementById('botonA7').onclick=function(){
	time=10;
	pulsado=7;
	i++;
	if (image==true){
	var objBoton = document.getElementById('botonA7').src="img/botonA7On.png";
	setTimeout(function(){
			ligthsOff();
		},750);
	}
	if (sound== true){
	var objAudio = document.getElementById('audioBoton7');
	objAudio.play();
	}
	comprobacion();
	if (i==GameComputer.length && error==0){
        mostrar(GameComputer)		
		}
	}






	
			





