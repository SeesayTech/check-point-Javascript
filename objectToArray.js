// Cette fonction permet de convertir un objet( clé, valeur) en tableau de tableau

function objectToArray(obj) {
	arr = Object.entries(obj);
	return arr;
}