"use strict";
//importing the module object and assigning to the 'calc' variable
/*
import * as calc from './calculator'
console.log(calc.add(100,200))
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
import * as calc from './calculator'
const add = calc.add;
console.log(add(100,200))
*/
/*
import * as calc from './calculator'
const { add } = calc;
console.log(add(100,200))
*/
/*
import { add } from './calculator'
console.log(add(100,200))
*/
//importing the default exported entity
/*
import utilsObj from './calculator'
console.log(utilsObj)
*/
//importing the module & default export
var calculator_1 = __importStar(require("./calculator"));
console.log(calculator_1.default.isEven(21));
console.log((0, calculator_1.add)(100, 200));
