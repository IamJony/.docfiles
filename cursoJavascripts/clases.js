class Animal {
	// ATRIBUTOS
	constructor(name, genero) {
		this.name = name;
		this.genero = genero;
	}

	// METODOS
	sonido() {
		console.log("sonido de Animal");
	}

	saludo() {
		console.log(`hola me llamo ${this.name} y mi genero es ${this.genero}`);
	}
}

const firulais = new Animal("firulais", "macho"),
	scobby = new Animal("scobby", "masculino");

	console.log(firulais);
	console.log(scobby);

// como heredar

class Perro extends Animal {
	
	constructor(name, genero, tamanio, raza) {
		super(name, genero);
		this.tamanio = tamanio;
		this.raza = raza;
	}

	sonido() {
		console.log("guau guau asi ladra un perro");
	}

	saludo(){
		console.log(`hola soy ${this.name} y mi genero es ${this.genero} y soy de temaño ${this.tamanio}`)
	}

	static funcionEstatica(){console.log("this is function statica");}

	get getRaza() {
		return this.raza;
	}

	set setRaza(raza) {
		this.raza = raza;
	}
}

const marre = new Perro("marre", "femenino", "mediano");

	console.log(marre);
	console.log(marre.getRaza);
	marre.setRaza = "Chanda"

class user1 {
	constructor(nickname, arena, score){

		this.nickname = nickname;
		this.score = score;
          	this.arena = arena;

	}

	intro(){console.log(`hola me presento mi nombre es ${this.nickname}`);}
}



const spartan117 = new user1("spartan117", "11", "2000");


class userMaster extends user1 {
	constructor(nickname, arena, score, rango) {

		super(nickname,score,arena);
		this.rango = rango;
	}

	intro(){console.log(`hola soy ${this.nickname} mi rango es ${this.rango}`);}

}


const morty = new userMaster("morty", "12", "20000", "veterano");

	Perro.funcionEstatica();
