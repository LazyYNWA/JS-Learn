// 18-07-2024
// 1. СПИРАЛЬ
// Создать ф-цию, принимающую 4 парам x, y, startX, startY, где х - это к-во рядов, y - к-во столцбов,startX, startY - начальная точка.
// Ф-ция строит матрицу (двумерный массив) и выводит матрицу и возвращает массив шагов по спирали
//     Решение - разбивка на подзадачи
// 1. описать ф-цию в общем виде
// 2. описать возврат результата, а именно вывод матрицы и возврат массива шагов по спирали
// 3. построить матрицу по заданным парам x, y
// 4. построить массива шагов по спирали по заданным парам startX, startY
// 5. проверить работу 
// 6. оптимизировать
// 7. сдать!!!


/////////////////////////////////////////////////////////////////////////////////////////////////
function spiral(x, y, startX, startY) {
  if (startX > x || startY > y || startX === 0 || startY === 0) {
    throw console.log('Bad params!')
  }

  function runNextStep(startX, startY) {
    let item = getItem(startX, startY);
    checkItem(item);
  }
  function getItem(startX, startY) {
    let startXParam = startX - 1;
    let startYParam = startY - 1;
    if (!(startX > x || startY > y || startX <= 0 || startY <= 0)) {
      return arr[startXParam][startYParam];  
    }    
  }
  function checkItem(item) {
    if (item) {
      amountDefinedItems++
      arrSteps.push(item);
    }
  }

  function stepsInRightDirection(startX, startY, deltaX, deltaY) {
    if (deltaX === 0 && deltaY > 0) {
      for (let i = 1; i <= deltaY; i++) {
        runNextStep(startX, startY + i)
      }
    } else if (deltaX > 0 && deltaY === 0) {
      for (let i = 1; i <= deltaX; i++) {
        runNextStep(startX + i, startY)
      }
    } else if (deltaX === 0 && deltaY < 0) {
      for (let i = 1; i <= -deltaY; i++) {
        runNextStep(startX, startY - i)
      }
    } else if (deltaX < 0 && deltaY === 0) {
      for (let i = 1; i <= -deltaX; i++) {
        runNextStep(startX - i, startY)
      }
    }
  }

  let arr = [];
  for (i = 1; i <= x; i++) {
    let arrStr = [];
    for (j = 1; j <= y; j++) {
      arrStr.push(i + '.' + j)
    } arr.push(arrStr)
  }
  console.log('--------------------------------------------')
  for (i = 0; i < x; i++) {
    console.log(arr[i].join("  "))
  }
  console.log('-------------------------------------------')

  let arrSteps = [getItem(startX, startY)];
  let amountDefinedItems = 1;
  let amountUndefinedItems = 0;
  const amountItems = x * y;

  for (let i = 1; ; i++) {
    if (amountDefinedItems === amountItems) { 
      return arrSteps 
    }
    if (i % 2 === 0) {
      if (amountDefinedItems === amountItems) { 
        return arrSteps 
      }
      stepsInRightDirection(startX, startY, 0, i * (-1))
      startY -= i
      if (amountDefinedItems === amountItems) { 
        return arrSteps 
      }
      stepsInRightDirection(startX, startY, i * (-1), 0)
      startX -= i
    } else {
      if (amountDefinedItems === amountItems) {
        return arrSteps 
      }
      stepsInRightDirection(startX, startY, 0, i)
      startY += i
      if (amountDefinedItems === amountItems) { 
        return arrSteps 
      }
      stepsInRightDirection(startX, startY, i, 0)
      startX += i
    }
  }
  return arrSteps
}

let sp1 = spiral(4, 5, 3, 2)
let sp2 = spiral(5, 4, 1, 2)
let sp3 = spiral(3, 3, 1, 1)