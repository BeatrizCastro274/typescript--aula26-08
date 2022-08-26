let title: string = 'Tabata Timer - Aula 19/08';
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
<h2> list:${list} </h2>
<h2>Other list: ${otherList} </h2>
`;

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
