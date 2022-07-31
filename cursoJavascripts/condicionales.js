console.log("Estructurss de control");
function esto () {
console.log("this is function")	
}
console.log("--------------Condicionales if,else,else if");
let edad = 11;
let menu = 2;

if (edad >= 18) {
	console.log("eres mayor de edad");
} else {
	console.log("eres menor de edad");
}

console.log("---------------------------------");
console.log("-------------Operador Ternario--------------------");

let eresMayorEdad =
	edad >= 18
		? console.log("eres mayor de edad")
		: console.log("eres menor de edad papi");

console.log("-------------- Operador switch-case ---------------");

switch (menu) {
	case 2:
		console.log("jajajaj");
		break;
	default:
		console.log("no has selecionnado nada");
		break;
}

console.log("...........manejos de errores try catch")
try { console.log("testeando ...."); hora(); }
catch (e) { console.log(e);}





