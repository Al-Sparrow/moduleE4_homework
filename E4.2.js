const search = prompt('Введите искомое свойство');
const obj1 = {a: 'hello', b: 123, c: 'str', d: 3.14};

function myFunc(search, obj1) {
   
    console.log(search in obj1);
   
}

myFunc(search, obj1)