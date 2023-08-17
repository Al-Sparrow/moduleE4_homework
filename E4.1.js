const obj1 = {a: 'hello', b: 123, c: 'str', d: 3.14};

function myFunc(obj1) {
    for (let key in obj1) {
        console.log(key);
    }    

}

myFunc(obj1)