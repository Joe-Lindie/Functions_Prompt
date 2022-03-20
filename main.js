// NO. 1 - HELLO USER

const helloUser = (name) => `Hello, ${name}!`;

console.log(helloUser("James"));

//NO. 2 - WHAT TYPE?

const checkTypeOf = (checkType) => typeof checkType;

console.log(checkTypeOf("Is this string?")); //string
console.log(checkTypeOf(1)); // number
console.log(checkTypeOf(["name", 1])); // object
console.log(checkTypeOf(true)); // boolean

//NO. 3 - CHECK LENGTH

const checkLength = (input) => input.length;

console.log(checkLength(["joe", "john", "jack"]));
// It returns number of items in an array
console.log(checkLength("Around the World"));
// The count includes white spaces

//NO. 4 - SUM OF TWO NUMBERS

const sumOfTwoNumbers = (num1, num2) => num1 + num2;

console.log(sumOfTwoNumbers(25, 25));

//NO. 5 - ADD AND MULTIPLY

const addAndMultiply = (num1, num2, num3, num4) =>
  (num1 + num2) * (num3 + num4);

console.log(addAndMultiply(2, 3, 4, 5));

// Attempt using spread operator
const numbers = [2, 3, 4, 5];
console.log(addAndMultiply(...numbers));

//NO. 6- RETURN LARGER

const returnLargerNumber = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};

console.log(returnLargerNumber(22, 21));

//NO. 7 - SUM OF ELEMENTS

/*
const sumOfElements = (array) => {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};
console.log(sumOfElements([4, 7, 12, 11]));
*/

const sumOfElements = (array) => {
  let total = 0;

  array.forEach((number) => {
    total += number;
  });
  console.log(total);
};
sumOfElements([4, 7, 12, 11]);

//NO. 8 - SQUARING A NUMBER

const squareNumber = (num) => num * num;
console.log(squareNumber(24));

//NO. 9 - ODD OR EVEN

const oddOrEven = (num) => {
  return num % 2 === 1 ? "Odd" : "Even";
};
console.log(oddOrEven(6));

//NO. 10 - SUM OF POSITIVE

const sumOfPositiveNumbers = (array) => {
  let total = 0;
  const negative = [];

  for (i = 0; i < array.length; i++) {
    array[i] < 0 ? negative.push(array) : (total += array[i]);
  }
  return total;
};
console.log(sumOfPositiveNumbers([-2, -3, -4]));
