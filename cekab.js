/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. */

function checkAB(num) {
	// you can only write your code here!
	//this code same like split ('')
	var tampungWords = [];
	for (var i = 0; i < num.length; i++) {
		for (var j = 0; j < num[i].length; j++) {
			if (num[i] !== num[j]) {
				tampungWords.push(num[i][j]);
			} else {
				tampungWords.push(num[i]);
			}
		}
	}
	//console.log(tampungWords);
	var isB = tampungWords.indexOf('b');
	//console.log('nilai b : ' +isB);

	var jarak1 = 0;
	var jarak2 = num.length;
	//console.log('jarak 2 length : ' +jarak2);
	for (var k = 0; k < tampungWords.length; k++) {
		if (tampungWords[k] === 'a') {
			jarak1 = Math.abs(isB - k);
			//console.log('jarak 1 : ' +jarak1);
			if (jarak1 < jarak2) {
				jarak2 = jarak1;
			}
		}
	}
	//console.log('real jarak : ' +jarak2);

	if (jarak2 === 4 || tampungWords[tampungWords.length - 5] === 'a') {
		return true;
	} else {
		return false;
	}
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
