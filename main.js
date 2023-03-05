var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

//FRASE A TOMAR EN CUENTA
var frase = 'Cuáles son los requisitos de admisión | Cómo aplico a una beca | puedo hacer traspaso desde otro departamento | Cuándo comienzan las clases | Quién es el rector de la universidad privada boliviana | Qué es la prueba de aptitud académica | Qué es la prepa | Cuántos estudiantes hay en el campus Santa Cruz | cuántos inscritos hay este año | Cuántos estudiantes hay en el campus Santa Cruz | Qué es la pea | Quién es el rector de la upc | Cuál es el ranking de la upv';


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
			if(resultadoEscucha == 'Cuáles son los requisitos de admisión'){
				document.location="../upb/index.php?v=1";
			}

			else if(resultadoEscucha === 'Cómo aplico a una beca'){
				document.location="../upb/index.php?v=2";
			}

			else if(resultadoEscucha === 'puedo hacer traspaso desde otro departamento'){
				document.location="../upb/index.php?v=3";
			}

			else if(resultadoEscucha === 'Quién es el rector de la universidad privada boliviana'){
				document.location="../upb/index.php?v=4";
			}

			else if(resultadoEscucha === 'Cuándo comienzan las clases'){
				document.location="../upb/index.php?v=5";
			}

			else if(resultadoEscucha === 'Qué es la pea'){
				document.location="../upb/index.php?v=6";
			}

			else if(resultadoEscucha === 'Qué es la prepa'){
				document.location="../upb/index.php?v=7";
			}

			else if(resultadoEscucha === 'Cuántos estudiantes hay en el campus Santa Cruz'){
				document.location="../upb/index.php?v=8";
			}

			else if(resultadoEscucha === 'cuántos inscritos hay este año'){
				document.location="../upb/index.php?v=9";
			}

			else if(resultadoEscucha === 'Cuál es el ranking de la upv'){
				document.location="../upb/index.php?v=10";
			}			

			else{
				document.location="../upb/index.php?v=100";
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