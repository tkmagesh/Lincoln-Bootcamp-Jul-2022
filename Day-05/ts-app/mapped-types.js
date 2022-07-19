"use strict";
//1. ReadOnly
let pencilObj = { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary', manufacturer: 'IBM', discount: 10 };
console.log(pencilObj);
/* let readOnlyEmployee : ReadOnlyType<EmployeeType> = {
    id : 100,
    name : 'Magesh',
    city : 'Bangalure'
} */
/*
function readOnly<T>(obj : T) : ReadOnlyType<T> {
    return Object.freeze(obj);
}
*/
//builtin utility type Readonly
function readOnly(obj) {
    return Object.freeze(obj);
}
let readOnlyEmployee = readOnly({
    id: 100,
    name: 'Magesh',
    city: 'Bangalure'
});
let address = { doorNo: "102-A", line1: "", city: "Bangalure", zipcode: 560043 };
let addressUpdates = {
    line2: 'somewhere in the main street'
};
//builtin type utility (Partial)
let cityUpdate = {
    city: 'Delhi'
};
let nullableAddress = {
    doorNo: "102-A",
    line1: null,
    city: "Bangalure",
    zipcode: 560043
};
