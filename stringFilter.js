// Cette fonction permet de filtrer les données du tableau qui ne sont pas number

function string_filter(arr) {
	
  let numb = arr.filter((arr) => typeof arr === "number");
  return numb;

}