// Замените for на while
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
//  for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

let i = 0; 
while (i < 3) {
  alert( `number ${i}!` );
  i++;  
}

// Повторять цикл, пока ввод неверен
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

let a = 0;
while (a <= 100) {
  a = prompt("Введите число больше 100");
  if (a === null) {
    break
  }
}

// Выведите чётные числа
// При помощи цикла for выведите чётные числа от 2 до 10.
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// если до 10 не включительно, то строгое равенство в for i < 10




// Перепишите код используя операторы ??, ??=
// Перепишите этот код используя операторы нулевого слияния и присваивания.

// let num1 = 10,
//     num2 = 20,
//     result;
// if (result === null || result === undefined) {
//   if (num1 !== null && num1 !== undefined) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }
let num1 = 10,
    num2 = 20,
    result;
 
result ??+ (num1 ?? num2);
   



// Проверка логина
// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене или в случае если ничего не введено – «Отменено».
let value = prompt('Кто там?', '');
    if (value == 'Админ') {
      let pass = prompt('Пароль?', '');
      if (pass == 'Я главный') {
        console.log('Здравствуйте!');
      } else if (pass == null) {
        console.log('Отменено');
      } else {
        console.log('Неверный пароль');
    }
  } else if (!value == 'Админ') {
      console.log('Я вас не знаю');
  } else {
      console.log('Отменено');    
}



// Вывести простые числа
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

let l = +prompt("Введите начало интервала", 2);
let n = +prompt("Введите границу интервала", 10);
if (l > n) { 
  alert("Неверно задан интервал чисел,l>n"); 
  renurn; 
}
label: for (let i = l; i <= n; i++) {
  if (i % 2 === 0 && i != 2) {
    continue;
  }
  if (i === 1 || i === 2) {
    console.log(i); 
    continue;
  }
  for (let j = l; j <= n; j++) {
    if (i === j || j === 1 || j === 2 || j > i) {
    continue;
  }  
    if (i % j === 0) {
      continue label;
    }  
    } console.log(i); 
}


//////////////////////// FUNCTION \\\\\\\\\\\\\\\\\\

// Функция min(a, b)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
  if (a < b) {
    console.log(a)
  } else {
    console.log(b)
  }
}
let value1 = +prompt('Введите число a');
let value2 = +prompt('Введите число b');
console.log(min(value1, value2));


// Функция pow(x,n)
// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
function pow(a, b) {
  console.log(a ** b)
}
let a = +prompt('Введите натуральное число a');
let b = +prompt('Введите натуральное число b');
if (a < 1 || b < 1 || a % 1 != 0 || b % 1 != 0) { 
  alert("Неверно задано число"); 
  renurn;
}
console.log(pow(a, b));



// Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
let inAge = prompt("Введите Ваш возраст");
console.log(checkAge(inAge))

// Используя оператор ||
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}
let inAge = prompt("Введите Ваш возраст");
console.log(checkAge(inAge))

// Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:

//  function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );
let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () =>  { alert("Вы согласились."); },
  () =>  { alert("Вы отменили выполнение."); }
);