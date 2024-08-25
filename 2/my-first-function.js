// создать ф-цию, принимающую 1 парам - массив arrayOfNumbers и возвр. ОБ с 7 св-вами : min, max, sum, length, amountOfNegative, 
// amountOfPositive и hasZero, 
// а также методы: reverse (возвр. перевернутый массив), toNegative (меняет знач. массива на противоположные), filterForMe (принимает
// ф-цию в кач-ве арг-та, кот. возвр. булево, и возвр. отфильтрованный массив), toNormal (возвр. массиву исх. значение)

//    Решение - разбивка на подзадачи
// 1. описать ф-цию в общем виде, с парам arrayOfNumbers
// 2. описать возврат результата, а именно ОБ с 7 св-вами (min, max, sum, length, amountOfNegative, amountOfPositive и hasZero, ) и 4 методами (reverse, toNegative, filterForMe, toNormal)
// 3.  найти мин. знач. в массиве  (min: number)
// 4.  найти макс. знач. в массиве (max: number)
// 5.  найти сумму значений эл-тов массива (sum: number)
// 6.  найти длину массива (length: number)
// 7.  найти к-во отрицат. значений (amountOfNegative: number)
// 8.  найти к-во положит. значений (amountOfPositive: number)
// 9.  проверить наличие 0 (hasZero: boolean)
// 10. сохранить в this исходное значение массива для метода toNormal - новое св-во obj.arrayOfNumbers = arrayOfNumbers;
// 11. метод reverse - написать ф-цию без исп-я Array.reverse(), кот. вернет массив в обратном порядке, т.е. forEach создать новый массив с конца исх. до его начала
// 12. метод toNegative - написать ф-цию, кот. возвращает массив значений с противоположными знаками  - map, умножить на -1
// 13. метод filterForMe - написать ф-цию, кот. принимает в парам ф-цию под именем filterFunction и с помощью метода массива filter, 
// внутри которого будет возвращаться рез-т вызова filterFunction (в которую (filterFunction) будет передаваться эл-т в кач-ве парам) 
// и возвращает отфильтрованный массив 
// function filterForMe(filterFunction) {return arrayOfNumbers.filter((el) => {return filterFunction(el)})}
// 14. метод toNormal - возвращает исх. массив arrayOfNumbers из this
// 15. заменить вызовы методов из массива arrayOfNumbers на массив this.arrayOfNumbers - ?????????????????
// 16. проверить работу с массивами:
//    [2, 6, 9, 25, -6]
//    [2, 0, 2222, 2, 7]
//    [0, -22, 69999, 0, -1
//    [3/5, -0.000000001, 232323n, 5n, 09n, Math.PI]
//    [25e2, Math.E, Infinity, NaN, 0n]
// 17. попробовать запустить ф-цию с другим типом данных
// 18. оптимизировать функционал
// 19. сохранить изменения в git, закоммитить и запУшить в ветку на github


function createObject(arrayOfNumbers) {
  return {
    arrayOfNumbers: [...arrayOfNumbers],
    min: Math.min(...arrayOfNumbers),
    max: Math.max(...arrayOfNumbers),
    maxSort: [...arrayOfNumbers].sort((acc, next) => (next - acc))[0],  
    sum: arrayOfNumbers.reduce((acc, next) => (acc + next)),
    length: arrayOfNumbers.length,
    amountOfNegative: arrayOfNumbers.filter((el) => el < 0).length,
    amountOfPositive: arrayOfNumbers.filter((el) => el > 0).length,
    hasZero: arrayOfNumbers.indexOf(0) > -1,
    reverseUnshift() {
      let newArray = [];
      this.arrayOfNumbers.forEach((element) => newArray.unshift(element)) 
      return newArray;
    },
    reverse() {
      let newArray = [];
      for (i = arrayOfNumbers.length - 1; i >= 0; i--)
      newArray.push(arrayOfNumbers[i]); 
      return newArray;
    },
    toNegative() {
      return this.arrayOfNumbers.map((el) => -1 * el ) 
    },
    filterForMe(filterFunction) { 
      // return arrayOfNumbers.filter((el) => filterFunction(el)) 
      // более сокращенная запись
      return arrayOfNumbers.filter(filterFunction) 
    },
    toNormal() {
      return this.arrayOfNumbers
    },
  }
}