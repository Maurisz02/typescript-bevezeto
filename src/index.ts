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
//npm i -g typescript

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

let users : User[] = [];
users.push(user1);
users.push(new User('Jamblebee', 150));
console.log(users);
let u = users[0];
for(let e of users){
    e.kiir();
}

let usernames : Array<string> = ["u1","u2"];

let userHalmaz : Set<User> = new Set();

let nevUser : Map<string,User> = new Map(); //manualis hozzarendeles
let nevUser2 = new Map(); //auto hozza rendeles

nevUser2.set("usernev",new User("valami",33));
nevUser2.get("usernev").kiir();