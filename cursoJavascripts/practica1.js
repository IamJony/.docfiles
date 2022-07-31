// practica #1

function contarCaracteres(cadena = "") {
	if (!cadena) {
		console.warn("no ingresaste ninguna cadena de texto");
	} else {
		console.log(cadena.length);
	}
}

contarCaracteres("hola mundo");

function cortar(cadena = "", cut = undefined) {

	if (!cadena) {
		console.log("no ingresaste ninguna cadena de texto");
	} else if (cut === undefined) {
		console.warn("se imprime en pantalla tal cual sin modificar");
		console.log(cadena.slice(0, cut));
		console.warn("plase, inserta el numero de caracteres a cortar");
	} else {
		console.log(cadena.slice(0, cut));
	}
}

cortar("hola mundo", );

function repetconsole(texto, rep) {
	for (let i = 0; i < rep; i++) {
		console.log(texto);
	}
}

repetconsole("esto es una prueba", 3);

const convertirStrimToArray = (strim = undefined) =>
	strim === undefined || strim === "" 
	? console.warn("no ingresaste un strim")
	: console.log(strim.split(` `));

convertirStrimToArray("loren imput ljaj ja casa pata mesa");
