//ts mean type script
// let nev : valtozó típus
//npm i letolti
//npx tsc leforditja a type scriptet Type Script Converter
//npx tsc --watch ugy mint a webpacknel automata forditast végez
//npm és npx különbség
//function visszatérési érték értéke masodik : utan () közé : {}
//node ./src/index.js
//tsconfig > target allitja a typescript verzióját
//export import combo

import { User } from "./user";


function negyzet (szam : number) : number {
    return szam*szam;
}

let message : string = "Hello World";
console.log(message);

let user;

if (message.startsWith('H')){
    console.log('H-val kezdődik');
}else{
    user = 2;
}

let ertek : number = 5;
console.log(ertek);

let masik = 4;
//kitalalja magatol

let s : number = negyzet(3)

let user1 = new User('Maurisz', 19);
user1.kiir();

class MyUser extends User{

}