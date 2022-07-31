edad = 1;

console.log("------------ while -------------");
	
while (edad <= 10) {
	console.log("while " + edad);
	edad++;
}

c = 0

do {
	console.log("do while " + c);
	c++;
} while (c <= 10);

console.log("----------------- for ---------------");

for (contador = 0; contador <= 10; contador++) {
	console.log("for " + contador);
}

console.log("--------------- for in --------------");
nombre=["alejo",11,22];
for (const index in nombre) {
	console.log(nombre[index]);
}
