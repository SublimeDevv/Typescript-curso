// // import { Hero } from "./clases/Hero";
// // // import Poderes from "./data/powers";

import { genericFunction } from '../generics/generics';

// // // console.log(Poderes[0].power);
// // const ironman = new Hero('Iron Man', 100, 12);
// // console.log(ironman.power);
// import { genericFunction, printObject } from "./generics/generics";
import { Villian, Hero } from '../interfaces';

// // printObject('Hola');
// // printObject( new Date());
// // printObject( [1,2,3,4,5,6] )


// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction('Hola').includes('H'));


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    danger: 130
}

console.log(genericFunction<Villian>(deadpool).danger)