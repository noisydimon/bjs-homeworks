// Класс оружия

class Weapon {
	constructor(name = 'weapon', attack = 3, durability = 3, range = 1) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.initDurability = durability;
		this.range = range;
	};

	takeDamage(damage) {
		this.durability-=damage;

		if(this.durability <= 0){
			this.durability = 0;
		}
	};

	getDamage() {
		if(this.durability <= (this.initDurability/this.durability) * 30) {
			return this.attack / 2;
		} else if(this.durability <= 0) {
			return 0;
		} else {
			return this.attack;
		}
	};

	isBroken() {
		return !(this.durability > 0);
	};
}


// Классы основных оружий
class Arm extends Weapon {
	constructor() {
		super('Рука', 1, Infinity, 1);
	}
}

class Bow extends Weapon {
	constructor() {
		super('Лук', 10, 200, 3);
	}
}

class Sword extends Weapon {
	constructor() {
		super('Меч', 25, 500, 1);
	}
}

class Knife extends Weapon {
	constructor() {
		super('Нож', 5, 300, 1);
	}
}

class Staff extends Weapon {
	constructor() {
		super('Посох', 8, 300, 2);
	}
}

class Axe extends Sword {
	constructor() {
		super();

		this.name = 'Секира';
		this.attack = 27;
		this.durability = 800
		this.initDurability = 800
	}
}

class StormStaff extends Staff {
	constructor() {
		super();

		this.name = 'Посох Бури';
		this.attack = 10;
		this.range = 3;
	}
}

class LongBow extends Bow {
	constructor() {
		super();

		this.name = 'Длинный лук';
		this.attack = 15;
		this.range = 4;
	}
}



//Задание 1

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getnames(array) {
  return array.map(item=>item.name);
  };

console.log(getnames(weapons))


function getCountReliableWeapons(offeredDurability) {
  const durab = weapons.filter(weapons=>weapons.durability > offeredDurability)
  return durab
}

console.log(getCountReliableWeapons(200).length)






function hasReliableWeapons(offeredDurability) {
  if (getCountReliableWeapons(offeredDurability).length > 0) {
    return ("есть и попрочней");
  }
}


console.log(hasReliableWeapons(200))









function getReliableWeaponsNames(offeredDurability) {
 
  const durab = weapons.filter(weapons=>weapons.durability > offeredDurability);
  
  return getnames(durab)// не работает вывод имен???
}
console.log(getCountReliableWeapons(400))



function getTotalDamage() {
  return weapons.reduce((acc, item) => {
   return acc + item.attack;
  }, 0);
}
console.log(getTotalDamage())
*/



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
  {args:[1,2,3], result: 12},
  {args:[2,4,8], result: 15},
  {args:[2,4,7], result: 10},
  {args:[4,7,30], result: 0},
  {args:[436,3], result: 60},
  {args:[1], result: 10},
  {args:[1,2,3,4,5], result: 23},
  {args:[1,2,3,6,5,2], result: 83},
  {args:[1,4,23,6,31,1,9], result: 423},
  {args:[1,3,4,52,25,3,6], result: 645},];

//2.2.0

function memorize(fn, limit) {
  function mSum(args) {
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
  console.log(memory);
  return mSum;
}
const mSum = memorize(sum, 2);
mSum(args);