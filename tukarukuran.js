// Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

function tukarBesarKecil(kalimat) {
	// you can only write your code here!
	var tampungWords = [];
	for (var i = 0; i < kalimat.length; i++) {
		for (var j = 0; j < kalimat[i].length; j++) {
			if (kalimat[i] !== kalimat[j]) {
				tampungWords.push(kalimat[i][j]);
			} else {
				tampungWords.push(kalimat[i]);
			}
		}
	}
    //console.log(tampungWords);
    
	//change nilai array dengan besar-kecil huruf
	var isWords = [];
	for (var x = 0; x < tampungWords.length; x++) {
		if (tampungWords[x] === tampungWords[x].toUpperCase()) {
			isWords.push(tampungWords[x].toLowerCase());
		} else {
			isWords.push(tampungWords[x].toUpperCase());
		}
	}

	//cari hasil penambahan string untuk mendapatkan hasil akhir
	var hasilWords = '';
	for (var y = 0; y < isWords.length; y++) {
		hasilWords += isWords[y];
	}
	//console.log(hasilWords);
	return hasilWords;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"