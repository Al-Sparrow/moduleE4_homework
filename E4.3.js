function protoFunc() {
    const empty = Object.create(null);
    console.log(empty.constructor);
    console.log(empty.getPrototypeOf);
    return empty
}


protoFunc()