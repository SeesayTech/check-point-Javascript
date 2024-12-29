// Cette fonction permet de trouver le plus petit nombre et le plus grand nombre

function numberFinder(tab) {
  let smallest = Math.min(...tab);
  let biggest = Math.max(...tab);
  return [smallest, biggest];
}