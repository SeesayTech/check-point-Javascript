function Sym_number(num) {
	traitedNum = num.toString().split("").reverse().join("");
	if(Number.parseInt(traitedNum)!==num){
		return false;
	}
	else{
		return true;
	}
}