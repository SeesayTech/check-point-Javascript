function countTrue(arr) {
  var counter = 0;
  arr.forEach((elem) => {
    if (elem === true) {
      counter += 1;
    }
  });
  return counter;
}
