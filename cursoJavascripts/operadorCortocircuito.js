// Operador corto circuito
// OR = ||
// AND = &&

function saludoOperadorCortoCircuito(name) {
	name = name || "anonymous";
	console.log(`hello ${name}`);
}

function saludar(name = "anonymous") {
	console.log(`hello ${name}`);
}


saludoOperadorCortoCircuito();
saludar();
