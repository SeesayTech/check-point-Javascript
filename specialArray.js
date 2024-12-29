// Cette fonction permet de dire si un tableau est spécial
function isSpecialArray(arr) {
  function verif(elem, index) {
    return (
      (index % 2 === 0 && elem % 2 === 0) || (index % 2 !== 0 && elem % 2 !== 0)
    );
  }
  return arr.every(verif);
}
