// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:
// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.


class ParentDevice {
  constructor() {
    this.type = 'бытовая техника';
    this.noise = 'шумит';
  }
  turnOn = function() {
    console.log(`включаем ${this.name} в сеть`);
  }
  turnOff = function() {
    console.log(`выключаем ${this.name} из сети`);
  }
}

class ChildDevice1 extends ParentDevice {
  constructor(name, power) {
    super();
    this.name = name;
    this.power = power;
    this.features = 'робот';
  }
  feature = function() {
    console.log(`это не обычный ${this.name}, а ${this.name}-${this.features}`);
  }
}

class ChildDevice2 extends ParentDevice {
  constructor(name, power, weight) {
    super();
    this.name = name;
    this.power = power;
    this.weight = weight;
  }
  locasion = function() {
    console.log(`${this.name} имеет вес ${this.weight} кг`);
  }
}

let vacuumСleaner = new ChildDevice1('пылесос', 1500);
let fridge = new ChildDevice2('холодильник', 500, 50);

// console.log(vacuumСleaner);
// console.log(fridge);

vacuumСleaner.feature();
fridge.locasion();

vacuumСleaner.turnOn();
fridge.turnOn();

vacuumСleaner.turnOff();
fridge.turnOff();