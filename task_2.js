// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function checkObj(str, obj) {
  if (str in obj) {
    console.log(true)
  } else {
    console.log(false);
  }
}

const testObj = {
  name: 'Lera',
  age: 28
};

checkObj('age', testObj);