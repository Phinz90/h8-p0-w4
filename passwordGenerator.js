/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi.
*/



function changeVocals(str) {
  //code di sini
  //console.log(str);
  var vokal = 'aAiIuUeEoO';
  var konsonan = 'bBjJvVfFpP';
  var tampungWords = '';

  for (var i = 0; i < str.length; i++) {
    var inisial = false;
    for (var j = 0; j < vokal.length; j++) {
      if (str[i] === vokal[j]) {
        tampungWords += konsonan[j];
        inisial = true;
      }
    }
    if (inisial === false) {
      tampungWords += str[i];
    }
  }
  //console.log(tampungWords);
  return tampungWords;
}

function reverseWord(str) {
  //code di sini
  var tampungWords = '';
  for (var i = str.length - 1; i >= 0; i--) {
    tampungWords += str[i];
  }
  //console.log(tampungWords1);
  return tampungWords;
}

function setLowerUpperCase(str) {
  //code di sini
  var tampungWords = [];
  for (var j = 0; j < str.length; j++) {
    if (str[j] === str[j].toLowerCase()) {
      tampungWords.push(str[j].toUpperCase());
    } else {
      tampungWords.push(str[j].toLowerCase());
    }
  }
  //console.log(tampungWords2.toString());
  return tampungWords;
}

function removeSpaces(str) {
  //code di sini
  var tampungWords = [];
  for (var k = 0; k < str.length; k++) {
    if (str[k] !== ' ') {
      tampungWords.push(str[k]);
    }
  }
  //console.log(tampungWords4);
  return tampungWords;
}

function passwordGenerator(name) {
  //code di sini
  if (name.length <= 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }

  var code1 = changeVocals(name);
  //console.log(code1);
  var code2 = reverseWord(code1);
  //console.log(code2);
  var code3 = setLowerUpperCase(code2);
  //console.log(code3);
  var code4 = removeSpaces(code3);
  //console.log(code4);
  var hasilCode = '';
  for (var i = 0; i < code4.length; i++) {
    hasilCode += code4[i];
  }
  return hasilCode;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'