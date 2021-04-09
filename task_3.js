// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.


function CreateObj() {
  return Object.create(null);
}

console.log(CreateObj());