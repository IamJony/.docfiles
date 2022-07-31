const pi = Math.PI;
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function multiplica (a,b) {
	return a * b;
	
}
export const aritmetica = {
	pi,
	multiplica
};

export default function saludo () {
	console.log("hola soy un export default solo puedo existir una vez");
}
