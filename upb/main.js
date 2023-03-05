var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

//FRASE A TOMAR EN CUENTA
var frase = 'Cómo te llamas | Contame un chiste | Cuál es el ranking de la Universidad';


var textError = document.querySelector('.error');

var escucha = document.querySelector('#start_img');

var activo = false;

function inicio(){
	
	
	if(activo){
		escucha.src = 'imagenes/mic.gif';
		activo = false;
	}
	else{
		escucha.src = 'imagenes/mic-animate.gif';
		activo = true;
		//VERIFICAR FRASE
		var gramatica = '#JSGF V1.0; grammar phrase; public <frase> = ' + frase +';';
		var reconocimiento = new SpeechRecognition();
		var listaReconocido = new SpeechGrammarList();
		listaReconocido.addFromString(gramatica,1);
		reconocimiento.grammar = listaReconocido;
		reconocimiento.lang = 'es-CO';
		reconocimiento.interimResults = false;
		reconocimiento.maxAlternatives = 1;

		reconocimiento.start();

		reconocimiento.onresult = function(event){

			var resultadoEscucha = event.results[0][0].transcript;
			textError.textContent = resultadoEscucha;
			//MISMO QUE VERIFICAR FRASE
			if(resultadoEscucha === 'Cómo te llamas'){
				document.location="../php/index.php?v=1";
			}

			else if(resultadoEscucha === 'Contame un chiste'){
				document.location="../php/index.php?v=2";
			}

			else if(resultadoEscucha === 'Cuál es el ranking de la Universidad'){
				document.location="../php/index.php?v=3";
			}

			else{
				console.log('nada');
			}
			console.log('Confidencial: ' + event.results[0][0].confidence);
		}
	}
	reconocimiento.onspeechend = function() {
		reconocimiento.stop();
		escucha.src = 'imagenes/mic.gif';
		activo = false;
	}
	reconocimiento.onerror = function(event) {
		textError.textContent = 'Algo fallo intentalo de nuevo';
		console.log('error' +event.error);
	}
}

escucha.addEventListener('click', inicio);