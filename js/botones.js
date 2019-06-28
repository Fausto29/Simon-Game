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
						z++;
					},750);
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
	/* tenemos que introducir un setTimeout con tal de que la funcion se ejecute despues de
	 * que se muestren todos los elementos del Array. Con tal de que sea lo mas exacto posible
	 * se crea una variable time a la cual se le da el valor de la longitud de la array y
	 * multiplica por el tiempo que tarda en dar una vuelta la muestra
	 */ 
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
var strictmode=true;
var sound=true;

document.getElementById('sound').onclick=function(){
	if (sound==true){
		document.getElementById('sound').src="img/soundOff.png";
		sound=false;
		console.log('valor de sound '+sound);
	}else {
		document.getElementById('sound').src="img/soundtOn.png";
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
	 GameComputer=[];
	  i=0;
	  error=0;
	  indice=0;
	  puntuacion=0;
	  document.getElementById('puntuacion').value=puntuacion;
	// la funcion flashLights enciende todas las luces pero no reproduce el sonido para que no sea molesto
	  flashLigths();
	setTimeout(function(){
		// la funcion flashOff apaga todas las luces es recurrente en el programa.
		ligthsOff();
		},750);
	// desabilitamos el boton star para que no se pueda apretar por error durante el juego
	document.getElementById('start').disabled=true;
	document.getElementById('start').style.opacity="0.7";
	game();
	
}	
/** Esta funcion genera un numero aleatorio entre 0 i 3
 * cada numero esta asociado a un boton.
 * gardamos la informacion en un array y reproducimos els sonido y encendemos 
 * el boton asociado a ese numero 
 * @return nada
 */	
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

/* a partir de aqui entramos en la configuracion de los botones y todos tendran
 * la misma configuracion solo cambia la imagen i el sonido que se carga y el valor de 
 * la variable pulsado que para cada boton tiene un valor diferente entre 0 y 3
 */

document.getElementById('boton0').onclick=function(){
	pulsado=0;
	i++
	var objBoton = document.getElementById('boton0').src="img/boton0.png";
	console.log('he pasado el encendido del boton0 por presion');
	setTimeout(function(){
			ligthsOff();
		},300);
	var objAudio = document.getElementById('audioBoton0');
	objAudio.play();
	// una vez pulsado comprobamos si la pulsacion es correcta con la siguiente funcion
	comprobacion();
	if (i==GameComputer.length && error==0){
		// si ya hemos pulsado toda la secuencia correctamente lanzamos la siguiente
        mostrar(GameComputer)		
		}
	}		




	
document.getElementById('boton1').onclick=function(){
	pulsado=1;
	i++;
	this.style.opacity='1';
	var objBoton = document.getElementById('boton1').src="img/boton1.png";
	setTimeout(function(){
			ligthsOff();
		},300);
	var objAudio = document.getElementById('audioBoton1');
	objAudio.play();
	comprobacion();
	if (i==GameComputer.length && error==0){
        mostrar(GameComputer)		
		}

}	
	
document.getElementById('boton2').onclick=function(){
	pulsado=2;
	i++;
	this.style.opacity='1';
	var objBoton = document.getElementById('boton2').src="img/boton2.png";
	setTimeout(function(){
			ligthsOff();
			StarBtonOn=false;
		},300);
	var objAudio = document.getElementById('audioBoton2');
	objAudio.play();
	comprobacion();
	if (i==GameComputer.length && error==0){
        mostrar(GameComputer)		
		}
	}	

document.getElementById('boton3').onclick=function(){
	pulsado=3;
	i++;
	var objBoton = document.getElementById('boton3').src="img/boton3.png";
	setTimeout(function(){
			ligthsOff();
		},300);
	var objAudio = document.getElementById('audioBoton3');
	objAudio.play();
	comprobacion();
	if (i==GameComputer.length && error==0){
        mostrar(GameComputer)		
		}
	}	




	
			





