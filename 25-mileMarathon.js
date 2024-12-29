function marathonDistance(d) {
  var distance = 0;
  for (i of d) {
    distance += Math.abs(i);
  }
  if (distance === 25) {
    return true;
  } else {
    return false;
  }
}
