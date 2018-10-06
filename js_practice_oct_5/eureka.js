/*
. print list of numbers within range [a, e] == [a, b, c, d, e]
  . get range's length
  . create a loop to verify condition
  . push number if condition is met

. find numbers that a^1 + b^2 === ab 89 === 8^1 + 9^2
  . convert number to string
  . separate number by index (str are arr of chars low-level (C++, C)) and change each indiv digit to integer
  . Math.pow the indiv num by 1 ... 2... 3... etc
  . add resulting numbers
  . check if result meets condition

. push numbers to list [] and send result
  . send empty list if no number
*/


const eurekaNum = (rangeNums) => {

  // rangeNums = [1, 100] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89];
  const initRange = rangeNums[0];
  const endRange = rangeNums[1];
  let numS = '';
  let eachNumArr = [];
  let expoCtr = 1;
  let eachNum;
  let specNum = 0;
  let finalNumArr = [];

  for (let num = initRange ; num <= endRange ; num++) {
    numS = num.toString();
    eachNumArr = numS.split('');

    for (let newNum of eachNumArr) {

      eachNum = parseInt(newNum);
      specNum += Math.pow(eachNum, expoCtr++);

    }

    if(specNum === num) {
      finalNumArr.push(specNum);
    }

  }

  return finalNumArr;

};
