// Cette fonction permet d'élever au carré chaque chiffre d'un nombre

function squareDigits(n) {
	return parseInt(n.toString().split('').map((n)=>n**2).join(''));
}