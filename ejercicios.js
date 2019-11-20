console.log("Ejercicio 38");
//Declarar una variable nombre con tu nombre como valor
//Mostrar en consola la cantidad de letras que tiene tu nombre
let nombre1 = "Ivana";
console.log(nombre1.length);

console.log("Ejercicio 39");
// Declarar una variable nombre con tu nombre como valor
// Declarar una variable apellido con tu apellido como valor
// Mostrar en consola el siguientes mensajes:
// Mi nombre es nombre y tiene nombre.length letras
// Mi nombre es apellido y tiene apellido.length letras
// Utilizar console.log() para cada mensaje
// Se puede utilizar variables auxiliares para la cantidad de letras que tienen los valores de las variables nombre y apellido

let nombre2 = "Ivana";
let apellido1 = "Croxcatto";
console.log(`Mi nombre es ${nombre2} y tiene ${nombre2.length} letras.
Mi apellido es ${apellido1} y tiene ${apellido1.length} letras.`)


console.log("Ejercicio 40");
// Declarar la variable texto con el siguiente valor: Usando el método
// Declarar la variable metodo con el siguiente valor: concat
// Mostrar en consola el siguiente texto utilizando el método de string concat: Usando el método concat
let texto1 = "Usando el método ";
let metodo = "concat";
console.log(texto1.concat(metodo));


console.log("Ejercicio 41");
// Declarar la variable texto y asignar el siguiente valor: HOLA MUNDO
// Mostrar en consola el contenido de la variable texto en minúscula
let texto2 = "HOLA MUNDO";
console.log(texto2.toLowerCase());

console.log("Ejercicio 42");
// Declarar la variable texto y asignar el siguiente valor: hola mundo
// Mostrar en consola el contenido de la variable texto en mayúscula
let texto3 = "hola mundo";
console.log(texto3.toUpperCase());


console.log("Ejercicio 43");

let texto = "the dark knight";
let primeraLetra, segundaLetra, terceraLetra;
primeraLetra = texto.charAt(0);
segundaLetra = texto.charAt(4);
terceraLetra = texto.charAt(9);
let resultado = primeraLetra.concat(segundaLetra, terceraLetra);

console.log(resultado.toUpperCase());


console.log("Ejercicio 44");

let texto44 = "HOLA";
let resultado44 = texto44.charAt(3).concat(texto44.charAt(2), texto44.charAt(1), texto44.charAt(0)).toLowerCase();

console.log(resultado44);


console.log("Ejercicio 45");

let mensaje = "Ada Lovelace fue la ayudante de Charles Babbage";
let programadora = mensaje.slice(0, 12);
console.log(`¡${programadora}, la primera programadora de la historia!`);

console.log("Ejercicio 46");
// Declarar la variable usuarioYPassword y asignarle el siguiente texto: 'ada2019,12345'
// Declarar la variable nombreDeUsuario y utilizar el método substr para obtener el nombre de usuario (ada2019)
// Declarar la variable password y utilizar el método substr para obtener el password (12345)
// Mostrar en consola el siguiente mensaje: El usuario ${nombreDeUsuario} tiene ${password} como password
let usuarioYPassword = "ada2019,12345";
let nombreDeUsuario = usuarioYPassword.substr(0,8);
let password = usuarioYPassword.substr(8,14);
console.log(`El usuario ${nombreDeUsuario} tiene ${password} como contraseña.`);

console.log("Ejercicio 48");
// Declarar la variable piString y guardar el valor 3.14 como String
// Declarar la variable constanteString y guardar el valor 42 como String
// Declarar la variable pi y guardar el valor que tenemos en la variable piString y transformarlo como número decimal
// Declarar la variable constante y guardar el valor que tenemos en la variable constanteString y transformarlo como número entero
// Declarar la variable resultado y asignar el resultado de la suma de las variables pi y constante
// Mostrar en consola el contenido de la variable resultado
// Mostrar en consola el mensaje: 45.14 es el resultado de sumar las variables *pi* y *constante*, donde *pi* es el valor que tiene la variable pi y *constante* es el valor de la variable constante. Utilizar el método toString para convertir los numbers a strings.

let piString = "3.14";
let constanteString = "42";
let pi = parseFloat(piString);
let constante = parseInt(constanteString);
let resultado1 = piString + constante;
console.log(`El resultado es ${resultado1}.`);
console.log(`45.14 es el resultado de sumar las variables ${pi} y ${constante}, donde ${pi.toString()} es el valor de la variable pi y ${constante.toString()} es el valor de la variable constante.`);



console.log("Ejercicio adicional");

let cantLetrasNombre = Number(prompt("Ingresá la cantidad de letras de tu nombre: "));
let nombre = [];
let nombreConcat = [];
for (i=0; i <cantLetrasNombre; i++) {
  nombre[i] = prompt(`Ingresá la letra ${i+1} de tu nombre: `);
  nombreConcat = nombreConcat+nombre[i];
 };
console.log(nombreConcat);
console.log("Decorar");
let nombreDecorado = [];
for (i=0; i<=cantLetrasNombre; i += 2) {
  nombreDecorado = nombreDecorado+nombreConcat.charAt(i).toUpperCase()+nombreConcat.charAt(i+1).toLowerCase();
}
let primerEspacio = nombre[nombreConcat.length - ((nombreConcat.length - nombreConcat.length) +1)];
primerEspacio = "❀❀❀ ";

let ultimoEspacio = nombre[nombreConcat.length +1];
ultimoEspacio = " ❀❀❀";
console.log(primerEspacio + nombreDecorado + ultimoEspacio);

//falta mejorar el código recorriendo el string directamente.
 





