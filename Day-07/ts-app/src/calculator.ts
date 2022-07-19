//the following will be assembled in a module object and the module object is exported
export function add(x : number, y : number) : number {
    return x + y;
}

export function subtract(x : number, y : number) : number {
    return x - y;
}

//default exports
//there can be ONLY ONE default export from a module

const utils = {
    isEven : (n : number) => n % 2 === 0,
    isOdd : (n : number) => n % 2 !== 0,
}

export default utils;