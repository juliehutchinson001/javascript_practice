// 3) Write a function that looks at a string and 
// scrambles the letters between the first and last. 
// This function should take in a String as a parameter, 
// and return a String. The first letter and the last 
// letter of the param String should stay, the letters 
// between the first and last will be shuffled/randomized/scrambled. 

// 2) Write a function that takes a string splits 
// the words into an array of strings and scrambles 
// each word using the function above. Then scramble the quote.

var words = "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world."

// var wordsArray = words.split(" ");

function randomizeWord(word) {
  
  var maxInd = word.length - 1;

  function _getRndInd(min, max) {
      return Math.floor(Math.random() * (max - min) ) + min;
  }

  var pickedIndxs = [];
  var randInd = _getRndInd(1, maxInd);
  var result = word[0];
  
  var notInArr = !pickedIndxs.includes(randInd);
  var resultNotFinished = result.length !== word.length;

  while (resultNotFinished) {
    
    if (notInArr) {
      result += word[randInd];
      
    }
      
    pickedIndxs.push(randInd);
    randInd = _getRndInd(1, maxInd);
    notInArr = !pickedIndxs.includes(randInd);
    resultNotFinished = result.length !== word.length;
  }
  
  return result + word[maxInd];
  
}

// console.log(randomizeWord('helloWorld'));

function randomizeSentence(sentence) {
  var sentenceArr = sentence.split(' ');
  
  var result = '';
  for (let word of sentenceArr) {
    result += ' ' + randomizeWord(word);
  }
  
  return result;
  
}

console.log(randomizeSentence('hello world'));











