// Створи функцію, яка буде виводити кількість переданих їй аргументів

function argumentsLength(a, b, c, d, e, f, g) {
    console.log(arguments.length)
}

console.log('Ця функція виводить кількість аргументів:');
argumentsLength(1, 3, 6, 5);

//Напиши функцію, яка приймає 2 числа і повертає :
//   -1, якщо перше число менше, ніж друге;
//    1 - якщо перше число більше, ніж друге;
//    0 - якщо числа рівні.

function getNumbers(a, b) {
    if (a < b) {
        console.log(-1);
    } else if (a > b) {
        console.log(1);
    } else {
        console.log(0);
    }
}

console.log('Ця функція виводить 1, -1 або 0 в залежності від співвідношення аргументів:');
getNumbers(5, 7);


//Напиши функцію, яка обчислює факторіал переданого їй числа
function countFactorial(a) {
    if (a === 0 || a === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = a; i >= 1; i--) {
            result *= i;
        }
        console.log(result);
        return result;
    }
}

console.log('Ця функція рахує факторіал:');
countFactorial(5);


//Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function numToString(a, b, c) {
    let aStr = a.toString();
    let bStr = b.toString();
    let cStr = c.toString();
    let result = aStr + bStr + cStr;
    console.log(result);
}
console.log('Ця функція перетворює циферки на стрінгу:');
numToString(5, 1, 4);


//Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function countArea(height, width = height) {
    let result;
    if (arguments.length === 1) {
        result = height * height;
    } else {
        result = height * width;
    }
    console.log(result);
}
console.log('Ця функція рахує площу прямокутника, а якщо аргумент один - то квадрата!');
countArea(5, 6);