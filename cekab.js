/*
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. */


function checkAB(str) {
    var a = "a"
    var b = "b"
    for (i = 0; i <= str.length - 1; i++) {
        if (str[i] === a && str[i + 4] === b) {
            return true
        } else if (str[i] === b && str[i + 4] === a) {
            return true
        }
    }
    return false
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
