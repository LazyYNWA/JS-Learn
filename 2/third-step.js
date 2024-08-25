//////////////////////////////////////////////////////////////////////////////////////////////////////
//       К О Н С Т Р У К Т О Р Ы    И   К Л А С С Ы .   Н А С Л Е Д О В А Н И Е .  О ш и б к и      //
////////////////////////////////////////////////////////////////////////////////////////////////////// 


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 15-07-2024
//////////////////////////////////////////////////////////////////////////////////////////////////////
function quickTest(value) {           // создана ф-ция quickTest с парам value 
  return function (value) {}          // возвращает новую ф-цию с парам value, который НЕ РАВЕН !!! парам value ф-ции quickTest
}
quickTest               // получаем САМУ ф-цию quickTest 
quickTest(1)            // вызываем ф-цию quickTest c аргументом 1 (принимается в 1-е value) и получаем ее РЕЗУЛЬТАТ, а именно function (value) {}. 
                        // После выполнения парам value (2-й) удаляется из памяти, РЕЗУЛЬТАТ вызова quickTest также удаляется за ненадобностью ( т.к. не имеет своего идентификатора).
let a = quickTest(1)    // вызываем ф-цию quickTest c аргументом 1 (принимается в 1-е value) и получаем ее РЕЗУЛЬТАТ, а именно function (value) {}. 
                        // ЭТОТ РЕЗУЛЬТАТ мы присваиваем переменной a (т.е. ЭТОТ РЕЗУЛЬТАТ получает идентификатор a и остается в памяти, если мы в дальнейшем используем a)/
quickTest(1)(2)         // вызываем ф-цию quickTest c аргументом 1 (принимается в 1-е value) и получаем ее РЕЗУЛЬТАТ, а именно function (value) {}.
                        // после чего вызываем этот рез-т c аргументом 2 (принимается в 2-е value). После выполнения оба парам value удаляются из памяти.
                        // Каждый вызов ф-ции заново создает свои парам
// _______________________________________________________________________________________________________________________________
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //                                                                    К О Н С Т Р У К Т О Р                                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function closureTest(value) {         // создана ф-ция closureTest с парам value 
  return function (anoterValue) {     // возвращает новую ф-цию с парам anoterValue
    console.log(value + anoterValue); // вывод парам value из ф-ции closureTest и парам anoterValue из текущей ф-ции, чем ЗАМЫКАЕМ парам value, из-за чего он ОСТАЕТСЯ в памяти!
                                      // CLOSURE переводится как ЗАМЫКАНИЕ. Это сохранение данных из верхней ф-ции в нижнюю для дальнейшего исп-я.
                                      // Парам value должен ликвидироваться после завершения работы ф-ции closureTest, однако, т.к. парам value используется
                                      // внутри <вложенной> возвращаемой ф-ции, он остается в памяти и не удаляется (до выполнения встроенной/возвращаемой ф-ции).
  }                                   // Этот процесс наз-ся ЗАМЫКАНИЕ.
}
closureTest                           // получаем САМУ ф-цию closureTest
closureTest(1)                        // вызываем ф-цию closureTest c аргументом 1 (принимается в value) и получаем ее РЕЗУЛЬТАТ, а именно function (anoterValue) {}. 
                                      // После этого парам value, а также рехультат удаляются из памяти.
let resultFunc = closureTest(1)       // вызываем ф-цию closureTest c аргументом 1 (принимается в value) и получаем ее РЕЗУЛЬТАТ, а именно function (anoterValue) {}. 
                                      // ЭТОТ РЕЗУЛЬТАТ мы присваиваем переменной resultFunc (т.е. ЭТОТ РЕЗУЛЬТАТ получает идентификатор resultFunc и остается в памяти, 
                                      // если мы в дальнейшем используем resultFunc)/
closureTest(1)(2)                     // вызываем ф-цию closureTest c аргументом 1 (принимается в value) и получаем ее РЕЗУЛЬТАТ, а именно function (anoterValue) {}.
                                      // после чего вызываем этот рез-т c аргументом 2 (принимается в anoterValue). После выполнения оба парам value и anoterValue удаляются из памяти.


function Cat(value) {                 // создана ф-ция под именем Cat, которая выполняет роль конструктора, с помощью кот. можем создавать новые ОБ
                                      // в этот констр-р мы передаем парам value
  this.prop = 'prop';                 // создаем св-во prop, кот. записываем в окружение констр-ра с помощью условного слова THIS и присваиваем ему стринговое знач 'prop'. 
                                      // При создании объекта с помощью констр-ра Cat prop будет его (ОБ) св-вом.
  this.anotherProp = value;           // создаем св-во anotherProp, кот. записываем в окружение констр-ра с помощью условного слова THIS и присваиваем ему входящее значение из парам контр-ра value.
                                      // При создании объекта с помощью констр-ра Cat anotherProp будет его (ОБ) св-вом.
  this.method = function () {};       // создаем метод с именем method, кот. записываем в окружение констр-ра с помощью условного слова THIS и присваиваем ему значение ф-ции Expression.
                                      // При создании объекта с помощью констр-ра Cat method будет его (ОБ) методом.
  this.anotherMethod = () => {};      // создаем метод с именем anotherMethod, кот. записываем в окружение констр-ра с помощью условного слова THIS и присваиваем ему значение стрелочной ф-ции Expression.
                                      // При создании объекта с помощью констр-ра Cat anotherMethod будет его (ОБ) методом.
  
  let privateProp = 'privateProp';    // создаем перем с именем privateProp и присваиваем ей строковое значение "privateProp", кот. НЕ ПРИВЯЗАНА к THIS. 
                                      // При создании объекта с помощью констр-ра Cat privatePropи НЕ ПОЯВИТСЯ в окружении ОБ, очищается сборщиком мусора за ненадобностью (нигде не исп-ся)
  let anotherPrivateProp = value;     // создаем перем с именем anotherPrivateProp и присваиваем ему приходящее значение из парам контр-ра value. НЕ ПРИВЯЗАНА к THIS.
с                                      // При создании объекта с помощью констр-ра Cat anotherPrivateProp НЕ ПОЯВИТСЯ в окружении ОБ, очищается сборщиком мусора за ненадобностью (нигде не исп-ся)
  let privateMethod = function () {}; // создаем перем с именем privateMethod и присваиваем ей значение ф-ции Expression. НЕ ПРИВЯЗАНА к THIS.                                      
                                      // При создании объекта с помощью констр-ра Cat privateMethod НЕ ПОЯВИТСЯ в окружении ОБ, очищается сборщиком мусора за ненадобностью (нигде не исп-ся)
  let anotherPrivateMethod = () => {};// создаем перем с именем anotherPrivateMethod и присваиваем ей значение стрелочной ф-ции Expression. НЕ ПРИВЯЗАНА к THIS.                                      
                                      // При создании объекта с помощью констр-ра Cat anotherPrivateMethod НЕ ПОЯВИТСЯ в окружении ОБ, очищается сборщиком мусора за ненадобностью (нигде не исп-ся)
  function thirdPrivateMethod() {}    // создаем Declaration ф-цию с именем thirdPrivateMethod. НЕ ПРИВЯЗАНА к THIS.                                      
                                      // При создании объекта с помощью констр-ра Cat thirdPrivateMethod НЕ ПОЯВИТСЯ в окружении ОБ, очищается сборщиком мусора за ненадобностью (нигде не исп-ся)
  let secondPrivateProp = 'secondPrivateProp';// создаем перем с именем secondPrivateProp и присваиваем ей строковое значение "secondPrivateProp". НЕ ПРИВЯЗАНА к THIS. 
                                              // При создании объекта с помощью констр-ра Cat secondPrivateProp НЕ ПОЯВИТСЯ в окружении ОБ,
                                              // ЗАМЫКАЕТСЯ в ф-циях closureFirstMethod, closureGetSecondPrivateProp и closureSetSecondPrivateProp и НЕ ОЧИЩАЕТСЯ сборщиком мусора
  let secondAnotherPrivateProp = value;       // создаем перем с именем secondAnotherPrivateProp и присваиваем ему приходящее значение из парам контр-ра value. НЕ ПРИВЯЗАНА к THIS. 
                                              // При создании объекта с помощью констр-ра Cat secondAnotherPrivateProp НЕ ПОЯВИТСЯ в окружении ОБ,
                                              // ЗАМЫКАЕТСЯ в ф-ции closureFirstMethod и НЕ ОЧИЩАЕТСЯ сборщиком мусора
  let secondPrivateMethod = function () {};   // создаем перем с именем secondPrivateMethod и присваиваем ей значение ф-ции Expression. НЕ ПРИВЯЗАНА к THIS.
                                              // При создании объекта с помощью констр-ра Cat secondPrivateMethod НЕ ПОЯВИТСЯ в окружении ОБ,
                                              // ЗАМЫКАЕТСЯ в ф-ции closureFirstMethod и НЕ ОЧИЩАЕТСЯ сборщиком мусора
  let secondAnotherPrivateMethod = () => {};  // создаем перем с именем secondAnotherPrivateMethod и присваиваем ей значение стрелочной ф-ции Expression. НЕ ПРИВЯЗАНА к THIS. 
                                              // При создании объекта с помощью констр-ра Cat secondAnotherPrivateMethod НЕ ПОЯВИТСЯ в окружении ОБ,
                                              // ЗАМЫКАЕТСЯ в ф-ции closureFirstMethod и НЕ ОЧИЩАЕТСЯ сборщиком мусора
  function secondThirdPrivateMethod() {};     // создаем Declaration ф-цию с именем secondThirdPrivateMethod. НЕ ПРИВЯЗАНА к THIS. 
                                              // При создании объекта с помощью констр-ра Cat secondThirdPrivateMethod. НЕ ПОЯВИТСЯ в окружении ОБ,
                                              // ЗАМЫКАЕТСЯ в ф-ции closureFirstMethod и НЕ ОЧИЩАЕТСЯ сборщиком мусора
  this.closureFirstMethod = () => {           // создаем метод с именем closureFirstMethod, кот. записываем в окружение констр-ра с помощью условного слова THIS и присваиваем ему значение стрелочной ф-ции Expression.
                                              // При создании объекта с помощью констр-ра Cat closureFirstMethod будет его (ОБ) методом.
    console.log(secondPrivateProp, secondAnotherPrivateProp); // выводим знач. перем-х secondPrivateProp и secondAnotherPrivateProp и ЗАМЫКАЕМ их. Т.е., сборщик мусора проигнорирует эти пере-е
    secondPrivateMethod();                    // вызываем ф-цию secondPrivateMethod и получаем рез-т ее вызова. Этим мы ЗАМЫКАЕМ ее, т.е., сборщик мусора проигнорирует ее
    secondAnotherPrivateMethod();             // вызываем ф-цию secondAnotherPrivateMethod и получаем рез-т ее вызова. Этим мы ЗАМЫКАЕМ ее, т.е., сборщик мусора проигнорирует ее
    secondThirdPrivateMethod();               // вызываем ф-цию secondThirdPrivateMethod и получаем рез-т ее вызова. Этим мы ЗАМЫКАЕМ ее, т.е., сборщик мусора проигнорирует ее
  }
  this.closureGetSecondPrivateProp = () => {  // создаем метод с именем closureGetSecondPrivateProp, кот. записываем в окружение констр-ра с помощью условного слова THIS и присваиваем ему значение стрелочной ф-ции Expression.
                                              // Это ГЕТТЕР для перем-й secondPrivateProp. 
                                              // Т.е., это единственный способ получения перем-й secondPrivateProp извне.
                                              // При создании объекта с помощью констр-ра Cat closureGetSecondPrivateProp будет его (ОБ) методом.
    return secondPrivateProp;                 // возвращает знач перем-й secondPrivateProp и ЗАМЫКАЕТ ее
  }
  this.closureSetSecondPrivateProp = (valueProp) => { // создаем метод с именем closureSetSecondPrivateProp и парам valueProp, кот. записываем в окружение констр-ра с помощью условного слова THIS и присваиваем ему значение стрелочной ф-ции Expression.
                                              // Это СЕТТЕР для перем-й secondPrivateProp. 
                                              // Т.е., это единственный способ присвоения перем-й secondPrivateProp нов. знач. извне.
                                              // При создании объекта с помощью констр-ра Cat closureSetSecondPrivateProp будет его (ОБ) методом.
    secondPrivateProp = valueProp;            // присваивает перем secondPrivateProp нов. знач. из входящего парам valueProp и ЗАМЫКАЕТ ее (secondPrivateProp)
  }

  this._falsePrivateProp = 'falsePrivateProp';// создаем св-во _falsePrivateProp, кот. записываем в окружение констр-ра с помощью условного слова THIS и присваиваем ему стринговое знач 'falsePrivateProp'. 
                                              // При создании объекта с помощью констр-ра Cat _falsePrivateProp будет его (ОБ) св-вом.
                                              // ЗАМЫКАЕТСЯ в ф-циях closureFirstMethod, getFalsePrivateProp и setFalsePrivateProp и НЕ ОЧИЩАЕТСЯ сборщиком мусора
                                              // Знак "_" в начале имени св-ва/метода негласно обозначает приватное св-во/метод (закрытое, частное) для "внутренней кухни"
  this.getFalsePrivateProp = () => {          // создаем метод с именем getFalsePrivateProp, кот. записываем в окружение констр-ра с помощью условного слова THIS и присваиваем ему значение стрелочной ф-ции Expression.
                                              // Это ГЕТТЕР для перем-й _falsePrivateProp. 
                                              // При создании объекта с помощью констр-ра Cat getFalsePrivateProp будет его (ОБ) методом.
    return this._falsePrivateProp;            // возвращает знач перем-й _falsePrivateProp (НЕ ЗАМЫКАЕТ ее, т.к. она и так приязана к THIS)
  }
  this.setFalsePrivateProp = (valueProp) => { // создаем метод с именем setFalsePrivateProp и парам valueProp, кот. записываем в окружение констр-ра с помощью условного слова THIS и присваиваем ему значение стрелочной ф-ции Expression.
                                              // Это СЕТТЕР для перем-й _falsePrivateProp. 
                                              // При создании объекта с помощью констр-ра Cat setFalsePrivateProp будет его (ОБ) методом.
  this._falsePrivateProp = valueProp;         // присваивает перем _falsePrivateProp нов. знач. из входящего парам valueProp
  }
}

let smallCat = new Cat('smally');           // создаем новый экземпляр констр-ра Cat с арг. 'smally' с помощью оператора new и присваиваем его в перем smallCat.
                                            // smallCat - это экземпляр констр-ра Cat
                                            // smallCat содержит следующие св-ва: prop, anotherProp, _falsePrivateProp
                                            // smallCat содержит следующие методы:  method, anotherMethod, closureFirstMethod, closureGetSecondPrivateProp, closureSetSecondPrivateProp, getFalsePrivateProp, setFalsePrivateProp

let smallAnotherCat = new Cat('smally');    // создаем новый экземпляр констр-ра Cat с арг. 'smally' с помощью оператора new и присваиваем его в перем smallAnotherCat.
                                            // smallAnotherCat - это экземпляр констр-ра Cat
                                            // smallAnotherCat содержит следующие св-ва: prop, anotherProp, _falsePrivateProp
                                            // smallAnotherCat содержит следующие методы:  method, anotherMethod, closureFirstMethod, closureGetSecondPrivateProp, closureSetSecondPrivateProp, getFalsePrivateProp, setFalsePrivateProp

let bigCat = new Cat('bigger');             // создаем новый экземпляр констр-ра Cat с арг. 'bigger' с помощью оператора new и присваиваем его в перем bigCat
                                            // bigCat - это экземпляр констр-ра Cat
                                            // bigCat содержит следующие св-ва: prop, anotherProp, _falsePrivateProp
                                            // bigCat содержит следующие методы:  method, anotherMethod, closureFirstMethod, closureGetSecondPrivateProp, closureSetSecondPrivateProp, getFalsePrivateProp, setFalsePrivateProp

let unknownCat = new Cat;                   // создаем новый экземпляр констр-ра Cat без агрументов (т.е., парам value примет знач undefined) с помощью оператора new и присваиваем его в перем unknownCat
                                            // unknownCat - это экземпляр констр-ра Cat
                                            // unknownCat содержит следующие св-ва: prop, anotherProp, _falsePrivateProp
                                            // unknownCat содержит следующие методы:  method, anotherMethod, closureFirstMethod, closureGetSecondPrivateProp, closureSetSecondPrivateProp, getFalsePrivateProp, setFalsePrivateProp

// smallCat, smallAnotherCat, bigCat и unknownCat - НЕ РАВНЫ между собой, хоть имеют одинаковую конструкцию и НЕ СОЗДАЮТ ССЫЛКИ на общий ОБ.
// Каждый из них имеет в цепочке наследования ОДНОГО ОБЩЕГО родителя, а именно констр-р Cat
let SomeConstructor = function () {}        // Constructor Expression

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16-07-2024
//////////////////////////////////////////////////////////////   З а д а ч и  - Конструкторы \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 

// создать констр-р с парам a и b, с помощью кот. новосозданный ОБ будет содержать 2 св-ва a и b и 3 метода: sum (a + b), min(a, b), max(a, b).
//     Решение - разбивка на подзадачи
// 1. описать ф-цию в общем виде, с парам a и b
// 2. описать возврат результата, а именно ОБ с 2 св-вами a и b и 3 метода: sum(a + b), min(a, b), max(a, b)
// 3. создать новый ОБ и его св-ва: создать св-во ОБ a и присвоить ему знач. парам a; создать св-во ОБ b и присвоить ему знач. парам b
// 4. создать метод ОБ sum(a + b) с помощью стрелочной ф-ции, записав в тело ф-ции суммирование ее парам
// 5. создать метод ОБ min(a + b) с помощью стрелочной ф-ции, записав в тело ф-ции возврат минимального знач, найденное с помощью тернарной ф-ции
// 6. создать метод ОБ max(a + b) с помощью стрелочной ф-ции, записав в тело ф-ции возврат максимального знач, найденное с помощью тернарной ф-ции
// 7. проверить работу 
function CreateObject(a, b) {
  this.a = a;
  this.b = b;
  this.sum = () => this.a + this.b
  this.min = () => this.a > this.b ? this.b : this.a
  this.max = () => this.a > this.b ? this.a : this.b
}

// создать констр-р, в кот. будет одна приватная переменная со стринговым знач, а также приватный метод, кот. будет принимать один парам и возвр. перевернутое знач этого парам. 
// Новосозданный ОБ будет содержать 2 метода - 1 возвр. перевернутую прив. перем.; 2-й - принимает 1 парам и записывать его знач. в приватную перем.
//     Решение - разбивка на подзадачи
// 1. описать ф-цию в общем виде
// 2. описать возврат результата, а именно ОБ с 2 методами (returnReverseProp и setPrivatePror)
// 3. создать приватную перем. privateProp со стринг. знач
// 4. создать приватный метод reverseData, принимающ. один парам value и возвр. перевернутое знач этого парам. 
// 5. создать новый ОБ с 2 методами (returnReverseProp и setPrivatePror)
// 6. создать ф-цию - метод returnReverseProp, возвр. перевернутую прив. перем. с помощью ф-ции reverseData
// 7. создать ф-цию - метод setPrivatePror, принимающую 1 парам и записывающую его знач. в приватную перем. privateProp
// 8. проверить работу
function CreateObjWithPrivatePror() {
  let privateProp = 'valueProp';  
  // const _badPrivateMeth = (value) => {
  //   let arrayFromValue = String(value).split();
  //   let newArray = [];
  //   for (i = arrayFromValue.length - 1; i >= 0; i--) {
  //     newArray.push(arrayFromValue[i]); 
  //   }
  //   return newArray;
  // }; 
  const reverseData = (value) => {
    return value
      .split('')
      .reverse()
      .join('')
  }; 
  this.returnReverseProp = () => {
    return reverseData(this.privateProp);
  } 
  // !!! value здесь не то же самое, что value в reverseData = (value) !!!!!!!
  this.setPrivatePror = (value) => {
    this.privateProp = value; 
  }
}

// создать ф-цию, приним. 1 бул. парам и в зав-ти от его знач возвр. ОБ, внутри кот. будет 1 св-во Construct со знач, равным конструктору из задачи 1 или задачи 2
//     Решение - разбивка на подзадачи
// 1. описать ф-цию в общем виде, с булевым парам isMethodOne
// 2. описать возврат результата, а именно ОБ с 2 методами в зав-ти от знач isMethodOne 
// 3. проверить работу
function createObjWithDifferenceMethods(isMethodOne) {
  return {
    Construct: isMethodOne ? CreateObject : CreateObjWithPrivatePror
  }
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 17-07-2024
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //                                                                        К Л А С С Ы                                                                    //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Big {                                 // создаем класс с именем Big (иногда к имени добавляют большую букву "C", т.е., CBig), который во многом явл-ся модиф-й версией констр-ра
  prop = 'prop';                            // создаем св-во prop со знач "prop", кот. АВТОМАТИЧЕСКИ прикрепляется к THIS и появится в новосозданном ОБ
  anoterProp = '';                          // создаем св-во anoterProp со знач "", кот. АВТОМАТИЧЕСКИ прикрепляется к THIS и появится в новосозданном ОБ
  constructor(value) {                      // автоматически вызываемый метод, в кот. инициализируется ОБ; может получать парам-ры, кот. мы передаем при создании нового ОБ
    this.anoterProp = value;                // св-во (класса и ОБ) anoterProp, кот. мы получаем с помошью this, переприсваиваем знач из парам value, получаемое при создании нового ОБ
  } 
  method() {};                              // создаем метод с именем method, кот. АВТОМАТИЧЕСКИ прикрепляется к THIS и появится в новосозданном ОБ

  #someProperty = 5;                        // создаем приватное св-во #someProperty со знач 5, кот. АВТОМАТИЧЕСКИ прикрепляется к THIS и появится в новосозданном ОБ.
                                            // Однако, при попытке обратиться к этому св-ву извне мы получим ОШИБКУ.
  #someMethod() {};                         // создаем метод с именем  #someMethod, кот. АВТОМАТИЧЕСКИ прикрепляется к THIS и появится в новосозданном ОБ.
                                            // Однако, при попытке обратиться к этому св-ву извне мы получим ОШИБКУ. 
  
  get something() {                         // создаем ГЕТТЕР с именем something с помощью ключевого слова GET, кот. будет возвращ. знач. приватного св-ва #someProperty.
                                            // Данная конструкция НЕ МОЖЕТ получать парам.
    return this.#someProperty;
  }
  set something(value) {                    // создаем СЕТТЕР с именем something с помощью ключевого слова SET, кот. будет присваивать приватному св-ву #someProperty новое знач,
                                            // получ. из парам value. Данная конструкция ОБЯЗАТЕЛЬНО имеет 1 парам.
    this.#someProperty = value;
  }
  getSomeProperty() {                       // создаем метод с именем getSomeProperty, кот. АВТОМАТИЧЕСКИ прикрепляется к THIS и появится в новосозданном ОБ 
    return this.#someProperty;              // возвращ. знач. приватного св-ва #someProperty
  }
  setSomeProperty(value) {                  // создаем метод с именем setSomeProperty, кот. АВТОМАТИЧЕСКИ прикрепляется к THIS и появится в новосозданном ОБ 
    this.#someMethod()                      // вызов приватного метода #someMethod
    this.#someProperty = value;             // присваиваем приватному св-ву #someProperty новое знач, получ. из парам value.
  }

  _someAnotherProperty = 5;                // создаем св-во #someProperty со знач 5, кот. АВТОМАТИЧЕСКИ прикрепляется к THIS и появится в новосозданном ОБ.
  get somethingAnother() {                 // создаем ГЕТТЕР с именем somethingAnother с помощью ключевого слова GET, кот. будет возвращ. знач. св-ва _someAnotherProperty.
                                           // Данная конструкция НЕ МОЖЕТ получать парам.
                                           // Знак "_" в начале имени св-ва/метода негласно обозначает приватное св-во/метод (закрытое, частное) для "внутренней кухни"
    return this._someAnotherProperty;
  }
  set somethingAnother(value) {             // создаем СЕТТЕР с именем something с помощью ключевого слова SET, кот. будет присваивать св-ву _someAnotherProperty новое знач,
                                            // получ. из парам value. Данная конструкция ОБЯЗАТЕЛЬНО имеет 1 парам.
    this._someAnotherProperty = value;
  }
  getSomeAnotherProperty() {                // создаем метод с именем getSomeAnotherProperty, кот. АВТОМАТИЧЕСКИ прикрепляется к THIS и появится в новосозданном ОБ 
    return this._someAnotherProperty;       // возвращ. знач. св-ва _someAnotherProperty
  }
  setSomeAnotherProperty(value) {           // создаем метод с именем setSomeAnotherProperty, кот. АВТОМАТИЧЕСКИ прикрепляется к THIS и появится в новосозданном ОБ 
    this._someAnotherProperty = value;      // присваиваем св-ву _someAnotherProperty новое знач, получ. из парам value.
  }

  static staticProperty = 'staticProperty'; // создаем статическое св-во класса Big с помощью ключевого слова STATIC под именем staticProperty со знач "staticProperty", 
                                            // кот. АВТОМАТИЧЕСКИ прикрепляется к THIS, но НЕ ПОЯВИТСЯ в новосозданном ОБ 
  static staticMethod() {};                 // создаем статический метод класса Big с помощью ключевого слова STATIC под именем staticMethod

}

let smallBig = new Big('smally');           // создаем новый экземпляр класса Big с арг. 'smally' с помощью оператора new и присваиваем его в перем smallBig.
                                            // smallBig - это экземпляр класса Big
                                            // smallBig содержит следующие св-ва: prop, anotherProp,  #someProperty, _someAnotherProperty
                                            // smallBig содержит следующие методы:  getSomeProperty, setSomeProperty, getSomeAnotherProperty, setSomeAnotherProperty
                                            // smallBig содержит следующие геттеры: somthing и somethingAnother
                                            // smallBig содержит следующие сеттеры: something и somethingAnother
let bigBig   = new Big('bigger');           // создаем новый экземпляр класса Big с арг. 'bigger' с помощью оператора new и присваиваем его в перем bigBig.
                                            // bigBig - это экземпляр класса Big
                                            // bigBig содержит следующие св-ва: prop, anotherProp,  #someProperty, _someAnotherProperty
                                            // bigBig содержит следующие методы:  getSomeProperty, setSomeProperty, getSomeAnotherProperty, setSomeAnotherProperty
                                            // bigBig содержит следующие геттеры: something и somethingAnother
                                            // bigBig содержит следующие сеттеры: something и somethingAnother
let smallAnotherBig = new Big('smally');    // создаем новый экземпляр класса Big с арг. 'smally' с помощью оператора new и присваиваем его в перем smallAnotherBig.
                                            // smallAnotherBig - это экземпляр класса Big
                                            // smallAnotherBig содержит следующие св-ва: prop, anotherProp,  #someProperty, _someAnotherProperty
                                            // smallAnotherBig содержит следующие методы:  getSomeProperty, setSomeProperty, getSomeAnotherProperty, setSomeAnotherProperty
                                            // smallAnotherBig содержит следующие геттеры: something и somethingAnother
                                            // smallAnotherBig содержит следующие сеттеры: something и somethingAnother
let unknownBig = new Big;                   // создаем новый экземпляр класса Big без агрументов (т.е., парам value примет знач undefined) с помощью оператора new и присваиваем его в перем unknownBig
                                            // unknownBig - это экземпляр класса Big
                                            // unknownBig содержит следующие св-ва: prop, anotherProp,  #someProperty, _someAnotherProperty
                                            // unknownBig содержит следующие методы:  getSomeProperty, setSomeProperty, getSomeAnotherProperty, setSomeAnotherProperty
                                            // unknownBig содержит следующие геттеры: something и somethingAnother
                                            // unknownBig содержит следующие сеттеры: something и somethingAnother
                                            // unknownBig содержит следующие 

// smallBig, smallAnotherBig, bigBig и unknownBig - НЕ РАВНЫ между собой, хоть имеют одинаковую конструкцию и НЕ СОЗДАЮТ ССЫЛКИ на общий ОБ.
// Каждый из них имеет в цепочке наследования ОДНОГО ОБЩЕГО родителя, а именно класс Big

let SomeClass = class {}                    // Class Expression  

// 1. Ф-ция, созданная с помощью CLASS, помечена спец. внутренним св-вом [[IsClassConstructor]]: true.
// 2. В отличие от обычных ф-ций конструктор класса НЕ МОЖЕТ быть вызван без слова NEW.
// 3. Методы класса явл-ся неперечислимыми (т.е., при прохождении циклом (For ... In) по ОБ не видны, мы не получаем ключей этих методов - enumerable: false).
// 4. Код внутри класса - автоматически в строгом режиме.
// 5. Возможно создавать статические св-ва и методы с помошщью ключевого слова static.
// 6. Возможно создавать истинные приватные св-ва и методы, используя символ "#" вначале имени


//////////////////////////////////////////////////////////////   З а д а ч и  - Классы  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
// 1) Создать класс, создающий ОБ с 3 обычными св-вами, 1 ложно-приватным ("_") и 1 истинно-приватным ("#") св-вами, а также пары методов, выполняющ. ф-ции геттера и сеттера,
// а также 2 метода - 1 приватный, с именем logging, выводящий пары всех св-в - ключ - значение, и будет срабатывать после каждого условного изменения (сеттера);
// 2-й метод - сбрасывает все св-ва до нач. значений (reset)
//     Решение - разбивка на подзадачи
// 1. описать класс в общем виде
// 2. описать возврат результата, а именно ОБ с 2 3 обычными св-вами, 1 ложно-приватным ("_") и 1 истинно-приватным ("#") св-вами
// 3. создаем 5 св-в, 2 из них истинно- и ложно-приватные
// 4. создаем 2 метода с ф-циями геттера и сеттера, в сеттере предусмотрим вывод приватного метода logging
// 5. создаем приватный метод #logging, выводящий пары всех св-в - ключ - значение
// 6. создаем метод reset, сбрасывающий все св-ва до нач. значений
// 7. проверить работу 
class First {
  prop = 'prop';  
  anoterProp = 'anoterProp';  
  onesAnoterProp = 'onesAnoterProp';  
  #someProperty = 5; 
  _someAnotherProperty = 13;   
  getSomeProperty(propName) {                      
    return propName.match('#') ? this.#someProperty : this[propName];             
  }
  setSomeProperty(propName, value) {                 
    this[propName] = value;            
    this.#logging();
  }
  #logging() {
     Object
    .keys(this)
    .forEach(key => console.log(key, this[key]));
  };
  reset() {
    this.prop = 'prop';  
    this.anoterProp = 'anoterProp';  
    this.onesAnoterProp = 'onesAnoterProp';  
    this.#someProperty = 5; 
    this._someAnotherProperty = 13; 
  }; 
}
let myFirst = new First;   

// 2) Создать класс так, чтобы новосозданный ОБ имел столько св-в и методов, сколько приходит параметров при создании этого ОБ, 
// и с помощью внутреннего приватного метода генерирует ключ до 8 символов
//     Решение - разбивка на подзадачи
// 1. описать класс в общем виде
// 2. описать возврат результата, а именно ОБ c заранее неизвестным кол-вом св-в и методов, зависящих от кол-ва и типо парам
// 3. 
// 4. проверить работу 

class UnknownObject {
  #randomKeyGenerator() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let randomKey = '';
    for (let i = 0; i < 8; i++) {
      randomKey += letters.charAt(Math.floor(Math.random() * letters.length))
      if (i % Math.floor(Math.random() * 5) === 0) {
        for (let j = 0; j < Math.floor(Math.random() * 2) + 1; j++) {
          randomKey += numbers.charAt(Math.floor(Math.random() * numbers.length))
        }
      }
    }
    randomKey = randomKey.slice(0, 8)
    return randomKey;
  }

  constructor(...values) {                     
    values.forEach(key => {
      this[this.#randomKeyGenerator()] = key;
    });
  }    
}


// 21-07-2024
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                Н А С Л Е Д О В А Н И Е                                                                //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//      Прототипное наследование ОБ, конструкторов, классов и встроенных ОБ
// __proto__, Prototype

// Наследование ОБ
// __proto__ - св-во, кот. ссылается на ОБ-родитель
let num = 5;                          // созд-ся перем типа number
num.__proto__                         // получаем доступ к родительскому ОБ (обёртке) Number - ОБ-родителю - с помощью св-ва __proto__
num.__proto__.__proto__               // получаем доступ к след. родительскому ОБ Object - ОБ-родителю родителя - с помощью 2-го св-ва __proto__
num.__proto__.__proto__.__proto__     // получаем доступ к след. родительскому эл-ту, кот. есть null
num.__proto__.__proto__.__proto__.__proto__   // ОШИБКА, дальше null ничего нет

let str = 'word';                     // созд-ся перем типа string
str.__proto__                         // получаем доступ к родительскому ОБ (обёртке) String - ОБ-родителю - с помощью св-ва __proto__
str.__proto__.__proto__               // получаем доступ к след. родительскому ОБ Object - ОБ-родителю родителя - с помощью 2-го св-ва __proto__
str.__proto__.__proto__.__proto__     // получаем доступ к след. родительскому эл-ту, кот. есть null
str.__proto__.__proto__.__proto__.__proto__   // ОШИБКА, дальше null ничего нет

let bln = true;                       // созд-ся перем типа boolean
bln.__proto__                         // получаем доступ к родительскому ОБ (обёртке) Boolean - ОБ-родителю - с помощью св-ва __proto__
bln.__proto__.__proto__               // получаем доступ к след. родительскому ОБ Object - ОБ-родителю родителя - с помощью 2-го св-ва __proto__
bln.__proto__.__proto__.__proto__     // получаем доступ к след. родительскому эл-ту, кот. есть null
bln.__proto__.__proto__.__proto__.__proto__   // ОШИБКА, дальше null ничего нет

let bgI = 123n;                       // созд-ся перем типа BigInt
bgI.__proto__                         // получаем доступ к родительскому ОБ (обёртке) BigInt - ОБ-родителю - с помощью св-ва __proto__
bgI.__proto__.__proto__               // получаем доступ к след. родительскому ОБ Object - ОБ-родителю родителя - с помощью 2-го св-ва __proto__
bgI.__proto__.__proto__.__proto__     // получаем доступ к след. родительскому эл-ту, кот. есть null
bgI.__proto__.__proto__.__proto__.__proto__   // ОШИБКА, дальше null ничего нет

let sym = Symbol();                   // созд-ся перем типа symbol
sym.__proto__                         // получаем доступ к родительскому ОБ (обёртке) Symbol - ОБ-родителю - с помощью св-ва __proto__
sym.__proto__.__proto__               // получаем доступ к след. родительскому ОБ Object - ОБ-родителю родителя - с помощью 2-го св-ва __proto__
sym.__proto__.__proto__.__proto__     // получаем доступ к след. родительскому эл-ту, кот. есть null
sym.__proto__.__proto__.__proto__.__proto__   // ОШИБКА, дальше null ничего нет

let obj = {};                         // созд-ся перем типа object
obj.__proto__                         // получаем доступ к родительскому ОБ Object - ОБ-родителю - с помощью св-ва __proto__
obj.__proto__.__proto__               // получаем доступ к след. родительскому эл-ту, кот. есть null
obj.__proto__.__proto__.__proto__     // ОШИБКА, дальше null ничего нет

let arr = [];                         // созд-ся перем типа array
arr.__proto__                         // получаем доступ к родительскому ОБ Array - ОБ-родителю - с помощью св-ва __proto__
arr.__proto__.__proto__               // получаем доступ к след. родительскому ОБ Object - ОБ-родителю родителя - с помощью 2-го св-ва __proto__
arr.__proto__.__proto__.__proto__     // получаем доступ к след. родительскому эл-ту, кот. есть null
arr.__proto__.__proto__.__proto__.__proto__   // ОШИБКА, дальше null ничего нет

let fnc = () => {};                   // созд-ся перем типа function
fnc.__proto__                         // получаем доступ к родительскому ОБ Function - ОБ-родителю - с помощью св-ва __proto__
fnc.__proto__.__proto__               // получаем доступ к след. родительскому ОБ Object - ОБ-родителю родителя - с помощью 2-го св-ва __proto__
fnc.__proto__.__proto__.__proto__     // получаем доступ к след. родительскому эл-ту, кот. есть null
fnc.__proto__.__proto__.__proto__.__proto__  // ОШИБКА, дальше null ничего нет

let und = undefined;                  // созд-ся перем типа undefined, НЕТ ЦЕПОЧКИ НАСЛЕДОВАНИЯ
und.__proto__                         // ОШИБКА

let nll = null;                       // созд-ся перем типа null, явл-ся КОНЕЧНОЙ ТОЧКОЙ цепочки наследования, поэтому сиротка
nll.__proto__                         // ОШИБКА, дальше null ничего нет

//      Наследование ОБ
let objFirst = {                      // созд-ся ОБ с именем objFirst и стринговым св-вом prop, равным 'prop'
  prop: 'prop'
}
let objSecond = {                     // созд-ся ОБ с именем objSecond и стринговым св-вом key со знач 'value'
  key: 'value'
}
objFirst.__proto__ = objSecond;       // ПРИСВОЕНИЕ прототипу ОБ objFirst САМОГО ОБ objSecond со свей его цепочкой наследования (усыновление). 
                                      // Т.е., привычная цепочка наследования objFirst, а именно objFirst -> Object -> null, заменяется на 2-м ур-не 
                                      // (в данном случае Object) на цепочку наследования objSecond, а именно objSecond -> Object -> null, 
                                      // т.е., цепочка наследования objFirst меняется след. образом: objFirst -> objSecond -> Object -> null,
                                      // т.е., objSecond становится родителем objFirst
objFirst.__proto__                    // получаем доступ к родителю objFirst - objSecond
objFirst.__proto__.__proto__          // получаем доступ к родителю Object
objFirst.__proto__.__proto__.__proto__            // получаем доступ к родителю null
objFirst.__proto__.__proto__.__proto__.__proto__  // ОШИБКА, дальше null ничего нет

objFirst.prop                         // начинается поиск опред. знач под идентификатором (ключом) prop по цепочке наследования objFirst, 
                                      // а именно objFirst -> objSecond -> Object -> null. Сначала проверит 0-й ур-нь, т.е., сам ОБ objFirst.
                                      // И поскольку св-во prop находится в самом ОБ objFirst, то поиск прекращается на 0-м ур-не и мы получаем знач св-ва по идентификатору prop

objFirst.key                          // начинается поиск опред. знач под идентификатором (ключом) key по цепочке наследования objFirst, 
                                      // а именно objFirst -> objSecond -> Object -> null. Сначала проверит 0-й ур-нь, т.е., сам ОБ objFirst.
                                      // И ничего не найдет, а потому начнет проверку на след. уро-не, т.е, ОБ objSecond, и поскольку св-во key находится 
                                      // в ОБ objSecond, то поиск прекращается на 1-м ур-не и мы получаем знач св-ва по идентификатору key

objFirst.unknownProp                  // начинается поиск опред. знач под идентификатором (ключом) unknownProp по цепочке наследования objFirst, 
                                      // а именно objFirst -> objSecond -> Object -> null. Сначала проверит 0-й ур-нь, т.е., сам ОБ objFirst.
                                      // И ничего не найдет, а потому начнет проверку на след. уро-не, т.е, ОБ objSecond, снова не найдет unknownProp,
                                      // его нет на этом ур-не. Потому JS будет проверять каждый последующий ур-нь, пока не дойдет до предела, а именно null.
                                      // Т.е. далее JS проверить след. ур-нь, а именно Object и, ничего не обнаружив, пойдет искать дальше. След. ур-нь - последний, т.к. есть null.
                                      // Не обнаружив никаких совпадений, JS будет интерпретировать данное св-во как несуществующее, а потому вернет undefined.


// ----------------------  Задание правила наследования в ОБ при его создании  -----------------------------------
let firstObject  = { prop: 'prop' }   // созд. ОБ firstObject со св-м prop = 'prop'

let secondObject = {                  // созд. ОБ secondObject со св-ми prop и __proto__
  propSecond: 'propSecond',
  __proto__: firstObject              // перезаписываем цепочку наследования secondObject на цепочку наследования firstObject 
                                      // (secondObject -> firstObject -> Object -> null)
}                                   
let thirdObject = {                  // созд. ОБ thirdObject со св-ми propThird и __proto__
  propThird:  'propThird',  
  __proto__: secondObject             // перезаписываем цепочку наследования thirdObject на цепочку наследования secondObject 
                                      // (thirdObject -> secondObject -> firstObject -> Object -> null)
}                                     
let nObject = {                       // созд. ОБ nObject со св-ми propN и __proto__
  propTN:     'propN',     
   __proto__: previousObject          // перезаписываем цепочку наследования secondObject на цепочку наследования firstObject
                                      // (nObject -> previousObject -> ... -> Object -> null)
} 

// ----------------------  Более современная форма задания наследования   -----------------------------------------
Object.create(obj)                    // создание нового ОБ на основании obj (НЕ создает ССЫЛОК, задает obj как начало цепочки наследования)
Object.getPrototypeOf(obj)            // возвращ. прототип (Родитель) obj
Object.setPrototypeOf(obj, protoObj)  // ставит protoObj как Родителя для obj

let firstObjectAlt  = {prop: 'prop'}                      // созд. ОБ firstObjectAlt 
let secondObjectAlt = Object.create(firstObject)          // созд. ОБ secondObjectAlt и Родителем firstObjectAlt
Object.getPrototypeOf(secondObjectAlt) === firstObjectAlt // прототип (Родитель) secondObjectAlt равняется firstObjectAlt
Object.setPrototypeOf(secondObjectAlt, {})                // задание нового Родителя secondObjectAlt в кач-ве пустого ОБ


//      Наследование конструкторов
function FirstConctructor() {         // создание конструктора FirstConctructor
  this.prop = 'prop'                  // создание св-а this.prop = 'prop'. НАСЛЕДУЕТСЯ
  this.method = () => {}              // создание метода this.method.      НАСЛЕДУЕТСЯ
  let privateProp = 'privateProp'     // создание приватной переменной privateProp = 'privateProp'. НЕ НАСЛЕДУЕТСЯ
  function privateMethod () {}        // создание приватной ф-ции privateMethod.                    НЕ НАСЛЕДУЕТСЯ
}
let smallObj = {smallProp: 'smallProp'} // создание ОБ smallObj со св-м smallProp = 'smallProp'. НАСЛЕДУЕТСЯ
let bigObj = {bigProp: 'bigProp'}       // создание ОБ bigObj   со св-м bigObj = 'bigObj'.       НАСЛЕДУЕТСЯ

function SecondConstructor() {        // создание конструктора SecondConstructor
  this.propSecond = 'propSecond'      // создание св-а this.propSecond = 'propSecond'. НАСЛЕДУЕТСЯ
  this.methodSecond = () => {}        // создание метода this.methodSecond.            НАСЛЕДУЕТСЯ
  let privatePropSecond = 'privatePropSecond' // создание приватной переменной privatePropSecond = 'privatePropSecond'. НЕ НАСЛЕДУЕТСЯ
  function privateMethodSecond () {}          // создание приватной ф-ции privateMethodSecond.                          НЕ НАСЛЕДУЕТСЯ
}
 
// Здесь нет привычного изменения цепочки наследования. Мы присваиваем иные конструкторы или ОБ в св-во prototype конструктора, который становится дочерним;
// и эти данные появятся в новосозданном ОБ от этого дочернего конструктора 
// ТИПОВОЙ вариант: *Constructor.prototype = **Conctructor
// __________________________________________________________________________________________________________________ - типовой
SecondConstructor.prototype = FirstConctructor; // присвоение прототипу SecondConstructor цепочки наследования FirstConctructor, 
                                                // т.е., структура прототипов SecondConstructor -> FirstConctructor.
                                                // (Остается цепочка наследования SecondConstructor -> Function -> Object -> null)
                                                // Т.е., в нососозданном ОБ от SecondConstructor теперь доступны след. св-ва и методы prop, propSecond, method, methodSecond
// ______________________________________________________________________________________________________________________________

SecondConstructor.prototype = smallObj;         // присвоение прототипу SecondConstructor цепочки наследования smallObj, 
                                                // т.е., структура прототипов SecondConstructor -> smallObj.
                                                // (Остается цепочка наследования SecondConstructor -> Function -> Object -> null)
                                                // Т.е., в нососозданном ОБ от SecondConstructor теперь доступны след. св-ва propSecond, smallProp и метод methodSecond

FirstConctructor.prototype = smallObj;          // присвоение прототипу FirstConctructor цепочки наследования smallObj, 
                                                // т.е., структура прототипов FirstConctructor -> smallObj.
                                                // (Остается цепочка наследования FirstConctructor -> Function -> Object -> null)
                                                // Т.е., в нососозданном ОБ от FirstConctructor теперь доступны след. св-ва prop, smallProp и метод method
smallObj.__proto__ = bigObj;                    // присвоение цепочке наследования smallObj цепочки наследования bigObj, 
                                                // т.е.,  цепочка наследования smallObj -> bigObj -> Object -> null.
// __________________________________________________________________________________________________________________ - типовой
SecondConstructor.prototype = FirstConctructor; // присвоение прототипу SecondConstructor цепочки наследования FirstConctructor, 
                                                // т.е., структура прототипов SecondConstructor -> FirstConctructor -> smallObj -> bigObj.
                                                // (Остается цепочка наследования SecondConstructor -> Function -> Object -> null)                                                
                                                // Т.е., в нососозданном ОБ от SecondConstructor теперь доступны след. св-ва и методы prop, propSecond, smallProp, bigProp, method, methodSecond
// _____________________________________________________________________________________________________________________________

function ThirdConstructor() {}                  // создание конструктора ThirdConstructor
ThirdConstructor.prototype.someprop = 'someprop';  // создание у прототипа ThirdConstructor св-ва someprop = 'someprop', 
                                                // т.е., структура прототипов ThirdConstructor -> { someprop: 'someprop' }.
                                                // Т.е., в нососозданном ОБ от ThirdConstructor теперь доступно св-во someprop
                                                // (Цепочка наследования SecondConstructor -> Function -> Object -> null)                                                

ThirdConstructor.prototype.constructor = FirstConctructor; // присвоение конструктору прототипа ThirdConstructor конструктор FirstConctructor, 
                                                // т.е., структура прототипов ThirdConstructor.
                                                // (Цепочка наследования ThirdConstructor -> Function -> Object -> null) 
                                                // Т.е., в нососозданном ОБ от FirstConctructor теперь доступны след. св-ва ---
// __________________________________________________________________________________________________________________ - типовой
ThirdConstructor.prototype = SecondConstructor; // присвоение прототипу ThirdConstructor конструктор SecondConstructor, 
                                                // т.е., структура прототипов ThirdConstructor -> SecondConstructor .
                                                // (Цепочка наследования ThirdConstructor -> Function -> Object -> null)   
                                                // Т.е., в нососозданном ОБ от ThirdConstructor теперь доступны след. св-ва prop, propSecond и метод methodSecond
// ______________________________________________________________________________________________________________________________
ThirdConstructor.prototype = { smallObj: smallObj }; // присвоение прототипу ThirdConstructor ОБ со св-м smallObj, 
                                                // т.е., структура прототипов ThirdConstructor -> s { smallObj: smallObj }.
                                                // (Цепочка наследования SecondConstructor -> Function -> Object -> null)   
                                                // Т.е., в нососозданном ОБ от ThirdConstructor теперь доступны след. св-во smallObj

ThirdConstructor.prototype = {                  // присвоение прототипу ThirdConstructor ОБ со св-ми someprop, smallObj, и изменение конструтора на SecondConstructor;
                                                // т.е., структура прототипов ThirdConstructor -> { constructor: SecondConstructor, someprop: 'someprop', smallObj: smallObj }.
                                                // (Цепочка наследования ThirdConstructor -> Function -> Object -> null) 
                                                // Т.е., в нососозданном ОБ от ThirdConstructor теперь доступны след. св-ва и методы someprop, smallProp и констуктор SecondConstructor
                                                // ПРИМЕЧАНИЕ. Новосозданный ОБ будет иметь метод constructor, кот. является конструктором
  constructor: SecondConstructor, 
  someprop: 'someprop',
  smallObj: smallObj,
}
ThirdConstructor.prototype = {                  // присвоение прототипу ThirdConstructor ОБ со св-ми someprop, smallObj, и изменение конструтора на самого себя ThirdConstructor;
                                                // т.е., структура прототипов ThirdConstructor -> { constructor: SecondConstructor, someprop: 'someprop', smallObj: smallObj }.
                                                // (Цепочка наследования ThirdConstructor -> Function -> Object -> null) 
                                                // Т.е., в нососозданном ОБ от ThirdConstructor теперь доступны след. св-ва и методы someprop, smallProp и констуктор ThirdConstructor
                                                // ПРИМЕЧАНИЕ. Новосозданный ОБ будет иметь метод constructor, кот. является конструктором
  constructor: ThirdConstructor, 
  someprop: 'someprop',
  smallObj: smallObj,
}

// 26-07-2024
///////////////////////////////////////////////////////////////////////////////////
// \\ //                        Наследование классов                      // \\ //
//////////////////////////////////////////////////////////////////////////////////
class FirstClass {                                  // создание класса FirstClass
  prop = 'prop'                                     // НАСЛЕДУЕТСЯ
  method() {}                                       // НАСЛЕДУЕТСЯ
  constructor(name) {                               // НЕ НАСЛЕДУЕТСЯ  
    this.name = name;
  }
  rewriteMethod() { console.log(1) };               // НАСЛЕДУЕТСЯ
  rewriteAnotherMethod() { console.log('птичка') }; // НАСЛЕДУЕТСЯ
  static staticProp = 'staticProp';                 // НАСЛЕДУЕТСЯ
  static staticMethod() { console.log('static') };  // НАСЛЕДУЕТСЯ
  #privateProp = '#privateProp';                    // НАСЛЕДУЕТСЯ, но НЕЛЬЗЯ использовать 
  get privateProp() { return this.#privateProp };   // НАСЛЕДУЕТСЯ
  set privateProp(value) { this.#privateProp = value }; // НАСЛЕДУЕТСЯ
  getprivateProp() { return this.#privateProp };    // НАСЛЕДУЕТСЯ   
  setprivateProp(value) {                           // НАСЛЕДУЕТСЯ
    this.#privateProp = value; 
    this.#privateMethod()
  };
  #privateMethod() { console.log('слоник') }        // НАСЛЕДУЕТСЯ, но НЕЛЬЗЯ использовать
}

FirstClass.staticProp                             
FirstClass.staticMethod()

class SecondClass extends FirstClass {            // создание класса SecondClass, кот. наследуется (extends) от FirstClass
  propSecond = 'propSecond'                       // НАСЛЕДУЕТСЯ
  methodSecond() { }                              // НАСЛЕДУЕТСЯ
  constructor(age, ...arg) {                      // НЕ НАСЛЕДУЕТСЯ. Происходит ПЕРЕопределение конструктора, из-за чего этот конструктор 
                                                  // не может создать в THIS начальный ОБ, он ожидает, когда это сделает родительский конструктор FirstClass.
                                                  // Поэтому мы должны сделать вызов конструтора родителя в этом конструкторе до обращения к THIS (с помощью SUPER)
    super(...arg)                                 // вызов конструтора родителя в этом конструкторе с помощью super с передачей аргументов, необходимых д/конструтора родителя
    this.age = age;
  }
  rewriteMethod() { console.log(2) };             // НАСЛЕДУЕТСЯ. ПЕРЕопределение метода. Родительский метод будет игнорироваться, т.к. метод с таким же именем есть на уровне поближе      
  rewriteAnotherMethod() {                        // НАСЛЕДУЕТСЯ. ПЕРЕопределение метода. Родительский метод будет игнорироваться, т.к. метод с таким же именем есть на уровне поближе      
    super.rewriteAnotherMethod()                  // с помощью super вызываем родительский метод rewriteAnotherMethod
    console.log('anoter bird') 
  };
  static staticPropSecond = 'staticPropSecond';                     // НАСЛЕДУЕТСЯ
  static staticMethodSecond() { console.log('static') };            // НАСЛЕДУЕТСЯ
  #privatePropSecond = '#privatePropSecond';                        // НАСЛЕДУЕТСЯ, но НЕЛЬЗЯ использовать
  get privatePropSecond() { return this.#privatePropSecond };       // НАСЛЕДУЕТСЯ
  set privatePropSecond(value) { this.#privatePropSecond = value }; // НАСЛЕДУЕТСЯ
  getprivatePropSecond() { return this.#privatePropSecond }         // НАСЛЕДУЕТСЯ
  setprivatePropSecond(value) {                                     // НАСЛЕДУЕТСЯ
    this.#privatePropSecond = value;
    this.#privateMethodSecond()
  };
  #privateMethodSecond() { console.log('elephant') }                // НАСЛЕДУЕТСЯ, но НЕЛЬЗЯ использовать
}

SecondClass.staticProp
SecondClass.staticMethod()
SecondClass.staticPropSecond
SecondClass.staticMethodSecond()

class ThirdClass extends SecondClass {            // создание класса ThirdClass с наследованием (extends) от SecondClass                
  thirdProp = 'thirdProp'
}

ThirdClass.staticProp
ThirdClass.staticMethod()
ThirdClass.staticPropSecond
ThirdClass.staticMethodSecond()

let objFromClass = new ThirdClass(37, 'Vasya')    // создание экз-ра класса ThirdClass с именем objFromClass.
// objFromClass имеет следующие св-ва:
// prop, #privateProp, propSecond, #privatePropSecond, thirdProp

// objFromClass имеет следующие методы:
// method, rewriteMethod, rewriteAnotherMethod, get privateProp, set privateProp, getprivateProp, setprivateProp, 
// methodSecond, get privatePropSecond, set privatePropSecond, getprivatePropSecond, setprivatePropSecond, #privateMethodSecond


// Проверка на принадлежность к определенному классу
obj instanceof Class                              // возвращает true если ОБ приналдежит хотя бы к одному из наследуемых классов

objFromClass instanceof ThirdClass                // true 
objFromClass instanceof SecondClass               // true 
objFromClass instanceof FirstClass                // true 
objFromClass instanceof UnknownClass              // false


// Изменение в цепочке наследования встроенных ОБ
Array.prototype.myNewMethod = () => {             // в прототип глобальных ОБ можно добавить свои методы и св-ва
  // some code
}
let arrayFromModifiedArray = []                   
arrayFromModifiedArray.myNewMethod                // каждая новосозданная от глобального ОБ сущность будет иметь эти новые св-ва и методы

// Можно также создать свою собственную структуру на основании глобальных ОБ
class MyArray extends Array {                     // создание собственного массива на основании глоб. ОБ Array
  method() {}                                     // добавление собственного метода method
}
let myArrayFromModifiedArrayClass = new MyArray(3, 5, 6)  // создание массиво-подобный ОБ, содержаший всё, что есть в глоб. ОБ Array,
                                                  // и доп. методы и св-ва, которые мы добавили




  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //                                                                      О Ш И Б К И                                                                      //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  try...catch, new Error, throw
try {                         // конструкция try...catch позволяет отловить любую ошибку в пределах блока try (как свои, так и встроенный) 
                              // и передать ошибку в блок catch
  throw new Error('msg')      // throw мгновенно прекращает выполнение кода и опрокидывает следующую за ней сущность (любой тип данных). 
                              // В данном случае это экз-р класса Error, в кот. мы передаем аргумент 'msg'
} catch (error) {             // блок catch отлавливает любую ошибку внутри блока try и позволяет обработать ее
    console.error(error)      // мы получим ОБ-экз-р Error, у кот. будет св-во message со знач 'msg'
}

try {                         // try отлавливает любые ошибки, а не только через throw 
  // какой-то неправильный код
  let m = undefined
  m()
} catch (error) {
  console.error(error)        // мы получим TypeError, у кот. будет св-во message со знач 'm is not a function'
}

try {
  // какой-то неправильный код
} catch {                    // иногда нам необязательно принимать error в catch  
  console.log('info')
}

try {
  throw new Error('msg')
} catch (error) {
  console.error(error)
} finally {                 // finally - часть конструкции, которая выполнится в любом случае в самом конце
  console.log('finally')
}

try {
  throw new Error('msg')
} catch (error) {
  throw error               // если опрокинуть ошибку в блоке catch, то она полностью прерывает код
}

try {                       // иногда можно опустить catch. Это если нужно отделить участки кода. Возникшая ошибка полностью прерывает код
  throw new Error('msg')
} finally {
  console.log('finally')
}


// class Error, расширение ошибок
class Error {                               // описание встроенного класса Error
  constructor(message)  {                   // принимает 1 парам message
    this.message = message                  // парам записывается в св-во message для новосозданных ОБ
    this.name = 'Error'                     // создается св-во name со стандартным знач 'Error' 
    this.stack = '< стек вызовов >'         // иногда создается св-во, описывающее порядок вызовов
  }
}

// Мы можем создавать свои собственные ошибки на основании глоб. ОБ Error
class NotFoundError extends Error {         // создадим свой класс для обозначения ненайденных ошибок
  constructor(message)  {
    super(message)                          // вызываем родительский конструктор и передаем в него парам, который мы получили
    this.name = 'NotFoundError'             // переопределяем св-во name для нашего класса
    this.code = 404                         // добавляем св-во code
  }
}

class PropertyRequiredError extends Error { // создадим свой класс для обозначения упущенных обязательных св-в (Require - требовать)
  constructor(property)  {
    super('required property: ' + property)
    this.name = 'PropertyRequiredError'     // переопределяем св-во name для нашего класса
  }
}

// Пример использования расширенных ошибок, конструкции try...catch и instanceof
try {                                       
  // some code
  if (!prop) {
    throw new PropertyRequiredError('prop')     // выкидываем экз-р класса PropertyRequiredError
  } else {
    throw new NotFoundError('Not found URL...') // выкидываем экз-р класса NotFoundError
  }
  // some code
} catch (error) {
  if (error instanceof PropertyRequiredError) { // если наша ошибка принадлежит нашему классу PropertyRequiredError, то мы обрабатываем ее одним способом
    someFunc(error.message)
  } else if (error instanceof NotFoundError) {  // если наша ошибка принадлежит нашему классу NotFoundError, то мы обрабатываем ее другим способом
    tryAgainFunc()
  } else {                                      // иначе опрокидываем неизвестную ошибку
    throw error               
  }
}

