//////////////////////////////////////////////////////// - 29-06

let obj = {
  number: 100,
  string: 'this is JS, babby',
  bigInt: 555n,
  object: {name: "User", age: 33},
  boolean: true,
  null: null,
  undefined: undefined,
  symbol: Symbol(),
}
/// как получить вложенные св-ва:
obj.object            // получаем ОБ {name: "User", age: 33}
obj['object']         // получаем то же самое - ОБ {name: "User", age: 33}
obj.object.name       // получаем ОБ {name: "User", age: 33}, из которого получаем значение name, которое равняется "User"
obj['object']['name'] // получаем ОБ {name: "User", age: 33}, из которого получаем значение name, которое равняется "User"
obj['object'].name    // получаем ОБ {name: "User", age: 33}, из которого получаем значение name, которое равняется "User"
obj.object['name']    // получаем ОБ {name: "User", age: 33}, из которого получаем значение name, которое равняется "User"

obj.object.name.charAt.apply.length.toString().lastIndexOf().toFixed().length.toString().charCodeAt() /* ... */

////////////////////////////////////////////////////////

let empty = {}
empty.objectEm = obj.object;
empty.isAdmin = false;
setName = 'this is JS, babby';
empty.isAdmin = obj.string === setName;
empty['key'] = 'true' + 'false';
empty['hide den'] = 'hidden';               // через точку не пробиться (empty.hide den)
empty[Symbol('hidden')] = Symbol('hidden'); // через точку не пробиться, нельзя вообще получить (любое значение в правой части)
let keyname = Symbol('hidden');
empty[keyname] = 'hidden Symbol "hidden Symbol"'; // через точку не пробиться
console.log(empty[keyname]); 
delete empty.isAdmin;
delete empty['hide den'];
delete empty[keyname];

///////////////////////////////////////////////////////

function kiss() {}   // Декларейшн

let objMane = {
  eat: function() {  }, // метод
  sleep: () => {  },    // метод
  live() {  },          // метод - только внутри ОБ!!!
  love: kiss            // метод
} 
objMane.drink = function() {  }     // метод
objMane.think = () => {  }          // метод
objMane.enjoy = bliss               // метод
let bliss = function() {  } // Экспрешн

////////////////////////////////////////////////////////
// создать ОБ с 3 методами: min, max, sum, каждый метод принимает 2 аргумента; 
// возвращают минимальное, максимальное и сумму соответственно
let calc = {
  min(a, b) {
    if (a <= b) { 
      return a
    } 
    return b
  },
  max(a, b) {
    return a >= b ? a : b   // ТЕРНАРНЫЙ !!!!!!!! оператор, сокращ. форма IF-ELSE
  },
  sum(a, b) { 
    return a + b            
  }
}

////////////////////////////////////////////////////////
a >= b ? a : b   // ТЕРНАРНЫЙ !!!!!!!! оператор, сокращ. форма IF-ELSE
a + b            // бинарный оператор
+a               // унарный оператор
////////////////////////////////////////////////////////


//////////////////////////////////////////////////////// 30-06
// создать ОБ с 2 методами - 1 принимает 2 аргумента - ключ key и значение value, и записывает в ОБ 
// новое свойство с ключом key и значением value); 
// 2 - принимает 1 аргумент key и создает новое св-во под этим ключом и значением value из метода 1,
// при этом удаляет св-во, заданное методом 1

let obj = {
  method1(key, value) {
    this[key] = value;    //this - обозначает ЭтотОбъект, key - любое приходящее значение;
    // this[key] - это получение св-ва их текущего ОБ с ключом key
    this.keyFromMethod1 = key;
    // this.keyFromMethod1.writable = true   
  },
  method2(key) {
    this[key] = this[this.keyFromMethod1];
    delete this[this.keyFromMethod1] //this.keyFromMethod1 - является переменной, которая содержит ключ 
    // из method1,
    // поэому удаляется св-во с этим ключом 
    delete this.keyFromMethod1 // удаляем само св-во keyFromMethod1
  }
}

////////////////////////////////////  ФУНКЦИИ  ////////////////////

// создание ф-ции ДЕКЛАРЕЙШН под именем func с параметрами a и b, которая сразу же инициализируется и может использоваться 
// !!!!!!!!!!!! в любом месте кода !!!!!!!!!!!!!!!!!!!!!!
function func(a, b) { ... } 

// создание ф-ии ЭКСПРЕШН, сначала создается переменная под именем sum; может использоваться только после 
// присвоения самой ф-ции с параметрами a и b, т.е., после объявления sum (по тексту модуля ниже)
let sum = function(a, b) { ... }

// создание АРРОУ - СТРЕЛОЧНОЙ ф-ции, сначала создается переменная под именем count; может использоваться 
// после присвоения самой стрелочной ф-ции с параметрами a и b
let count = (a, b)  => { ... }

let out = (a, b)  => {  // ф-ция 1 принимает 2 параметра (a, b) и возвращает НОВУЮ Ф-ЦИЮ
  // параметр (a) из ф-ции 1 и параметр (b) из ф-ции 1 видны и готовы к использованию
  // параметр (a) из ф-ции 2 не виден и не существует 
  return (a) => { ...  // НОВАЯ Ф-ЦИЯ 2, принимает 1 параметр (a)
    // параметр (a) из ф-ции 2 не равен параметр (a) из ф-ции 1;
    // параметр (a) из ф-ции 1 перезатирается параметр (a) из ф-ции 2
    console.log(b)
    // параметр (b) из ф-ции 1 виден внутри ф-ции 2! и замыкается ею! 
    // от использования в коде (в данном случае в console.log)
  }
} 
let result = out // переменной result присваивается ЗНАЧЕНИЕ out, т.е. ф-ция 1
let result = out(2, 5) // переменной result присваивается РЕЗУЛЬТАТ ВЫЗОВА out, т.е., ф-ция 2, с аргументами (2, 5),
// которые соответствуют параметрам ф-ции 1, т.е., a = 2, b = 5 
result(6)  // получаем РЕЗУЛЬТАТ ВЫЗОВА ф-ции 2 с аргументом (6), который соответствует параметру (a) из ф-ции 2, т.е.  a = 6
let l = out(4, 5)(8) // получаем сначала РЕЗУЛЬТАТ ВЫЗОВА ф-ции 1 с аргументами (4, 5), который является ф-цией 2; 
// а потом сразу вызываем её (ф-цию 2) с аргументом (8) и получаем РЕЗУЛЬТАТ ВЫЗОВА ф-ции 2, и присваиваем этот результат в переменную l  


////////////////////////////////////////////////////////
// создать ф-цию, которая будет принимать 3 параметра obj, f и methodKey, она будет записывать в obj ф-цию f под ключом methodKey
function func(obj, f, methodKey) {
  obj[methodKey] = f
  return obj
}
sum = func({}, function() {}, 'outResult')



////////////////////////////////////////////////////////
// создать ф-цию, которая принимает 1 парам - массив ОБ и возвращает новосозданный ОБ; каждый ОБ в массиве имеет 2 св-ва
// под ключами key, func. Новосозданный ОБ будет состоять из преобразованных ОБ массива, где ключ - key, значение - func.
function createObj(arr) {
  let obj = {};
  for ( let i = 0; i < arr.length; i++ ) {
      // newKey = Object.values(arr[i])[0];
      // newVal = Object.values(arr[i])[1];
      // obj[newKey] = newVal
      obj[arr[i].key] = arr[i].func
    }
  return obj
}  
вариант forEach
let arrow = (arr) => {
  let obj = {}
  arr.forEach(el => {
    obj[el.key] = el.func
  });
  return obj
}
arrow([{key: 'key', func: () => {}}, {key: 'keys', func: function() {}}])

////////////////////////////////////////////////////////
// создать ф-цию, которая принимает 3 парам - 2 числа и 1 boolean; возвращ. ОБ, который содержит сумму 2-х чисел, умножение,
// разницу, деление и возведение в степень - 1 и 2 парам; если boolean = true, то вычисление дублируется и дял отрицат. значений
// парам 1 и 2.
function createObj(a, b, isNegative) {
    let obj = {};
    obj.sum = a + b;
    obj.umn = a * b;
    obj.raz = a - b;
    obj.del = a / b;
    obj.pow = Math.pow(a, b);
    // if (isNegative) {
    //   obj.sumNeg = - obj.sum;
    //   obj.umnNeg = - obj.umn;
    //   obj.razNeg = - obj.raz;
    //   obj.delNeg = obj.del;
    //   obj.powNeg = Math.pow(-a, -b); 
    // }
    if (isNegative) {
      obj.neg = createObj(-a, -b, false);
    }
    return obj
}  

////////////////////////////////////////////////////////
// создать ф-цию, которая имеет 1 парам ОБ и возвращает стринговое представление этого ОБ; JSON не использовать!
// продумаnь вариант со вложенностями
function objToString(obj) {
  let arr = Object.entries(obj)
  let str = '{'
  arr.forEach(el => {
    if (typeof (el[1]) !== 'object') {
      str += el[0] + ': ' + el[1] + (el === arr[arr.length - 1] ? '' : ', ')
    } else {
      str += el[0] + ': ' + objToString(el[1]) + ', '
    }
  });
  str += '}'
  return str
}

// '{"sum":9,"umn":20,"raz":1,"del":1.25,"pow":625,"Neg":{"sum":-9,"umn":20,"raz":-1,"del":1.25,"pow":0.0015999999999999999}}'

// Витюша, [04.07.2024 15:30]
function objToString(obj) {
  let arrayOfKeys = Object.keys(obj)
  let str = '{'
  arrayOfKeys.forEach(key => {
    str += ${key}: ${createStringFromDataObject(obj[key])}, 
  });
  function createStringFromDataObject(data) {
    if (data === null) {
      return null
    } else if (typeof data === 'undefined') {
      return undefined
    } else if (typeof data === 'symbol' || typeof data === 'bigint') {
      return ${data.toString()}
    } else if (typeof data === 'object') {
      return objToString(data)
    }
    return data
  }
  str += '}'
  return str
}

function objToString(obj) {
  function createStringFromDataObject(data) {
    if (data === null) {
      return null
    } else if (typeof data === 'undefined') {
      return undefined
    } else if (typeof data === 'symbol' || typeof data === 'bigint') {
      return ${data.toString()}
    } else if (typeof data === 'object') {
      return objToString(data)
    }
    return data
  }
  return `{ ${Object
    .keys(obj)
    .map(key => ${key}: ${createStringFromDataObject(obj[key])}, )
    .join('')
  }}`
}

"{ number: 5, string: 5, bigInt: 5, boolean: true, symbol: Symbol(), null: null, undefined: undefined, object: { number: 5, }, }"
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////

////////////////////////////////////////////////////////