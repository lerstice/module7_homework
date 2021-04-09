// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.


function getKeys(obj) {
  if (typeof obj === 'object') {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        console.log(`Пара ключ/значение: ${key}/${value}.`);
      };
    };
  } else {
    console.log('В качестве аргумента функции должен быть передан объект.');
  };
};

const newObj = {
  city: 'Moscow',
  population: 12636312,
  age: 873
};

const protoObj = Object.create(newObj);
protoObj.test = 'test';

getKeys(newObj);
getKeys(protoObj);