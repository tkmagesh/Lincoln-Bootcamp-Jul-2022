
//1. ReadOnly

/* A product is a type with the keys as strings and values as strings or numbers */

interface ProductType {
    readonly [key : string] : number | string
}

let pencilObj : ProductType = {id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary', manufacturer : 'IBM', discount : 10}

console.log(pencilObj)

interface EmployeeType{
    id : number,
    name : string,
    city : string
}

/* 
interface ReadOnlyEmployeeType {
    readonly id : number,
    readonly name : string,
    readonly city : string
} 
*/

type ReadOnlyType<T> = { readonly [key in keyof T] : T[key] };

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
function readOnly<T>(obj : T) : Readonly<T> {
    return Object.freeze(obj);
}

let readOnlyEmployee = readOnly({
    id : 100,
    name : 'Magesh',
    city : 'Bangalure'
})

//optional (?)
interface Address{
    doorNo : string,
    line1 : string,
    line2? : string,
    city : string,
    zipcode : number
}

let address : Address = { doorNo : "102-A", line1 : "", city : "Bangalure", zipcode : 560043}



//2. Partial

type PartialType<T> = {  [key in keyof T]? : T[key] };

let addressUpdates : PartialType<Address> = {
    line2 : 'somewhere in the main street'
} 


//builtin type utility (Partial)
let cityUpdate : Partial<Address> = {
    city : 'Delhi'
}


//3. Nullable

type Nullable<T> = { [key in keyof T] : T[key] | null }

let nullableAddress : Nullable<Address> = {
     doorNo : "102-A", 
     line1 : null, 
     city : "Bangalure", 
     zipcode : 560043
};



//4. Pick (Creating a subtype from an existing type)
//ShortAddress = ONLY doorNo, city, zipcode 

type ShortAddress = Pick<Address, "doorNo" | "city" | "zipcode">

/* 
type CustomPick<T, K extends keyof T> = {
    [key in K] : T[key]
}

type ShortAddress2 = CustomPick<Address, "doorNo" | "line1"> 
*/

//5. Omit (Creating a subtype with all the attributes except the given ones)
type AddressLines = Omit<Address, "doorNo" | "city" | "zipcode">



//6. Record (To create a type containing all the attributes of the same type)
type Dummy = Record<"m1" | "m2" | "m3", string>

/* 
type AddressInput = {
    doorNo : string,
    line1 : string,
    line2? : string,
    city : string,
    zipcode : string
} 
*/

//type AddressInput = Record<"doorNo" | "line1" | "line2" | "city" | "zipcode", string>

type AddressInput = Record<keyof Address, string>


//7. Extract (Alows us to extract from a set of types the one that is common in another type)

interface Animal {
    name : string,
    sound : string,
    age : number
}

interface Human {
    name : string,
    nickname : string,
    age : number
}

type LivingThingType = Extract<keyof Animal, keyof Human>

type NameType = Record<LivingThingType, string>

//8. Exclude (takes all the properties from the given type except the specified one)

type Ageless = Exclude<keyof Human, "age">


// Utility Type Reference : https://www.typescriptlang.org/docs/handbook/utility-types.html





