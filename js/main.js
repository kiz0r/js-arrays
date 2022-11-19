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

// Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).
// 8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10).
// 9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3).
// 10 Вивести елементи масиву, зведені у куб.
// 11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує.
// 12 *Перевірити, чи всі елементи масиву є парними числами (* або простими числами).
// 13 *Перевірити, чи є у масиві бодай один від'ємний елемент.
