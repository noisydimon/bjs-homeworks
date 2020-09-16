

//Задание 1

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames(array) {
  return array.map(item => item.name);
};
console.log(getNames(weapons))

function getCountReliableWeapons(offeredDurability) {
  return (weapons.filter(weapons => weapons.durability > offeredDurability).length)
}
console.log(getCountReliableWeapons(200))

function hasReliableWeapons(offeredDurability) {
  return (weapons.some(item => item.durability > offeredDurability)
  )
}

function getReliableWeaponsNames(offeredDurability) {

  const durab = weapons.filter(weapons => weapons.durability > offeredDurability);
  console.log(durab)

  return durab.map(item => item.name)
}

console.log(getReliableWeaponsNames(200))

function getTotalDamage() {
  return weapons.reduce((acc, item) => acc + item.attack, 0);
}
console.log(getTotalDamage())



//Задание 2

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) { }
};
let args = [1, 2, 3];
function sum(...args) {
  // Замедление на половину секунды.
  sleep(500); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
};

function compareArrays(arr1, arr2) { //сравнивает массивы
  console.log(arr1, arr2);
  if (arr1.length === arr2.length) {
    return arr1.every((item, i) => item === arr2[i]);
  }
};


//const compareArrays = (arr1, arr2) => arr1.length === arr2.length || arr1.every((item, i) => item === arr2[i]);
/*
console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true
*/
const memory = [
  { args: [1, 2, 3], result: 12 },
  { args: [2, 4, 8], result: 15 },
  { args: [2, 4, 7], result: 10 },
  { args: [4, 7, 30], result: 0 },
  { args: [436, 3], result: 60 },
  { args: [1], result: 10 },
  { args: [1, 2, 3, 4, 5], result: 23 },
  { args: [1, 2, 3, 6, 5, 2], result: 83 },
  { args: [1, 4, 23, 6, 31, 1, 9], result: 423 },
  { args: [1, 3, 4, 52, 25, 3, 6], result: 645 },];

//2.2.0

function memorize(fn, limit) {
  let memory = []
  return function (...args) {
    let elemArr = memory.find(item => compareArrays(item.args, args));
    if (elemArr) {
      return elemArr.result;
    }
    const resultFn = fn(...args);
    memory.push({ args: args, result: resultFn });
    if (memory.length > limit) {
      memory.shift()
    }
    return resultFn;
  }
}
const mSum = memorize(sum, 2);
mSum(args)