// Cette fonction deux nombres en params et permet de renvoyer un tableau de multiples d'un de ces nombres.

function arrayOfMultiples(num, length) {
    var multiples = [];
    var counter = length
    while (multiples.length < length) {
      multiples.unshift(num * counter);
      counter-=1
    }
    return multiples ;
  }