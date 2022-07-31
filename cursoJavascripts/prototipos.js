// MANERA TRADICIONAL DE ESCRIBIR FUNCIONES CONSTRUCTORAS SIN EMBARGO NO ES LA MANARA OPTIMA DE ESCRIBIRLAS LO IDEAL SERIA DE CLARAR LOS METODOS AFUERA DE LA FUNCION PARA OPTIMIZAR LA MEMORIA

function animal(name, genero) {

	// ATRIBUTOS
	
	this.name = name;
	this.genero = genero;

	// METODOS
	
	this.ladrar = function () {
		console.log("guau guau guauu dame kroquetas");
	};
	this.saludar = function () {
		console.log(`me llamo ${this.name}`);
		
	}
}

const marre = new animal("tuty", "femenino"),
	dogui = new animal("dogui", "masculino");

console.log(marre);
console.log(dogui);
console.log("----------------------------------------------")
// FUNCION CONSTRUCTORAS DECLARADA DE MANERA OPTIMA 

function animal2(name,genero,color) {
	// ATRIBUTOS
	this.name = name;
	this.genero = genero;
	this.color = color;
}

// METODOS
animal2.prototype.sonar = function () {
console.log("sonidoooooooooooooo-------")	
};

animal2.prototype.saludo = function () {
console.log("holaaaa guau guau")	
};

const lolabunny = new animal2("lola", "femenino", "cafe"),
	mikimause = new animal2("mikimause", "masculino", "negro");

console.log(lolabunny);
console.log(mikimause);


// HERENCIA PROTOTIPICA

function perro (name,genero,tamanio) {
	this.super = animal2;
	this.super(name,genero);
	
	this.tamanio = tamanio;
}

// hereandado de animal2
perro.prototype = new animal2();
perro.prototype.constructor = perro;


// SOBREESCRIBIENDO METODOS DEL PROTOTIPO PADRE EN EL HIJO
perro.prototype.saludo = function () {
	console.log("hola soy kira");
	
}

const kira = new perro("kira", "femenino", "mediano");

console.log(kira)
