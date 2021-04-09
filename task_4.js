// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:
// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
// Создать экземпляры каждого прибора;
// Вывести в консоль и посмотреть результаты работы, гордиться собой :)

// Общие требования:
// Имена функций, свойств и методов должны быть информативными
// Соблюдать best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
// использование синтаксиса es6 (кроме функции-конструкторов) и т.д.


function DeviceCreate() {
  this.type = 'бытовая техника',
  this.noise = 'шумит'
};

DeviceCreate.prototype.turnOn = function() {
  console.log(`включаем ${this.name} в сеть`);
}
DeviceCreate.prototype.turnOff = function() {
  console.log(`выключаем ${this.name} из сети`);
}

function SubDevice1(name, power) {
  this.name = name,
  this.power = power,
  this.features = 'робот'
};

SubDevice1.prototype = new DeviceCreate();

SubDevice1.prototype.feature = function() {
  console.log(`это не обычный ${this.name}, а ${this.name}-${this.features}`);
}

function SubDevice2(name, power, weight) {
  this.name = name,
  this.power = power,
  this.weight = weight
};

SubDevice2.prototype = new DeviceCreate();

SubDevice2.prototype.locasion = function() {
  console.log(`${this.name} имеет вес ${this.weight} кг`);
}

const vacuumСleaner = new SubDevice1('пылесос', 1500);
const fridge = new SubDevice2('холодильник', 500, 50);

// console.log(vacuumСleaner);
// console.log(fridge);

vacuumСleaner.feature();
fridge.locasion();

vacuumСleaner.turnOn();
fridge.turnOn();

vacuumСleaner.turnOff();
fridge.turnOff();