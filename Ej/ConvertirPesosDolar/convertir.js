function convertir(){
	const pesos = document.getElementById('pesos').value;
	const dolar = pesos*0.0048;

	document.getElementById("dolares").value=dolar;
}