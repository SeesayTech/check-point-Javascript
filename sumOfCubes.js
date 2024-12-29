// Cette fonction permet de renvoyer la somme des cubes des nombres d'un tableau

function sumOfCubes(nums) {
	var result = 0
	  for (num of nums) {
   		result += num ** 3;
  }
  return result;
}