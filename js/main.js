// 0 Створити числовий масив та проініціалізувати його (*випадковими числами).
// 1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
// 2 Вивести розмір масиву.
// 3 Зробити копію масиву.

/* Note :
    - use .shift() when you want to delete the first element of your array
    - use .pop() when you want to delete the last element of your array
    - use .unshift() when you want to add the last element to your array
    - use .push() when you want to add the first element to your array use
*/

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('arrayOfNumbers : ', arrayOfNumbers);

arrayOfNumbers.shift(); // delete the first element of the array
arrayOfNumbers.pop(); // delete the last element of the array
arrayOfNumbers.unshift(15); // add the first element of the array
arrayOfNumbers.push(42); // add the last element of the array

console.log('arrayOfNumbers after all changes : ', arrayOfNumbers);

// output length of array
console.log('Lenght of arrayOfNumbers : ', arrayOfNumbers.length);

// first method of copy
const arrayOfNumbers1 = [...arrayOfNumbers];
console.log('The first copy of arrayOfNumbers : ', arrayOfNumbers1);

// second method of copy
const arrayOfNumbers2 = arrayOfNumbers.slice();
console.log('The second copy of arrayOfNumbers : ', arrayOfNumbers2);

// third method of copy
const arrayOfNumbers3 = Array.from(arrayOfNumbers);
console.log('The third copy of arrayOfNumbers : ', arrayOfNumbers3);

//  Не використовувати методи перебору масивів (forEach, filter, map, findIndex), а використати цикли
// 4 Вивести елементи з парними індексами.
// 5 Вивести лише парні елементи (парні числа діляться на 2 без залишку).
// 6 Вивести індекси нульових елементів (елемент дорівнює нулю).
// 7 Підрахувати кількість нульових елементів.

console.group('Output elements of array with paired index : ');
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (i % 2 === 0) {
    console.log(arrayOfNumbers[i]);
  }
}
console.groupEnd();

console.group('Output paired elements of array : ');
for (let i = 0; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] % 2 === 0) {
    console.log(arrayOfNumbers[i]);
  }
}
console.groupEnd();

// array with zeros
const array1 = [-7, 5, 0, 1, 0, -2, 0, 6, 8, 0, 11, 0, 0];

console.group('Indexes, which consist 0 ');
for (let i = 0; i < array1.length; i++) {
  if (array1[i] === 0) {
    console.log('index, which consists 0 : ' + i);
  }
}
console.groupEnd();

let sumOfIndexes = 0;

for (let i = 0; i < array1.length; i++) {
  if (array1[i] === 0) {
    sumOfIndexes++;
  }
}

console.log('Sum of zero elements = ', sumOfIndexes);

// Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).
// 8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).
// 9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3).
// 10 Вивести елементи масиву, зведені у куб.
// 11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує.
// 12 *Перевірити, чи всі елементи масиву є парними числами (* або простими числами).
// 13 *Перевірити, чи є у масиві бодай один від'ємний елемент.

// delete all zeros in array
const unformattedArray = [-1, 5, 0, 9, -10];

const formattedArray = unformattedArray.filter(
  (currentValue) => currentValue !== 0
);

console.log('Formatted array without zeros : ', formattedArray);

// divide all elements of array by 100
const needToDivideArray = [99, 5, 0, 9, 30];

function divideBy100(currentValue) {
  return currentValue / 100;
}

const dividedArray = needToDivideArray.map(divideBy100);

console.log('array which was divided by 100 : ', dividedArray);

// output all elements of the array in the third power
function toThirdPower(currentValue, index, array) {
  console.log(`${array[index]}^3 = ${currentValue ** 3}`);
}

console.group('All elements of array in the third power : ');
unformattedArray.forEach(toThirdPower);
console.groupEnd();

// delete element of array, square of which is 100 or output message 'there is no element square of which is 100'
const find10 = (item) => item ** 2 === 100;

function deleteElementFromArray(array, indexToDelete) {
  if (indexToDelete !== -1) {
    array.splice(indexToDelete, 1);
    return 'Element was successfully deleted.';
  } else {
    return 'There is no element to delete.';
  }
}

const thereIs100 = [-8, 0, 5, -2, 10, 11, -10];

let foundIndex = thereIs100.findIndex(find10);

console.log(
  deleteElementFromArray(thereIs100, foundIndex),
  'Array : ',
  thereIs100
);

const thereIsNot100 = [-5, 7, 99, 3, 0, -2, 1];

foundIndex = thereIsNot100.findIndex(find10);

console.log(
  deleteElementFromArray(thereIsNot100, foundIndex),
  'Array : ',
  thereIsNot100
);

// are there all elements of an array paired ?
const pairedArray = [0, 2, 4, 6, 8, 10, 12];
const unpairedArray = [0, 2, 4, 6, 7, 8, 10, 12];

const isPaired = function (array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      counter += 1;
    }
  }
  if (counter === array.length) {
    return `All elements in this array are paired.`;
  } else {
    return `There are not paired elements or not all elements in this array are paired.`;
  }
  // неработающая тернарка
  // counter === array.length
  //   ? `All elements in this array are paired`
  //   : `There are not paired elements or not all elements in this array are paired`;
};

console.log(isPaired(pairedArray)); // test 1 => successfull
console.log(isPaired(unpairedArray)); // test 2 => successfull

// at least one negative element ?
const arrayWithNegative = [-8, 1, 6, 0];
const arrayWithoutNegative = [8, 1, 6, 0];

const atLeastOneNegative = function (array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      counter += 1;
    }
  }
  if (counter === 0) {
    return `In this array there are not any negative elements.`;
  } else {
    return `In this array are located ${counter} negative element(s).`;
  }

  // неработающая тернарка
  // counter === 0
  //   ? `In this array there are not any negative elements.`
  //   : `In this array are located ${counter} negative elements`;
};

console.log(atLeastOneNegative(arrayWithNegative));
console.log(atLeastOneNegative(arrayWithoutNegative));
