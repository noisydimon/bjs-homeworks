const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getnames(array) {
  return array.map(item=>item.name);
  };

getnames(weapons)
