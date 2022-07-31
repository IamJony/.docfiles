const aray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const aray2 = [10, 11, 12, 13, 14];

// spread operator usado para unificar aray1 y aray2

const aray3 = [...aray1, ...aray2];

// imprimiendo el arreiglo numero 3 unificado con spread

for (i = 0; i <= aray3.length; i++) {
	console.log(aray3[i]);
}
