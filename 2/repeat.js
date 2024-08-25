// 12-07-2024/
// создать ф-цию, принимающую 2 парам - str (string) и arrayOfNumbers (массив чисел), и возвр. ОБ с 2 св-вами:
// arrayOfLetters - массив букв из приходящей стринги str, number - число из всех эл-тов arrayOfNumbers;
// разбить задачу на пункты и записать их

//     Решение - разбивка на подзадачи
// 1. описать ф-цию в общем виде, с парам str и arrayOfNumbers
// 2. описать возврат результата, а именно ОБ с 2 св-вами (arrayOfLetters и number)
// 3. создать массив букв из приходящей стринги str и записать в св-во ОБ  (arrayOfLetters: array)
// 4. подсчитать число из всех эл-тов arrayOfNumbers (number: number)
// 5. проверить работу с массивами

function createObj(str, arrayOfNumbers) {
  newstr = '';
  for (i = 0; i < str.length; i++) {
    newstr += str[i] + 'qqq'
  }
  return {
    arrayOfLetters: newstr.split('qqq'),
    number: arrayOfNumbers.reduce((acc, next) => (acc + next)),
  }
}

function createObj(str, arrayOfNumbers) {
  return {
    arrayOfLetters: str.split(''),
    arrayOfLettersSpred: [...str],
    number: arrayOfNumbers.reduce((acc, next) => (acc + next)),
  }
}

// создать ф-цию, принимающую парам массив и возвращ ОБ, кот. столько св-в в виде массивов, сколько разных типов данных в массиве;
// разбить задачу на пункты и записать их
//     Решение - разбивка на подзадачи
// 1. описать ф-цию в общем виде, с парам массив
// 2. описать возврат результата, а именно ОБ с таким кол-вом св-в в видк массивов, сколько различных типов данных в парам (оbj of arrays)
// 3. анализировать типы эл-тов входящего массива и формировать подмассивы  
// 4. записать подмассивы в св-ва ОБ
// 5. проверить работу с массивами
function createObAr(arr) {
  arrOfType = [];
  arrOfArrays = [];
  let  obj = {};
  for (i = 0; i < arr.length; i++) {
    if (arrOfType.indexOf(typeof arr[i]) === -1) {
    arrOfType.push(typeof arr[i]);
    }  
  }
  console.log('arrOfType', arrOfType);
  for (i = 0; i < arrOfType.length; i++) {
    arrOfArrays.push(arr.filter((element) => { 
      return typeof element === arrOfType[i] 
    }) )
      obj[arrOfType[i]] = arrOfArrays[arrOfArrays.length - 1];
  }
  console.log('arrOfArrays', arrOfArrays); 
  return { obj
  }
}

function createObAr(arr) {
  arrOfType = [];
  arrOfArrays = [];
  let obj = {};
  for (i = 0; i < arr.length; i++) {
    if (arrOfType.indexOf(typeof arr[i]) === -1) {
      arrOfType.push(typeof arr[i]);
    }  
  }
  for (i = 0; i < arrOfType.length; i++) {
    arrOfArrays.push(arr.filter((element) => typeof element === arrOfType[i]))
    obj[arrOfType[i]] = arrOfArrays[arrOfArrays.length - 1];
  }
  return obj
}

function createObAr(arr) {
  let obj = {};
  for (i = 0; i < arr.length; i++) {
    obj[arr[i] === null ? 'null' : typeof arr[i]] ??= arr.filter((element) => typeof element === typeof arr[i]);
  }
  return obj
}


// 13-07-2024
// создать ф-цию, принимающую 2 парам - array и number, и возвр. ф-цию, принимает парам из isNumber, тип булево, и возвращает в зав-ти 
// от знач isNumber нужный парам из верхней ф-ции
//     Решение - разбивка на подзадачи
// 1. описать ф-цию в общем виде, с парам массив и число
// 2. описать возврат результата, а именно ф-цию, приним. парам из isNumber, тип булево, и возвр. нужный парам из верхней ф-ции в зав-ти от знач isNumber 
// 3. описать возвр. ф-цию   
// 4. возвр. нужный парам из верхней ф-ции в зав-ти от знач isNumber
// 5. проверить работу 
function createFunction(array, number) {
  return function (isNumber) {
    return isNumber ? number : array
  }
}

// создать конструктор, кот. возвращ. ОБ с 5 св-вами - 3 св-ва и 2 метода
//     Решение - разбивка на подзадачи
// 1. описать ф-цию - конструктор в общем виде
// 2. описать возврат результата, а именно ОБ с 3 св-вами и 2 методами
// 3. проверить работу   
function CreateObject() {
  return {
    smile: true,
    level: 90,
    boring: false,
    isHappy() {
      return this.smile && this.level > 70
    },
    countPror() {
      return Object.keys(this).length
    }
  }
}


// 14-07-2024
// создать ф-цию, принимащую arrayOfArrays, каждый из которых будет заменен на рез-т работы ф-ции, которую мы туда передаем inputFunction
//     Решение - разбивка на подзадачи
// 1. описать ф-цию в общем виде, с парам arrayOfArrays и ф-цию inputFunction
// 2. описать возврат результата, а именно массив в результати работы ф-ции inputFunction
// 3. создать массив результатов выполнения ф-ции inputFunction для каждого эл-та массива arrayOfArrays
// 4. проверить работу с массивами
function changeArray(arrayOfArrays, inputFunction) {
  return arrayOfArrays.map((element) => inputFunction(element))
}


//  создать 3 ф-ции - 1-я принимает 2 парам и возвращает знач, переведенные в рандомный тип данных для каждого парам;
// 2-я - принимает 2 парам и возвращ. большую текстовую строку, внутри кот. будет выводиться рез-т 1-й ф-ции и тип данных;
// 3-я принимает массив минимум из 2-х эл-тов, если меньше 2, то ф-ция создает ошибку и опрокинуть ее с помощью throw и выводит соотв. сообщение;
// эта ф-ция возвращ. нов. массив, в кот. будет рез-ты вызовов 2-й ф-ции для каждой пары соседних эл-тов;

//     Решение - разбивка на подзадачи
// 1. описать ф-цию 1 в общем виде, с 2 парам 
// 2. описать возврат результата, а именно знач, переведенные в рандомный тип данных для каждого парам
// 3. создать массив типов, состоящий из ОБ из 8 пар с ключом = название типа, знач. - ф-цией преобразования
// 4. методом Math.round(Math.random() * 7) + 1 выбирать 2 эл-та из массива типов (по кол-ву парам)
// 5. возвращать парам, преобразованные в выловленные из массива типы
// 6. проверить работу 
function getRandomType(a, b) {
  const arrayOfType = [
    { construct: Number },
    { construct: String },
    { construct(data) {
      return BigInt(isNaN(Number(data)) ? 0 : Number(data))
    } },
    { construct: Object },
    { construct: Boolean },
    { prop: null },
    { prop: undefined },
    { construct: Symbol },
  ]
  // typeForA = Math.round(Math.random() * 7);
  // typeForB = Math.round(Math.random() * 7);
  // return [arrayOfType[typeForA].construct ? arrayOfType[typeForA].construct(a) : arrayOfType[typeForA].prop, 
  //        !arrayOfType[typeForB].construct ? arrayOfType[typeForB].prop : arrayOfType[typeForB].construct(b)]
  return [a, b].map(el => {
    type = Math.round(Math.random() * 7)
    return arrayOfType[type].construct ? arrayOfType[type].construct(el) : arrayOfType[type].prop  
  })
}

//     Решение - разбивка на подзадачи
// 1. описать ф-цию 2 в общем виде, с парам array
// 2. описать возврат результата, а именно знач, переведенные в рандомный тип данных для каждого парам и их типы
// 3. включить полученные рез-ты  в длинную строку
// 4. проверить работу 
function getResultsAnsSetToLongString(a, b) {
  const answers = getRandomType(a, b); 
  return `Nunc ac orci at ex dignissim aliquam. 
  Maecenas sed leo ullamcorper, sagittis nibh at, interdum neque. 
  Nam pellentesque ligula eget finibus viverra. 
  Proin fermentum, odio quis ullamcorper tristique, nisi lacus elementum lacus, eget tempor dolor libero nec lectus. 
  Nullam accumsan eu ipsum eu rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
  Donec scelerisque risus vitae libero pharetra congue. 
  Nunc aliquet, elit vel vulputate luctus, eros quam vehicula tellus, fermentum venenatis justo orci ornare magna. 
  Phasellus sit amet lectus nulla. In hac habitasse platea dictumst. Vivamus id diam nec lectus luctus pretium. 
  Sed nec laoreet nisi, eget accumsan tellus. 
  Results of first function: ${answers[0]} type: ${typeof answers[0]}; ${answers[1]} type: ${typeof answers[1]}`
}

// 3-я принимает массив минимум из 2-х эл-тов, если меньше 2, то ф-ция создает ошибку и опрокинуть ее с помощью throw и выводит соотв. сообщение;
// эта ф-ция возвращ. нов. массив, в кот. будут рез-ты вызовов 2-й ф-ции для каждой пары соседних эл-тов;
//     Решение - разбивка на подзадачи
// 1. описать ф-цию 3 в общем виде, с 2 парам 
// 2. описать возврат результата, а именно нов. массив, в кот. будут рез-ты вызовов 2-й ф-ции для каждой пары соседних эл-тов вх. массива
// 3. проверять размер вход. массива, если он меньше 2, то создать ошибку и опрокинуть ее с помощью throw и вывести соотв. сообщение
// 4. проверить работу с массивами
function getResultAndSetToArray(arr) {
  if (arr.length < 2) {
    throw new Error('To much short array');
  }
  let newArr = []
  for (i = 1; i < arr.length; i++) {
    newArr.push(getResultsAnsSetToLongString(arr[i-1], arr[i]))
  }
  return newArr
}

// пример из интернета - генерация случ. ключа
function randomKeyGenerator() {
  const letters = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let word = ''

  for (let i = 0; i < 15; i++) {
      word += letters.charAt(Math.floor(Math.random() * letters.length))
  }

  this.randomKey = word.substr(0, 5) + '-' + word.substr(5, 5) + '-' + word.substr(10, 5)

  return this.randomKey.toUpperCase()
}


// 24-07-2024
// Создать класс, в кот. будет поступать ОБ с неизвестным кол-вом св-в, но точно известно, что в этом ОБ есть св-ва name, age, sex, mail, nickname.
// Ваш класс должен возвращать новую персону с этими данными. Если какого-то поля из перечисленных не хватает, то это ошибка, а излишки полей должны также
// быть в этом персонаже в св-ве additionalData под своими ключами.
//     Решение - разбивка на подзадачи
// 1. описать класс в общем виде, с 1 парам ОБ с неизвестным кол-вом св-в
// 2. описать возврат результата, а именно нов. ОБ, кот. будут известные св-ва (name, age, sex, mail, nickname), а также св-во additionalData
// 3. проверять при создании известного св-ва, если оно не передано, то создать ошибку при помощью метода 
// 4. проверить, есть ли излишние св-ва, и если они есть, сохранить их в св-ве additionalData под своими ключами
// 5. проверить создав минимум с тремя разными данными:
//   5.1 - в приходящем объекте отсутсвует один из известных ключей
//   5.2 - без неизвестных св-в
//   5.3 - с неизвестными св-ми
// 6. оптимизация
//    6.1 создать приватный метод для проверки все ли известные ключи переданы (п.3)
//    6.2 создать приватный метод для заполнения ОБ известными ключами и их знач и для формирования массива #arrUnknownProps с излишними данными в виде ОБ
//    6.3 дозаполнить ОБ из массива #arrUnknownProps
//    6.4 оптимизировать п.6.3, перенеся функционал в приватную ф-цию, выполняющую действия п. 6.2
// 7. сдать!!!

class CreateObjWithUndefinedPrors {
  #arrKnownProps = ['name', 'age', 'sex', 'mail', 'nickname'];
  #arrUnknownProps = [];

   constructor(obj) {
    this.#arrKnownProps.forEach(key => {
      if (Object.keys(obj).indexOf(key) === -1) {
        throw new Error(' Do not find key = ' + key);
      }
    });
    Object.keys(obj).forEach(key => {
      if (this.#arrKnownProps.indexOf(key) === -1) {
        this.#arrUnknownProps.push( {[key]: obj[key]} )
      } else {
        this[key] = obj[key];
      }
    });
    if (this.#arrUnknownProps.length) {
      this.additionalData = this.#arrUnknownProps;
    }
  }
}

// Оптимизация 6.4
Object.keys(obj).forEach(key => {
  if (this.#arrKnownProps.indexOf(key) === -1) {
    if (!this.additionalData) {
      this.additionalData = {}
    }  this.#arrUnknownProps.push( {[key]: obj[key]} )
  } else {
    this[key] = obj[key];
  }
});
// if (this.#arrUnknownProps.length) {
//   this.additionalData = this.#arrUnknownProps;
// }

// Оптимизация
class CreateObjWithUndefinedPrors {
  #arrKnownProps = ['name', 'age', 'sex', 'mail', 'nickname'];
  #сheckUnknownProps(obj) {
    this.#arrKnownProps.forEach(key => {
      if (Object.keys(obj).indexOf(key) === -1) {
        throw new Error(' Do not find key = ' + key);
      }
    });
  };

  #createObject(obj) {
    Object.keys(obj).forEach(key => {
      if (this.#arrKnownProps.indexOf(key) === -1) {
        if (!this.additionalData) {
          this.additionalData = {}
        }
        this.additionalData[key] = obj[key]
      } else {
        this[key] = obj[key];
      }
    });
  };

  constructor(obj) {
    this.#сheckUnknownProps(obj);
    this.#createObject(obj);
  }
}

// Вариант Учителя
class KnownPerson {
  #privateArrayKnownKeys = ['name', 'age', 'sex', 'mail', 'nickname']
  constructor(data) {
    this.#checkIfKnownPropInData(data)
    this.#saveKnownPropInClass(data)
    this.#saveUnknownPropInClass(data)
  }

  #checkIfKnownPropInData = data => {
    if (this.#privateArrayKnownKeys.find(key => !data[key])) {
      throw new Error('dawdawdawd')
    }
  } 
  #saveKnownPropInClass = data => {
    this.#privateArrayKnownKeys.forEach(key => this[key] = data[key])
  }
  #saveUnknownPropInClass = data => {
    Object
      .keys(data)
      .filter(key => this.#privateArrayKnownKeys.indexOf(key) === -1)
      .forEach(key => {
        if (!this.additionalData) {
          this.additionalData = {}
        }
        this.additionalData[key] = data[key]
      })
  }
}


// Создать функционал, который мог бы вывести любые данные, которые приходят в любом кол-ве и любой вложенности. При этом рез-т также д.б. оформлен в виде
// понятной структуры данных, т.е., если приходят несколько данных, они должны возвращаться едиными.
//     Решение - разбивка на подзадачи
// 1. описать ф-цию в общем виде, с неизвестным кол-вом парам неивестного вида
// 2. описать возврат результата, а именно вывод входящих данных и возврат их в виде понятной стр-ры - объекта, в котором ключи в виде массивов, соответств. разным типам данных во входящих данных
//    2.1 вывод входящих данных с помощью console.log()
//    2.2 возврат входящих данных в виде ОБ, в котором ключи в виде массивов, соответств. разным типам данных во входящих данных
// 3. проверить работу
//    3.1 запустить ф-цию с такими данными: (1, 5, [12, 'ddd', true, [1, 0, -1], {name: 'Vasya', age: 337}])
//    3.1 запустить ф-цию с такими данными: (1, true, 5, Math.floor(Math.random() * 3 + 3), [12, 'ddd', true, [1, 0, -1], {name: 'Vasya', age: 337, personal: {pass: 'df66_32Wgh#_gQ'}, props: ['mail', 'nickname', 'isAdmin', 'enjoy']}])
//    3.3 запустить ф-цию с такими данными: (null, undefined, NaN)
//    3.4 запустить ф-цию с такими данными: ()
// 4. оптимизировать
// 5. сдать!!!

function createSomethingUnknown(...params) { // params => [[3]]
  let obj = {};
  for (i = 0; i < params.length; i++) {
    obj[params[i] === null ? 'null' : typeof params[i]] ??= params.filter((element) => typeof element === typeof params[i]);
  }
  // createSomethingUnknown(params[i]) // [3]
  return obj
}
createSomethingUnknown([3])

// Solution from Gyry <Витюша, [27.07.2024 0:42] >
function logData(...property) {
  function logging(data) {
    Object
      .keys(data)
      .forEach(key => {
          // console.log(data[key], data[key] && typeof data[key] === 'object')
        if (data[key] && typeof data[key] === 'object') {
          // console.log(data[key])
          console.log(`In ${typeof data[key]}`)
          logging(data[key])
          console.log('Out')
          } else {
            console.log(`${key}: ${data[key]}`)
        }
      })
  }
  logging(property)
  return property
}

logData(3, 5, 54, 3, [true, false, 'fesfse'], { prop: 'prop', m: function () {} })
logData(1, true, 5, Math.floor(Math.random() * 3 + 3), [12, 'ddd', true, [1, 0, -1], {name: 'Vasya', age: 337, personal: {pass: 'df66_32Wgh#_gQ'}, props: ['mail', 'nickname', 'isAdmin', 'enjoy']}], { prop: 'prop', m: function () {} })




// 26-07-2024
// ______________________________________________________________________________________________________________________________________ 
// В последующих задачах сперва принимается пошаговая опись. Без сдачи описи ко всем задачам к написанию кода не приступать!!!
// В последующих задачах крайне необходимо обрабатывать все возможные причины возникновения ошибок

// создать приблизительную структуру фабрики по изготовлению атомобилей минимум с 3 вариациями;
// создать приблизительную схему по конструированию автомобиля, т.е., сначала создается чертеж, потом макет, затем основные детали (корпус, двигатель, внутр. убранство),
// затем собирается общая структра машины, потом на ее основании - конкретные типы автомобилей, а затем уже экземпляры
// Решение задачи
// 1. Создаем класс Design
// 2. Создаем класс Layout
// 3. Создаем классы Details 
//    3.1 - Создаем классы с деталями базовой комплектации
//      3.1.1 - Создаем класс Corps
//      3.1.2 - Создаем класс Motor
//      3.1.3 - Создаем класс Gearbox
//      3.1.4 - Создаем класс Doors
//      3.1.5 - Создаем класс Seats
//      3.1.6 - Создаем класс SmallDetails
//    3.2 - Создаем классы с деталями расширенной комплектации
//      3.2.1 - Создаем класс ClimateControl
//      3.2.2 - Создаем класс Hatch
//      3.2.3 - Создаем класс Minibar
// 4. Создаем класс Prototype
// 5. Создаем класс MakingCar
// 6. Проверка
//    6.1 Создать автомобиль ZIL базовой комплектации
//    6.2 Создать автомобиль ZIL расширенной комплектации
//    6.3 Создать автомобиль Pobeda базовой комплектации
//    6.4 Создать автомобиль Pobeda расширенной комплектации
//    6.5 Создать автомобиль AuRus базовой комплектации
// 7. Оптимизация
// 8. Сдача

///////////////////////////////////////////////////////////////////////
class Design {                                      
  model = 'model'                                   
  method() {}                                       
  constructor(model) {                               
    this.model = model;
  }
class Layout extends Design { 
  constructor(data) {
    this.dimensions = data.dimensions;
    this.amountOfDoor = data.amountOfDoor;
    this.corpus = data.corpus;       
    this.property = data.property;
  }
}
class Details extends Layout{ }
class Corps extends Layout{ }
class Motor { }
class Gearbox { }
class Doors extends Layout{ }
class Seats extends Layout{ }
class SmallDetails { }
class ClimateControl { }
class Hatch { }
class Minibar { }
class Prototype extends Design { }
class MakingCar extends Prototype{ }


class ZILBasic extends MakingCar { }
class ZILExpansion extends MakingCar { }
class PobedaBasic extends MakingCar { }
class PobedaExpansion extends MakingCar { }
class AuRusBasic extends MakingCar { }

///////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////
// вариант Вити
//////////////////////////////////////////////////////////////////////
class Design {
  constructor(data) {
    this.model = new Model(data)
  }
  run() { console.log('car is running') }
  stop() { console.log('car is stoped') }
  openDoor() { console.log('The doors are opened') } 
  closeDoor() { console.log('The doors are closed') } 
}
class Sample {
  constructor(sizes) {
    this.height = sizes.height || '1m'
    this.width = sizes.width || '0.5m'
  }
}
class Model extends Sample {
  constructor(params) {
    super(params)
    this.material = params.material
    this.amountOfDoors = params.amountOfDoors
  }
}

class Nodes extends Design {
  #price = 0
  #body = {}
  #frame = {}
  #chassis = {}
  #engine = {}
  #electrics = {}
  #comfort = {}
  constructor(data) {
    super(data.model)
    this.#body = new Body(data.body)
    this.#frame = new Frame(data.frame)
    this.#chassis = new Chassis(data.chassis)
    this.#engine = new Engine(data.engine)
    this.#electrics = new Electrics(data.electrics)
    this.#comfort = new Comfort(data.comfort)
    this.#preCalculationOfPrice(data)
  }
  #preCalculationOfPrice(data) {
    this.#price = Object
      .keys(data)
      .map(key => {
        if (data[key] && data[key].price) {
          return data[key].price
        }
      })
      .filter(el => typeof el === 'number')
      .reduce((cur, next) => cur + next)
  }
  startMusic() {
    this.#electrics.startMusic()
  }
}
class Body {
  constructor(data) {
    this.material = data.material
    this.color = data.color
    this.lifespan = data.lifespan
  }
}
class Frame {
  constructor(data) {
    this.material = data.material
    this.color = data.color
    this.lifespan = data.lifespan
  }
}
class Chassis {
  constructor(data) {
    this.material = data.material
    this.color = data.color
    this.lifespan = data.lifespan
  }
}
class Engine {
  constructor(data) {
    this.material = data.material
    this.color = data.color
    this.lifespan = data.lifespan
    this.name = data.name || 'ЗИД-4.5'
  }
}
class Electrics {
  constructor(data) {
    this.material = data.material
    this.additionalFunctionality = data.additionalFunctionality 
    this.lifespan = data.lifespan
  }
  showCarParams() { console.log('params') }
  showCarStatus() { console.log('car status') }
  startMusic() { console.log('Зеленоглазое такси') }
  stopMusic() { console.log('Едем в тишине') }
}
class Comfort {
  constructor(data) {
    this.material = data.material
    this.additionalElement = data.additionalElement 
    this.lifespan = data.lifespan
    this.isCondition = data.isCondition
  }
}

class Assembly extends Nodes {
  constructor(data) {
    super(data)
  }
  left() { console.log('turn left') }
  right() { console.log('turn right') }
  direct() { console.log('go straight') }
  back() { console.log('go back') }
  neutral() { console.log('neutral position') }
}

class TypeLada extends Assembly {
  constructor(data) {
    data.model = {
      height: '2m',
      width: '1m',
      material: 'wood',
      amountOfDoors: 4
    }
    data.electrics.isCondition = false
    data.body.material = 'wood'
    data.body.lifespan = Infinity
    data.electrics.lifespan = '3 days'
    data.frame.lifespan = Infinity
    data.comfort.lifespan = '1 day'
    data.chassis.lifespan = '2 days'
    data.engine.lifespan = 'every month'
    data.body.price = 1
    data.electrics.price = 1
    data.frame.price = 1
    data.comfort.price = 1
    data.chassis.price = 1
    data.engine.price = 1
    super(data)
    this.brand = 'LADA'
  }
}
class TypeGAZ extends Assembly {
  constructor(data) {
    data.model = {
      height: '1.5m',
      width: '1m',
      material: 'St + ALL',
      amountOfDoors: 5
    }
    data.electrics.isCondition = false
    data.body.material = 'St + ALL'
    data.body.lifespan = Infinity
    data.electrics.lifespan = null
    data.frame.lifespan = Infinity
    data.comfort.lifespan = null
    data.chassis.lifespan = Infinity
    data.engine.lifespan = 'ever'
  }
}  
////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// создать структуру для управления зоопарком 
// Решение задачи
// 1. Создаем класс Animal
// 2. Создаем класс Employee
// 3. Создаем класс FoodBlock
// 4. Создаем класс VeterinaryBlock
//    4.1 Создаем класс Quarantine
//    4.2 Создаем класс ChildishBlock
// 5. Создаем класс InformationalBlock
//    5.1 Создаем класс Events
//    5.2 Создаем класс Excursions
//    5.3 Создаем класс Donuts
// 6. Создаем класс Equipment
// 7. Создаем класс Management
// 7. Проверка
//    7.1 Создать мини-зоопарк 
//    7.2 Создать зоопарк
//    7.3 Создать водный зоопарк Аквариум
// 8. Оптимизация
// 9. Сдача
// 10. Баги
//    10.0 Убрать множественное число с названии классов
//        10.0.0 Все сотрудники должны создаваться по принципу:
//              for (let i = 0; i < data.employees.length; i++) {
//                 this.employees.push(new Employee(data.employees[i]))
//              }  
//        10.0.1 Все животные должны создаваться по принципу:
//              for (let i = 0; i < data.employees.length; i++) {
//                 this.employees.push(new Employee(data.employees[i]))
//              }  // как бы this.animals = [new Animal(data.animal)]
//        10.0.2 Всё оборудование (Equipment и Installation) должно создаваться по принципу:
//              for (let i = 0; i < data.employees.length; i++) {
//                 this.employees.push(new Employee(data.employees[i]))
//              }  
//    10.1 Инфоблок - отдельный раздел
//    10.2 Events - отдельные сущности, могут входить внуть Инфоблока, но не наследовать от него
//    10.3 Events - должны иметь возможность менять цены
//    10.4 Events - добавить имя
//    10.5 Удалить класс Excursions ()
//    10.6 Donuts - часть инфоблока, не нужны свои сотрудники, перебросить методы в Инфоблок, Donuts удалить как класс - не удалять, т.к. будем использовать в ZOO
//    10.7 Equipment - часть инфоблока, не нужны свои сотрудники, перебросить методы в Инфоблок, Equipment как класс
//    10.8 Создать класс Installation для стационарного оборудования 
//    10.9 Класс Equipment будет обозначать небольшие вещи и персональное оборудование, а потому будет 
//    прикрепляться к блоку использования и к МОЛу;
//    10.10 Вынести методы buy и repair в инфоблок
//    10.11 Удалить Карантин и Детский блок
//    10.12 Вынести AnimalBorn в ветеринарный блок
//    10.13 Создать ф-цию checkAnimal в ветеринарном блоке, который будет запускать внутр. методы блока и в конце возвращать статистику
//    10.14 Создать в ZOO createNewEvent(cost, ), кот. принимает ОБ. описывающий событие, и запускает метод addEvent из инфоблока : this.informationalBlock.addEvent(new Event(eventData))
//    10.15 Создать в ZOO ф-цию checkEquipment (вызывает ф-цию checkInstallation из каждого блока верхнего ур-ня 3, кот. проверяет все обмундирование каждого блока и каждого сотрудника - у каждого сотрудника д.б. метод checkYourEquipment) 
//    10.16 Создать в ZOO ф-цию checkInstallation (вызывает ф-цию checkInstallation из каждого блока верхнего ур-ня 3, кот. проверяет все оборудование) 
//    10.17 Создать в ZOO getDonut, кот. принимает ОБ, описывающий донат, и запускает метод addDonut из инфоблока : this.informationalBlock.addDonut(new Donut(donutData)); возможно стоит добавить фин. класс внутри инфоблока
//    10.18 В ZOO (+имя) должно остаться 5 св-в: animals, foodBlock, veterinaryBlock, controlBlock (), name
//    10.19 Переименовать инфоблок в ControlBlock, переименовать Event в ZooControlEvent
//    10.20 Аквариум отличается от родителя какими-то нюансами, в т.ч. м.б. класс - сегмент:
            // class Aquarium extends ZOO {
            // constructor(data) {
            //   super(data);
            //   class WaterControl {
            //     checkWaterTemperature() {}
            //     checkWaterBakteriaLevel() {}
            //   }
            //   super.controlBlock.addNewSegment('waterControl', WaterControl, {temp: 37.4})
            // }
            // }
            // ControlBlock
            // addNewSegment(segmentName, SegmentClass, segmentData) {
            //   this[segmentName] = new SegmentClass(segmentData)
            // }



class StartEngine {
  #privateArrayKnownKeys = []
  constructor(data) {
    this.#privateArrayKnownKeys = data
  }
  checkIfKnownPropInData(data) {
    if (this.#privateArrayKnownKeys.find(key => !data[key])) {
      throw new Error(' Do not find key = ' + key)
    }
  }
  saveKnownPropInClass(data) {
    this.#privateArrayKnownKeys.forEach(key => this[key] = data[key])
  }
  saveUnknownPropInClass(data) {
    Object
      .keys(data)
      .filter(key => this.#privateArrayKnownKeys.indexOf(key) === -1)
      .forEach(key => {
        this[key] = data[key]
      })
  }
}

class Animal extends StartEngine {
  constructor(data) {
    super(['name', 'rod', 'vid', 'age', 'sex', 'height', 'weight'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
  }
  feed() { console.log('animal feed') }
  walk() { console.log('animal walk') }
  sleep() { console.log('animal sleep') }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class Employee extends StartEngine {
  constructor(data) {
    super(['name', 'age', 'profession', 'sex', 'oklad'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
  }
  run() { console.log('start of the work') }
  stop() { console.log('finish of the work') }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class FoodBlock extends StartEngine {
  constructor(data) {
    super(['name', 'animal', 'count', 'portion', 'employee'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    this.animal = new Animal(data.animal)
    this.employee = new Employee(data.employee)
  }
  prepareFeed() { console.log('food is preparing') }
  feed() { console.log('it feed animals') }
  buyFood() { console.log('food is bought') }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class VeterinaryBlock extends StartEngine {
  constructor(data) {
    super(['name', 'diagnosis', 'animal', 'medicine', 'count', 'employee'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    this.animal = new Animal(data.animal)
    this.employee = new Employee(data.employee)
  }
  animalSick() { console.log('animal got sick') }
  animalGreat() { console.log('animal great') }
  animalTreated() { console.log('animal is being treated') }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class Quarantine extends VeterinaryBlock {
  constructor(data) {
    super(data);
    super.checkIfKnownPropInData(data)
    super.saveKnownPropInClass(data)
    super.animalSick(data)
    super.animalGreat(data)
    super.animalTreated(data)
  }
}

class ChildishBlock extends VeterinaryBlock {
  constructor(data) {
    super(data);
    super.checkIfKnownPropInData(data)
    super.saveKnownPropInClass(data)
    super.animalGreat(data)
    animalBorn() { console.log('animal is born') }
  }
}

class InformationalBlock extends StartEngine {
  constructor(data) {
    super(['event', 'date', 'info', 'employee'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    this.employee = new Employee(data.employee)
  }
  listNextEvents() { console.log('List of next events') }
  listCurrentEvents() { console.log('List of current events') }
  runEvent() { console.log('start of the event') }
  stopEvent() { console.log('finish of the event') }
  costOfEvent() { console.log('cost, discount, childsCost of the event') }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class Events extends InformationalBlock {
  cost = 100;
  discount = 10;
  childsCost = 40;
  constructor(data) {
    super(data);
    super.checkIfKnownPropInData(data)
    super.saveKnownPropInClass(data)
    super.saveUnknownPropInClass(data)
    super.runEvent(data)
    super.stopEvent(data)
    super.costOfEvent(data)
  }
}

class Excursions extends Events {
  constructor(data) {
    super(data);
    super.checkIfKnownPropInData(data)
    super.saveKnownPropInClass(data)
    super.runEvent(data)
    super.stopEvent(data)
    super.costOfEvent(data)
  }
}

class Donuts extends StartEngine {
  constructor(data) {
    super(['date', 'sum', 'info', 'donor', 'employee'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    this.employee = new Employee(data.employee)
  }
  recieveDonat() { console.log('Recieve donat from: ', data.donor, ' amount: ', data.sum) }
  useDonat() { console.log('Use donat') }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class Equipment extends StartEngine {
  isWireless = false;
  advantage = 'advantage';
  convenions = 'convenios';
  consamtion = 'consamtion';
  vulnerability = 'vulnerability';
  vendor = 'vendor';

  constructor(data) {
    super(['name', 'property', 'purpose', 'count', 'cost', 'lifespan', 'employee'])
    this.checkIfKnownPropInData(data)
    this.saveKnownPropInClass(data)
    this.employee = new Employee(data.employee)
  }
  buyEquipment() { console.log('Buy equipment', data.name, ' from ', this.vendor) }
  useEquipment() { console.log('Use equipment', data.name) }
  repairEquipment() { console.log('Repair equipment', data.name) }

  checkIfKnownPropInData(data) {
    super.checkIfKnownPropInData(data)
  }
  saveKnownPropInClass(data) {
    super.saveKnownPropInClass(data)
  }
}

class ZOO extends StartEngine {
  constructor(data) {
    super(data);
    this.animal = new Animal(data.animal)
    this.employee = new Employee(data.employee)
    this.foodBlock = new FoodBlock(data.name)
    this.veterinaryBlock = new VeterinaryBlock(data.name)
    this.quarantine = new Quarantine(data.name)
    this.childishBlock = new ChildishBlock(data.name)
    this.informationalBlock = new InformationalBlock(data.event)
    this.events = new Events(data.event)
    this.excursions = new Excursions(data.event)
    this.donuts = new Donuts(data.sum)
    this.equipment = new Equipment(data.name) 
  }
}

class Aquarium extends ZOO {
  constructor(data) {
    super(data);
    this.animal = new Animal({'name': 'swordfish', 'rod': 'fish', 'vid': 'predator', 'age': 3, 'sex': 'male', 'height': 3.0, 'weight': 180})
    this.employee = new Employee({'name': 'Ihtyandr', 'age': 33, 'profession': 'fisnman', 'sex': 'male', 'oklad': 250000})
    this.foodBlock = new FoodBlock(data.name)
    this.veterinaryBlock = new VeterinaryBlock(data.name)
    this.quarantine = new Quarantine(data.name)
    this.childishBlock = new ChildishBlock(data.name)
    this.informationalBlock = new InformationalBlock(data.event)
    this.events = new Events(data.event)
    this.excursions = new Excursions(data.event)
    this.donuts = new Donuts(data.sum)
    this.equipment = new Equipment(data.name) 
  }
}

// let Food = new FoodBlock({'name': 'meat', 'animal': new Animal({'name': 'lion', 'rod': 'cats', 'vid': 'predator', 'age': 3, 'sex': 'male', 'height': 1.0, 'weight': 220}), 'count': 4, 'portion': 1.5, 'employee': new Employee({'name': 'Frosya', 'age': 33, 'profession': 'cook', 'sex': 'femine', 'oklad': 44500})})

// let Food = new FoodBlock({'name': 'meat', 'animal': 'lion', 'count': 4, 'portion': 1.3, 'employee': {'name': 'Frosya', 'age': 33, 'profession': 'cook', 'sex': 'femine', 'oklad': 44500}})


// 11-08-2024
// Создать отдельную папку, в которой будет следующая структура: 
// src/index.js   - содержит весь код задания про Зоопарк, включая запуск;
// index.html - упрощенное визуальное представление системы и экземпляра;
// style/style.css  - стиль к вашему визуальному представлению
// assets/image - папка с картинками
// assets/font  - папка со шрифтами
// 19-08-2024
// Перевести логику ZOO в новосозданую структуру с визуальным отображением по макету