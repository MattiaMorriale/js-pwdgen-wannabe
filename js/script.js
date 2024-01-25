const nome = prompt("Nome");

const cognome = prompt("Cognome");

const colore = prompt("Colore");

let password = nome + cognome + colore + 23;

document.getElementById("nome").innerHTML = nome;

document.getElementById("cognome").innerHTML = cognome;

document.getElementById("colore").innerHTML = colore;

document.getElementById("password").innerHTML = password;