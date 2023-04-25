var num_secreto = Math.floor(Math.random() * 6);	
var intentos = 0;
function adivinar(){			
	var num_usuario = parseInt(document.getElementById("numero").value);
	if(num_usuario === num_secreto){
		document.getElementById("resultado").innerHTML = "¡Felicidades! Has adivinado el número.";
		} else {
			intentos++;
			if (intentos < 3) {
				document.getElementById("resultado").innerHTML = "No has adivinado el número. Te quedan " + (3 - intentos) + " intentos.";
				}else {
					document.getElementById("resultado").innerHTML = "Lo siento, has perdido. El número secreto era " + num_secreto + ".";
				}
			}
}

