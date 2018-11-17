function totalizer(obj) { //calculates score of each word 
  var wordScore = 0;
  var arr = Object.values(obj);

  for (n = 0; n < arr.length; n++) {

    if (arr[n] > 1) {
      wordScore += arr[n];
    }
  }
  return wordScore;
}

function hitungHuruf(kata) {
  let sentence = kata.split(" "); //results in array of words in 'kata' sentence
  let max = 0;
  let maxWord;
  for (let k = 0; k < sentence.length; k++) { //loop over sentence  
    let word = sentence[k]; //k is the iteration variable 
    var letterList = {}
    letterList[word[0]] = 1
    var repeatLetter = true; //initiates object
    for (let i = 1; i < word.length; i++) { //loop over chars in word             
      if (letterList.hasOwnProperty(word[i]) === false) {
        repeatLetter = false;
      } else {
        repeatLetter = true; //means the char (word[i]) exists! 
      }
      if (repeatLetter === false) {
        letterList[word[i]] = 1; //add new unique letters as object keys           
      } else {
        letterList[word[i]] += 1; //increase value of existing letters in object
      }
    }
    if (max < totalizer(letterList)) {
      max = totalizer(letterList);
      maxWord = word;
    }
  }
  return maxWord
}


// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developeeeeer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau