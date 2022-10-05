"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
function negyzet(szam) {
    return szam * szam;
}
let message = "Hello World";
console.log(message);
let user;
if (message.startsWith('H')) {
    console.log('H-val kezdődik');
}
else {
    user = 2;
}
let ertek = 5;
console.log(ertek);
let masik = 4;
//kitalalja magatol
let s = negyzet(3);
let user1 = new user_1.User('Maurisz', 19);
user1.kiir();
class MyUser extends user_1.User {
}
let users = [];
users.push(user1);
users.push(new user_1.User('Jamblebee', 150));
console.log(users);
let u = users[0];
for (let e of users) {
    e.kiir();
}
let usernames = ["u1", "u2"];
let userHalmaz = new Set();
let nevUser = new Map(); //manualis hozzarendeles
let nevUser2 = new Map(); //auto hozza rendeles
nevUser2.set("usernev", new user_1.User("valami", 33));
nevUser2.get("usernev").kiir();
