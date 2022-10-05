//ts mean type script
// let nev : valtozó típus
//npm i letolti
//npx tsc leforditja a type scriptet Type Script Converter
//npx tsc --watch ugy mint a webpacknel automata forditast végez
//npm és npx különbség
//function visszatérési érték értéke masodik : utan () közé : {}
//node ./src/index.js

class User{
    #nev : string;
    #eletkor : number;

    constructor(nev: string,eletkor:number){
        this.#nev = nev;
        this.#eletkor = eletkor;
    }

    kiir() : void {
        console.log(this.#nev,this.#eletkor);
    }

}

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