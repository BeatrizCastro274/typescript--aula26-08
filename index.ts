//let title: string = 'Tabata Timer - Aula 19/08';
let title: string = 'Olá mundo!';
document.getElementById('app.title').innerHTML = title;

//let counter = 0;
//let rodada = 0;
//let estado = 'Relaxado';

// Aula 26/08
let list: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1> Array declaration</h1>
<h2> list: ${list} </h2>
<h2>Other list: ${otherList} </h2>
`;
let me: [string, number];
me = ['Beatriz', 21];

const appDivTuple: HTMLElement = document.getElementById('app-tuple');
appDivTuple.innerHTML = `
<h1>Tuple</h1>
<h2> Me chamo ${me[0]} e tenho ${me[1]} anos. </h2>
`;

enum Color {
  Red,
  Green,
  Blue,
}
let color1: Color = Color.Green;

enum ColorwithRef {
  Red = 10,
  Green = 20,
  Blue = 30,
}
let color2: ColorwithRef = ColorwithRef.Blue;
const appDivEnum: HTMLElement = document.getElementById('app-Enum');
appDivEnum.innerHTML = `
<h1>Enumerated types</h1>
<h2>Cor 1: ${color1}</h2>
<h2>Cor 2: ${color2}</h2>
`;

let notSure: any = 4;
notSure = "Maybe I'm a string";
notSure = false; //okay, definitely a boolean

const appDivAny: HTMLElement = document.getElementById('app-Any');
appDivEnum.innerHTML = `
<h1>Any variable</h1>
<h2>${notSure}</h2>
`;

function warnUser(): void {
  console.log('this is my warning message');
}
let myFunction: void = warnUser();

let unusable: void = undefined;
unusable = null;

myFunction;

const appDivNull: HTMLElement = document.getElementById('app-Null');
appDivNull.innerHTML = `
<h1>Void</h1>
<h2> unusable: ${unusable}</h2>
<h2>My Function: ${myFunction}</h2>
`;

//declare function create(o: object | null): void;
//create({ prop: 0 }); //OK
//create(null); //ok
//create(42); //erro
//create('String'); //erro
//create(false); //erro
//create(undefined); // OK
//const appDivObject: HTMLElement = document.getElementById('app-Obj');
//appDivObject.innerHTML = `
//<h1>Object</h1>
//`;

let someValue: any = 'This is a string';
let strLength: number = (<string>someValue).length;
let someValue2: any = 'This is a string';
let strLength2: number = (someValue2 as string).length;

const appDivType: HTMLElement = document.getElementById('app-Type');
appDivType.innerHTML = `
<h1>Type assertations</h1>
`;

function sum(n1: number, n2: number): number {
  return n1 + n2;
}

function fullName(pessoa: { name: string; lastname: string }): string {
  return pessoa.name + ' ' + pessoa.lastname;
}

const appDivFunc: HTMLElement = document.getElementById('app-Func');
appDivFunc.innerHTML = `
<h1>Functions</h1>
<h2> Soma de 2 e 3: ${sum(2, 3)}</h2>
<h2> Soma de 11 e 329: ${sum(11, 329)}</h2>
<h2> Meu nome completo: ${fullName({
  lastname: 'Araujo',
  name: 'Beatriz C.',
})}</h2>
`;

//Import stylesheet
import './style.css';

let paragraph: string = 'Blablabla...';

let counter = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appP: HTMLElement = document.getElementById('app.p');
  appP.innerHTML = 'Contador:' + counter;
}, 1000);

const btn = document.getElementById('app.btn');
btn?.addEventListener('click', alertMethod);
function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando com Typescript');
}

// Write TypeScript code!

const appH1: HTMLElement = document.getElementById('app.h1');
appH1.innerHTML = title;

// Aula 19/08
//let intervalId = setInterval(() => {
//  counter = counter + 1; //counter++
//  let counterDiv = document.getElementById('app.counter');
//  let rodadaDiv = document.getElementById('app.rodada');
//  let estadoDiv = document.getElementById('app.estado');
//  if (rodada < 8) {
//    if (counter < 20) {
//      estado = 'Treine!';
//    } else {
//      estado = 'Relaxe';
//    }
//    if (counter > 30) {
//      counter = 0;
//      rodada++;
//    }
//  } else {
//    estado = 'Finalizado!';
//    counter = 0;
//  }
//  estadoDiv.innerHTML = estado;
//  counterDiv.innerHTML = counter.toString();
//  rodadaDiv.innerHTML = rodada.toString();
//}, 500);

//appDiv.innerHTML = `<h1>${title}</h1>
//<hr/>
//<p>Parágrafo qualquer...</p>
//`;

//console.log('Olá, mundo!');

//for (let i = 1; i <= 10; i++) {
//  if (i % 2 == 0) {
//    console.log(i);
//  }
//}
