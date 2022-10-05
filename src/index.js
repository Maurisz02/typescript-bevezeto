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
//console.log(users); igy nem tudja kiirni for each el kell
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
function osszeg(t) {
}
console.log(osszeg([1, 423, 55, 2]));
console.log(osszeg(['a', 'b', 'zs']));
function idKiir(id) {
    if (typeof id === 'number') {
        console.log(id);
    }
    else {
        console.log(id.toUpperCase());
    }
}
idKiir(12);
idKiir("aaaaaaaaaa");
let elem = document.getElementById('sa');
if (elem != null) {
    console.log(elem.textContent);
}
console.log(elem === null || elem === void 0 ? void 0 : elem.textContent);
function szamol() {
    let szam = parseInt(document.getElementById('szam').value); //as tipus kényszerítés
    document.getElementById('kimenet').textContent = negyzet(szam).toString();
}
function init() {
    var _a;
    (_a = document.getElementById('szam')) === null || _a === void 0 ? void 0 : _a.addEventListener('input', szamol);
}
document.addEventListener('DOMContentLoaded', init);
